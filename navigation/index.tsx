// @ts-nocheck
import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  useNavigationContainerRef,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { Pressable } from "react-native";

import Colors from "../constants/Colors";
import NotificationsScreen from "../screens/NotificationsScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import ContactScreen from "../screens/ContactScreen";
import TimelineScreen from "../screens/TimelineScreen";
import {
  AuthStackParamList,
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from "../types";
import LinkingConfiguration from "./LinkingConfiguration";
import EventScreen from "../screens/EventScreen";
import ProfileScreen from "../screens/ProfileScreen/ProfileScreen";
import WelcomeScreen from "../screens/WelcomeScreen/WelcomeScreen";

import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import {
  addNotificationReceivedListener,
  addNotificationResponseReceivedListener,
  removeNotificationSubscription,
} from "expo-notifications";
import { useEffect, useRef, useState } from "react";
import { getFirestore, doc, updateDoc, getDoc } from "firebase/firestore";

import {
  registerForPushNotificationsAsync,
  schedulePushNotification,
} from "../services/notifications";

import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import { Types } from "../Context/types";
import * as GoogleSignIn from "expo-google-sign-in";

import * as Analytics from "expo-firebase-analytics";

export default function Navigation() {
  const { state, dispatch } = useContext(AppContext);
  const [user, setUser] = useState(null);

  const navigationRef = useNavigationContainerRef();
  const routeNameRef = useRef();

  onAuthStateChanged(getAuth(), () => {
    setUser(getAuth().currentUser);
  });

  useEffect(() => {
    if (user) {
      getDoc(doc(getFirestore(), "users", user?.email)).then((doc) => {
        if (doc.exists()) {
          dispatch({
            type: Types.LOGIN,
            payload: {
              email: user?.email,
              ...doc.data(),
            },
          });
          if (
            !doc.data().Notifications ||
            doc.data().Notifications.length === 0
          )
            schedulePushNotification();
        } else {
          (async () => {
            await GoogleSignIn.signOutAsync();
            await signOut(getAuth());
          })();
          dispatch({ type: Types.LOGOUT, payload: {} });
          alert("This email is not registered");
        }
      });
    }
  }, [user]);

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        routeNameRef.current = navigationRef.getCurrentRoute().name;
      }}
      onStateChange={async () => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = navigationRef.getCurrentRoute().name;

        if (previousRouteName !== currentRouteName) {
          await Analytics.setCurrentScreen(currentRouteName);
        }
        routeNameRef.current = currentRouteName;
      }}
      linking={LinkingConfiguration}
    >
      {user ? <RootNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

function AuthNavigator() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
    </AuthStack.Navigator>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  const [expoPushToken, setExpoPushToken] = useState("");
  const notificationListener = useRef<any>();
  const responseListener = useRef<any>();
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    registerForPushNotificationsAsync().then((token: any) => {
      setExpoPushToken(token || "");
    });

    notificationListener.current = addNotificationReceivedListener(
      (notification) => {
        Analytics.logEvent("Notification_Received", notification);
        dispatch({
          type: Types.ADD_NOTIFICATION,
          payload: {
            notification: {
              title: notification.request.content.title,
              message: notification.request.content.body,
            },
          },
        });
      }
    );

    responseListener.current = addNotificationResponseReceivedListener(
      (response) => {
        console.log(response);
      }
    );

    return () => {
      removeNotificationSubscription(notificationListener.current);
      removeNotificationSubscription(responseListener.current);
    };
  }, []);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
      <Stack.Group
        screenOptions={{
          presentation: "modal",
          headerBackVisible: true,
          headerTransparent: true,
          headerShadowVisible: false,
          headerTintColor: Colors["primaryColor"],
          headerTitleStyle: {
            color: Colors["primaryColor"],
            //fontFamily: "futura",
            fontSize: 25,
          },
        }}
      >
        <Stack.Screen
          name="Notifications"
          component={NotificationsScreen}
          options={{ animation: "fade_from_bottom" }}
        />
        <Stack.Screen
          name="Event"
          component={EventScreen}
          options={{
            headerTransparent: true,
            headerTintColor: Colors["backgroundColor"],
            headerTitle: "",
            animation: "fade_from_bottom",
            animationTypeForReplace: "push",
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="Timeline"
      screenOptions={{
        tabBarActiveTintColor: Colors["backgroundColor"],
        tabBarInactiveTintColor: Colors["primaryColor"],
        tabBarActiveBackgroundColor: Colors["primaryColor"],
        tabBarInactiveBackgroundColor: Colors["backgroundColor"],
        tabBarShowLabel: false,
        headerTitleStyle: {
          color: Colors["primaryColor"],
          textTransform: "uppercase",
          //fontFamily: "futura",
          letterSpacing: 1,
        },
        headerTransparent: true,
        headerShadowVisible: false,
      }}
    >
      <BottomTab.Screen
        name="Timeline"
        component={TimelineScreen}
        options={({ navigation }: RootTabScreenProps<"Timeline">) => ({
          title: "Timeline",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="calendar" color={color} />
          ),
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate("Notifications")}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            >
              <FontAwesome
                name="bell"
                size={25}
                color={Colors["primaryColor"]}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="Contact"
        component={ContactScreen}
        options={({ navigation }: RootTabScreenProps<"Contact">) => ({
          title: "Contact",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="address-book" color={color} />
          ),
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate("Notifications")}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            >
              <FontAwesome
                name="bell"
                size={25}
                color={Colors["primaryColor"]}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={({ navigation }: RootTabScreenProps<"Profile">) => ({
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate("Notifications")}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            >
              <FontAwesome
                name="bell"
                size={25}
                color={Colors["primaryColor"]}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
