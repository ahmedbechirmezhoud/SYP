/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type EventProps = {
  title: string;
  location: string;
  time: string;
  Icon?: any;
};

export type AuthStackParamList = {
  Welcome: undefined;
};

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Welcome: undefined;
  Notifications: undefined;
  Event: EventProps | undefined;
  NotFound: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabParamList = {
  Timeline: undefined;
  Contact: undefined;
  Profile: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;

export interface User {
  email: string;
  IEEEID: string;
  NotificationToken?: string;
  Notifications?: Notification[];
  FirstName?: string;
  LastName?: string;
  Gender?: string;
  DateofBirth?: string;
  PassportNumber?: string;
  CountryOfResidence?: string;
}

export interface Notification {
  title: string;
  message: string;
}

export interface EventTimeline {
  title: string;
  from: string[];
  to: string[];
  day: number;
  Icon: ({ fill, ...props }: { [x: string]: any; fill: any }) => JSX.Element;
}
