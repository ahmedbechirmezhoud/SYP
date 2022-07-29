// @ts-nocheck
import { useEffect, useState, useRef } from "react";
import { StyleSheet, Text, View, Animated } from "react-native";
import Colors from "../constants/Colors";
import Layout from "../constants/Layout";
import Event from "../components/Event";

import data from "../schedule-data";
import moment from "moment";

import Svg, { Polygon } from "react-native-svg";

export default function TimelineScreen() {
  const [days, setDays] = useState([3, 4, 5, 6, 7]);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim, days]);

  useEffect(() => {
    if (moment().isBetween("2022-08-03 00:00:00", "2022-08-07 23:59:59"))
      setDays((prev) => {
        for (let idx = 0; idx <= moment().day() - 4; idx++)
          prev.push(prev.shift() || 0);
        return [...prev];
      });
  }, []);

  return (
    <View style={{ backgroundColor: Colors["backgroundColor"], flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>August 2022</Text>
        <View style={styles.days}>
          {days.map((day, i) => (
            <View
              key={i}
              style={[styles.dayWarpper, i ? { flexDirection: "row" } : {}]}
            >
              {day === 3 && i ? <View style={styles.separator} /> : <></>}
              <Animated.View
                onPress={() => {
                  fadeAnim.setValue(0);
                  setDays((prev) => {
                    for (let idx = 0; idx <= i - 1; idx++)
                      prev.push(prev.shift() || 0);
                    return [...prev];
                  });
                }}
                style={[!i && styles.active, { opacity: fadeAnim }]}
                key={i}
              >
                <Text
                  onPress={() => {
                    fadeAnim.setValue(0);
                    setDays((prev) => {
                      for (let idx = 0; idx <= i - 1; idx++)
                        prev.push(prev.shift() || 0);
                      return [...prev];
                    });
                  }}
                  style={[
                    {
                      color: "#9D9D9D",
                      fontSize: 17,
                      paddingVertical: 2,
                      paddingHorizontal: 10,
                    },
                    !i && {
                      color: "#FFF4F4",
                    },
                  ]}
                >
                  {day}
                </Text>
              </Animated.View>
              {!i && (
                <>
                  <Svg height="8" width="15">
                    <Polygon
                      points="0,0 7.5,10 15,0"
                      fill={Colors["primaryColor"]}
                    />
                  </Svg>
                  <View style={styles.line} />
                </>
              )}
            </View>
          ))}
        </View>
        <Animated.ScrollView style={[styles.events, { opacity: fadeAnim }]}>
          {data
            .filter((val: any) => val["day"] == days[0])
            .map((ev: any, i: number) => (
              <Event {...ev} day={days[0].toString()} key={i} />
            ))}
        </Animated.ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: Colors["backgroundColor"],
    marginTop: 100,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    //fontFamily: "futura",
    textTransform: "uppercase",
    color: Colors["tintColorLight"],
    letterSpacing: 2,
  },
  days: {
    position: "absolute",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-evenly",
    width: Layout.window.width - 15,
    marginTop: 50,
  },
  day: {
    paddingVertical: 2,
    paddingHorizontal: 10,
    //fontFamily: "futura",
  },
  active: {
    backgroundColor: Colors["primaryColor"],
    paddingHorizontal: 10,

    borderRadius: 11,
  },
  dayWarpper: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
  separator: {
    width: 2,
    height: 20,
    backgroundColor: Colors["tintColorLight"],
    marginRight: 50,
  },
  line: {
    width: 2,
    height: Layout.window.height,
    backgroundColor: Colors["primaryColor"],
  },
  events: {
    marginTop: 70,
  },
});
