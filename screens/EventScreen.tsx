import { useRoute } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import {
  Linking,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import Colors from "../constants/Colors";
import Layout from "../constants/Layout";

export default function EventScreen() {
  const route = useRoute();
  const { time, title, location, Icon, color, lat, lng }: any = route.params;

  return (
    <View
      style={[styles.container, { backgroundColor: Colors["backgroundColor"] }]}
    >
      <View style={[styles.warpper, { backgroundColor: color }]}>
        {Icon && (
          <Icon
            fill={Colors["backgroundColor"]}
            style={{
              position: "absolute",
              top: Layout.window.height * 0.07,
              right: Layout.window.width * 0.2,
              transform: [{ scale: 2.8 }, { rotate: "5deg" }],
              opacity: 0.35,
            }}
          />
        )}
        <Text style={styles.title}> {title}</Text>
        <Text style={[styles.time, !lat && !lng && { marginBottom: 50 }]}>
          {" "}
          {time}{" "}
        </Text>
        {lat && lng && (
          <Pressable
            onPress={() => {
              const url = Platform.select({
                ios: `maps:0,0?q=SPY ${title}@${lat},${lng}`,
                android: `geo:0,0?q=${lat},${lng}(SYP ${title})`,
              });
              url && Linking.openURL(url);
            }}
          >
            <Text style={[styles.button, { backgroundColor: color }]}>
              SEE ON MAPS
            </Text>
          </Pressable>
        )}
      </View>
      {!location ? (
        <Text style={{ marginTop: 50, color: Colors["text"] }}>No Data</Text>
      ) : (
        <Text
          style={{
            marginTop: 20,
            marginLeft: 30,
            color: Colors["text"],
            alignSelf: "flex-start",
          }}
        >
          <Text
            style={{
              color: Colors["primaryColor"],
              fontWeight: "bold",
              letterSpacing: 2,
            }}
          >
            location:{" "}
          </Text>
          {location}
        </Text>
      )}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  warpper: {
    height: 360,
    paddingTop: 100,
    justifyContent: "flex-end",
    width: Layout.window.width,
    backgroundColor: Colors["primaryColor"],
    borderBottomEndRadius: 50,
    borderBottomStartRadius: 50,
  },
  title: {
    fontSize: 20,
    //fontFamily: "futura",
    color: Colors["backgroundColor"],
    textTransform: "uppercase",
    marginLeft: 50,
    fontWeight: "bold",
  },
  time: {
    fontSize: 11,
    //fontFamily: "futura",
    color: Colors["backgroundColor"],
    textTransform: "uppercase",
    letterSpacing: 1,
    marginLeft: 50,
    fontWeight: "bold",
  },
  button: {
    marginBottom: 20,
    marginTop: 30,
    alignSelf: "center",
    //fontFamily: "futura",
    letterSpacing: 1,
    borderColor: Colors["backgroundColor"],
    color: Colors["backgroundColor"],
    borderRadius: 4,
    textAlign: "center",
    paddingVertical: 7,
    borderWidth: 2,
    alignItems: "center",
    width: Layout.window.width * 0.4,
    backgroundColor: Colors["primaryColor"],
    fontWeight: "bold",
  },
});
