// @ts-nocheck
import { StatusBar } from "expo-status-bar";
import { useContext } from "react";
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Colors from "../constants/Colors";
import Layout from "../constants/Layout";
import { AppContext } from "../Context/AppContext";

export default function NotificationsScreen() {
  const { state } = useContext(AppContext);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.warpper}>
        {state.user.Notifications ? (
          state.user.Notifications.map((notif, idx) => (
            <TouchableOpacity key={idx} style={styles.notification}>
              <Text style={styles.title}> {notif.title} </Text>
              <Text style={styles.message}>{notif.message}</Text>
            </TouchableOpacity>
          ))
        ) : (
          <Text
            style={{ fontWeight: "bold", marginTop: 50, color: Colors["text"] }}
          >
            No Notification Found
          </Text>
        )}
      </ScrollView>

      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors["backgroundColor"],
  },
  warpper: {
    marginTop: 130,
  },
  notification: {
    backgroundColor: Colors["tintColorLight"],
    width: Layout.window.width,
    marginVertical: 5,
    paddingVertical: 5,
    paddingHorizontal: 13,
  },
  title: {
    fontSize: 15,
  },
  message: {
    fontSize: 10,
  },
});
