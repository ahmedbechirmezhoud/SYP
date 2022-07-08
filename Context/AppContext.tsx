import { useReducer, createContext, useMemo } from "react";
import mainReducer from "./AppReducer";
import {
  AppContextInterface,
  Reducer,
  stateType,
  TimelineActions,
  UserActions,
} from "./types";

const initialState: stateType = {
  user: {
    email: "",
    NotificationToken: "",
    Notifications: [],
    IEEEID: "",
    FirstName: "",
    LastName: "",
    Gender: "",
    DateofBirth: "",
    PassportNumber: "",
    CountryOfResidence: "",
  },
  timeline: null,
};

export const AppContext = createContext<AppContextInterface>([
  initialState,
  () => { },
]);
export const AppConsumer = AppContext.Consumer;

export const AppProvider = ({ children }: { children?: React.ReactNode; }) => {
  const [state, dispatch] = useReducer<
    Reducer<stateType, UserActions & TimelineActions>
  >(mainReducer, initialState);

  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  console.log(state);
  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
