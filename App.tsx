import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import Navigation from "./navigation";

import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { AppContext, AppProvider } from "./Context/AppContext";

import * as Network from "expo-network";
import { Alert, BackHandler } from "react-native";

const firebaseConfig = {
  apiKey: "AIzaSyDX8JG_kPw0oR41PE6Q_J2NW3qJMvuaNcY",
  authDomain: "r8syp-8062b.firebaseapp.com",
  projectId: "r8syp-8062b",
  storageBucket: "r8syp-8062b.appspot.com",
  messagingSenderId: "640548717558",
  appId: "1:640548717558:web:bc66e02d1e7731cdb47dd7",
  measurementId: "G-2RF8G89EW8",
};

export default function App() {
  const isLoadingComplete = useCachedResources();
  const [connected, setConnected] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    initializeApp(firebaseConfig);
    Network.getNetworkStateAsync().then((state) => {
      setConnected(state.isConnected && state.isInternetReachable);
    });
  }, []);

  useEffect(() => {
    connected === false &&
      Alert.alert(
        "network problem",
        "Please Check your Internet Connection then retry. ",
        [
          {
            text: "Exit",
            onPress: () => BackHandler.exitApp(),
          },
        ],
        {
          cancelable: true,
          onDismiss: () => BackHandler.exitApp(),
        }
      );
  }, [connected]);

  if (!isLoadingComplete && !connected) {
    return null;
  } else {
    return (
      <AppProvider>
        <AppContext.Consumer>
          {(value) => {
            return (
              <SafeAreaProvider>
                <Navigation />
                <StatusBar />
              </SafeAreaProvider>
            );
          }}
        </AppContext.Consumer>
      </AppProvider>
    );
  }
}
