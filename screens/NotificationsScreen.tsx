import { StatusBar } from "expo-status-bar";
import { Platform, ScrollView, StyleSheet, Text, View } from "react-native";
import Colors from "../constants/Colors";
import Layout from "../constants/Layout";

const data = [
  {
    title: "Welcome to Tunisia 🇹🇳",
    message: "Ahla b sa7bi marahba bik Lorem ipsum dolor sit amet, conse",
  },
  {
    title: "Welcome to Tunisia 🇹🇳",
    message: "Ahla b sa7bi marahba bik Lorem ipsum dolor sit amet, conse",
  },
  {
    title: "Welcome to Tunisia 🇹🇳",
    message: "Ahla b sa7bi marahba bik Lorem ipsum dolor sit amet, conse",
  },
  {
    title: "Welcome to Tunisia 🇹🇳",
    message: "Ahla b sa7bi marahba bik Lorem ipsum dolor sit amet, conse",
  },
  {
    title: "Welcome to Tunisia 🇹🇳",
    message: "Ahla b sa7bi marahba bik Lorem ipsum dolor sit amet, conse",
  },
  {
    title: "Welcome to Tunisia 🇹🇳",
    message: "Ahla b sa7bi marahba bik Lorem ipsum dolor sit amet, conse",
  },
  {
    title: "Welcome to Tunisia 🇹🇳",
    message: "Ahla b sa7bi marahba bik Lorem ipsum dolor sit amet, conse",
  },
  {
    title: "Welcome to Tunisia 🇹🇳",
    message: "Ahla b sa7bi marahba bik Lorem ipsum dolor sit amet, conse",
  },
  {
    title: "Welcome to Tunisia 🇹🇳",
    message: "Ahla b sa7bi marahba bik Lorem ipsum dolor sit amet, conse",
  },
  {
    title: "Welcome to Tunisia 🇹🇳",
    message: "Ahla b sa7bi marahba bik Lorem ipsum dolor sit amet, conse",
  },
  {
    title: "Welcome to Tunisia 🇹🇳",
    message: "Ahla b sa7bi marahba bik Lorem ipsum dolor sit amet, conse",
  },
  {
    title: "Welcome to Tunisia 🇹🇳",
    message: "Ahla b sa7bi marahba bik Lorem ipsum dolor sit amet, conse",
  },
  {
    title: "Welcome to Tunisia 🇹🇳",
    message: "Ahla b sa7bi marahba bik Lorem ipsum dolor sit amet, conse",
  },
  {
    title: "Welcome to Tunisia 🇹🇳",
    message:
      "Ahla b sa7bi marahba bik Lorem ipsum dolor sit amet, consedmkjfsjmkfjsdfkmjsdjfmdksjfkmsdjfkmdsjfkmjdkjfkmj",
  },
];

export default function NotificationsScreen() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.warpper}>
        {data.map((notif, idx) => (
          <View key={idx} style={styles.notification}>
            <Text style={styles.title}> {notif.title} </Text>
            <Text style={styles.message}>{notif.message}</Text>
          </View>
        ))}
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
