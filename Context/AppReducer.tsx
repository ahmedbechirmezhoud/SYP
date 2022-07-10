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

export const userReducer = (state: User | null, action: UserActions) => {
  switch (action.type) {
    case Types.LOGIN:
      Analytics.logEvent("context_Login", action.payload);
      return action.payload;
    case Types.ADD_NOTIFICATION:
      Analytics.logEvent("context_add_notification", action.payload);
      return {
        ...state,
        Notifications: [...state?.Notifications, action.payload],
      };
    case Types.LOGOUT:
      Analytics.logEvent("context_Logout", action.payload);
      return defaultUser;
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
