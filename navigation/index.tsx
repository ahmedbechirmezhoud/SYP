// @ts-nocheck
import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
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

import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import {
  addNotificationReceivedListener,
  addNotificationResponseReceivedListener,
  removeNotificationSubscription,
} from "expo-notifications";
import { useEffect, useRef, useState } from "react";
import { getFirestore, setDoc, doc } from "firebase/firestore";
import { registerForPushNotificationsAsync } from "../services/notifications";
import { CurrentUser } from "../utils/user";

export default function Navigation() {
  const [user, setUser] = React.useState<User | null>(null);

  onAuthStateChanged(getAuth(), async (currUser) => {
    if (currUser) setUser(currUser);
    else setUser(null);
  });

  return (
    <NavigationContainer linking={LinkingConfiguration}>
      <RootNavigator />
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
  const [notification, setNotification] = useState<any>();
  const notificationListener = useRef<any>();
  const responseListener = useRef<any>();

  useEffect(() => {
    registerForPushNotificationsAsync().then((token: any) =>
      setExpoPushToken(token || "")
    );

    notificationListener.current = addNotificationReceivedListener(
      (notification) => {
        setNotification(notification);
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

  onAuthStateChanged(getAuth(), async (currUser) => {
    if (currUser) {
      CurrentUser.updateInfo({ NotificationToken: expoPushToken });
      await setDoc(doc(getFirestore(), "users", currUser.email || ""), {
        NotificationToken: expoPushToken,
      }).catch((error) => alert(error));
    }
  });

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
