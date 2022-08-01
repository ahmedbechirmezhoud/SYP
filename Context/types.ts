import { EventTimeline, Notification, User } from "../types";

export interface stateType{
    user: User | null;
    timeline: EventTimeline[] | null;
  }


  export type ActionMap<M extends { [index: string]: any }> = {
    [Key in keyof M]: M[Key] extends undefined
      ? {
          type: Key;
        }
      : {
          type: Key;
          payload: M[Key];
        };
  };

  
export type UserActions =
ActionMap<UserPayload>[keyof ActionMap<UserPayload>];


  export enum Types {
    LOGIN = "LOGIN",
    LOGOUT = "LOGOUT",
    ADD_NOTIFICATION = "ADD_NOTIFICATION",
    UPDATE_NOTIFICATIONTOKEN = "UPDATE_NOTIFICATIONTOKEN",
    UPDATE_IEEEID = "UPDATE_IEEEID",
    FETCH_EVENTS ="FETCH_EVENTS",
    ADD_EVENT ="ADD_EVENT",
  }
  
 export type UserPayload = {
    [Types.LOGIN]: {
      user: User;
    };
    [Types.LOGOUT]: {};
    [Types.ADD_NOTIFICATION]: {
      notification: Notification;
    };
    [Types.UPDATE_NOTIFICATIONTOKEN]: {
        NotificationToken: string;
      };
    [Types.UPDATE_IEEEID]: {
      IEEEID: string;
    };
  };
  

  export type TimelinePayload = {
    [Types.FETCH_EVENTS]: {
      events: EventTimeline[] ;
    };
    [Types.ADD_EVENT]: {
      notification: Notification;
    };
  };
  
  export type TimelineActions =
    ActionMap<UserPayload>[keyof ActionMap<UserPayload>];

export type Dispatcher = <
  Type extends Types,
  Payload extends UserActions & TimelineActions
>(
  type: Type,
  ...payload: Payload extends undefined ? [undefined?] : [Payload]
) => void;
export type AppContextInterface = readonly [stateType, Dispatcher];

export type Reducer<S, A> = (prevState: S, action: A) => S;
