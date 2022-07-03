import { View, Text, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import PlaneIcon from "../assets/Icons/PlaneIcon";

import Colors from "../constants/Colors";
import Layout from "../constants/Layout";
import { useEffect, useState } from "react";
import moment from "moment";

interface EventProps {
  title: string;
  from: string[];
  to: string[];
  day: string;
  Icon?: any;
}

export default function Event({ title, from, to, day, Icon }: EventProps) {
  const navigation = useNavigation();
  const [state, setState] = useState<"PAST" | "NOW" | "FUTURE">("PAST");

  useEffect(() => {
    if (
      moment(`2022-08-0${day} ${from[0] + ":" + from[1]}:00`).isBefore(
        "2022-08-04 15:00:00"
      )
    )
      setState("PAST");
    else setState("FUTURE");
    if (
      moment("2022-08-04 15:00:00").isBetween(
        `2022-08-0${day} ${from[0] + ":" + from[1]}:00`,
        `2022-08-0${day} ${to[0] + ":" + to[1]}:00`
      )
    )
      setState("NOW");
  }, [day]);

  return (
    <Pressable
      onPress={() => {
        navigation.navigate("Event", {
          title: title,
          time: from[0] + ":" + from[1] + " - " + to[0] + ":" + to[1],
          location: "",
          Icon: Icon,
        });
      }}
      style={[
        styles.eventContainer,
        {
          backgroundColor:
            state === "FUTURE"
              ? Colors["primaryColor"]
              : state === "NOW"
              ? Colors["primaryColor"]
              : Colors["tintColorLight"],
          marginLeft: state === "NOW" ? 50 : 30,
        },
      ]}
    >
      {Icon && (
        <Icon
          fill={
            state === "PAST"
              ? Colors["primaryColor"]
              : Colors["backgroundColor"]
          }
          style={{ marginLeft: 10, marginRight: 25 }}
          width="30"
          height="30"
        />
      )}
      <View style={{ flexDirection: "column" }}>
        <Text
          style={{
            color: state === "PAST" ? "#1E1E1E" : Colors["backgroundColor"],
            letterSpacing: 0.5,
            fontSize: 15,
          }}
        >
          {title}
        </Text>
        <Text
          style={{
            color: state === "PAST" ? "#1E1E1E" : Colors["backgroundColor"],
            letterSpacing: 0.5,
            fontSize: 10,
          }}
        >
          {from[0] + ":" + from[1]} {to[0] && "-" + to[0] + ":" + to[1]}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  eventContainer: {
    width: Layout.window.width - 60,
    padding: 10,
    margin: 10,
    borderRadius: 10,
    //fontFamily: "futura",
    flexDirection: "row",
    alignItems: "center",
  },
});
