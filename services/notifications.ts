import { isDevice } from "expo-device";
import { getPermissionsAsync, requestPermissionsAsync, getExpoPushTokenAsync, setNotificationChannelAsync, AndroidImportance, scheduleNotificationAsync, setNotificationHandler } from "expo-notifications";
import { Platform } from "react-native";


setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});


export async function registerForPushNotificationsAsync() {
    let token;
    if (isDevice) {
      const { status: existingStatus } =
        await getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== "granted") {
        const { status } = await requestPermissionsAsync(); 
        finalStatus = status;
      }
      if (finalStatus !== "granted") {
        alert("Failed to get push token for push notification!");
        return;
      }
      token = (await getExpoPushTokenAsync()).data;
    } else {
      alert("Must use physical device for Push Notifications");
    }
  
    if (Platform.OS === "android") {
      setNotificationChannelAsync("default", {
        name: "default",
        importance: AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: "#FF231F7C",
      });
    }
  
    return token;
  }
  
