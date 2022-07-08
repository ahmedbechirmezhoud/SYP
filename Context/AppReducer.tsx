import { EventTimeline, User } from "../types";
import {
  Reducer,
  stateType,
  TimelineActions,
  Types,
  UserActions,
} from "./types";

export const userReducer = (state: User | null, action: UserActions) => {
  switch (action.type) {
    case Types.LOGIN:
      return action.payload;
    case Types.LOGOUT:
      return null;
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
