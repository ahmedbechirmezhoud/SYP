/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
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
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from "../types";
import LinkingConfiguration from "./LinkingConfiguration";
import ProfileScreen from "../screens/ProfileScreen";
import WelcomeScreen from "../screens/WelcomeScreen";

export default function Navigation() {
  return (
    <NavigationContainer linking={LinkingConfiguration}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
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
            textTransform: "uppercase",
            fontFamily: "futura",
            letterSpacing: 1,
            fontSize: 25,
          },
        }}
      >
        <Stack.Screen
          name="Notifications"
          component={NotificationsScreen}
          options={{ animation: "fade_from_bottom" }}
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
          fontFamily: "futura",
          letterSpacing: 1,
          fontSize: 25,
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
