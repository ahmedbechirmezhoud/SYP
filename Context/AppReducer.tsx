// @ts-nocheck
import { EventTimeline, User } from "../types";
import { defaultUser } from "./AppContext";
import {
  Reducer,
  stateType,
  TimelineActions,
  Types,
  UserActions,
} from "./types";
import * as Analytics from "expo-firebase-analytics";
import { doc, getFirestore, setDoc, updateDoc } from "firebase/firestore";

const updateNotificationToken = async (email, NotificationToken) => {
  await updateDoc(doc(getFirestore(), "users", email || ""), {
    NotificationToken: NotificationToken,
  }).catch((error) => alert(error));
};

export const userReducer = (state: User | null, action: UserActions) => {
  switch (action.type) {
    case Types.LOGIN:
      Analytics.setUserProperty(
        "Name",
        action.payload.FirstName + " " + action.payload.LastName
      );
      Analytics.logEvent("context_Login", action.payload);
      if (action.payload.inAppRegister)
        setDoc(doc(getFirestore(), "users", action.payload.email), {
          FirstName: action.payload.FirstName,
          LastName: action.payload.LastName,
          NewComer: action.payload.inAppRegister,
        });
      return action.payload;
    case Types.ADD_NOTIFICATION:
      Analytics.logEvent("context_add_notification", action.payload);
      return {
        ...state,
        Notifications: [action.payload.notification, ...state?.Notifications],
      };
    case Types.LOGOUT:
      Analytics.logEvent("context_Logout", action.payload);
      return defaultUser;
    case Types.UPDATE_NOTIFICATIONTOKEN:
      updateNotificationToken(state.email, action.payload.NotificationToken);
      return { ...state, NotificationToken: action.payload.NotificationToken };
    case Types.UPDATE_IEEEID:
      return { ...state, IEEEID: action.payload.IEEEID };
    default:
      return state;
  }
};

export const timelineReducer = (
  state: EventTimeline[] | null,
  action: TimelineActions
) => {
  switch (action.type) {
    default:
      return state;
  }
};

const mainReducer: Reducer<stateType, UserActions & TimelineActions> = (
  state,
  action
) => ({
  user: userReducer(state.user, action),
  timeline: timelineReducer(state.timeline, action),
});

export default mainReducer;
