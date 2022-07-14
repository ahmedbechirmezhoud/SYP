import { Pressable, StyleSheet, TouchableOpacity } from "react-native";
import { Text, View, Image } from "react-native";
import TelIcon from "../assets/Icons/TelIcon";
import WhatsappLogo from "../assets/Icons/WhatsappLogo";
import Colors from "../constants/Colors";
import Layout from "../constants/Layout";
import { Linking } from "react-native";

import * as Analytics from "expo-firebase-analytics";

export default function ContactScreen() {
  const data = [
    {
      name: "Khaldoun Taktak",
      position: "Congress Chair",
      WhatsappTel: "21629205239",
      image: require("../assets/images/contact/KhaldounTaktak.png"),
    },
    {
      name: "Rim Chihi",
      position: "Participants Coordinator",
      WhatsappTel: "21629205239",
      image: require("../assets/images/contact/RimChihi.png"),
    },
  ];

  const EmergencyData = [
    {
      name: "Police Emergency",
      tel: 197,
    },
    {
      name: "Emergency Medical Team",
      tel: 198,
    },
    {
      name: "Fire Department",
      tel: 190,
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Congress committee</Text>
      {data.map((member, i) => (
        <View key={i} style={styles.commiteeMember}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <Image source={member.image} />
            <View style={{ marginLeft: 10 }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                  color: Colors["text"],
                }}
              >
                {member.name}
              </Text>
              <Text style={{ color: Colors["text"] }}>{member.position}</Text>
            </View>
          </View>
          <Pressable
            onPress={() => {
              Analytics.logEvent("contact_whatsapp", member);
              Linking.openURL(`whatsapp://send?phone=${member.WhatsappTel}`);
            }}
          >
            <WhatsappLogo />
          </Pressable>
        </View>
      ))}

      <Text style={[styles.sectionTitle, { marginTop: 30 }]}>
        emergency services
      </Text>
      {EmergencyData.map((val, i) => (
        <View
          key={i}
          style={{
            flexDirection: "row",
            alignItems: "center",
            width: Layout.window.width,
            justifyContent: "space-between",
            paddingHorizontal: 20,
            marginVertical: 10,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              width: Layout.window.width * 0.6,
              color: Colors["text"],
            }}
          >
            {val.name}
          </Text>
          <TouchableOpacity
            onPress={() => {
              Analytics.logEvent("contact_emergency", val);
              Linking.openURL(`tel:${val.tel}`);
            }}
          >
            <Text
              style={{
                backgroundColor: Colors["primaryColor"],
                paddingHorizontal: 10,
                paddingVertical: 5,
                borderRadius: 10,
                color: "#fff",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 14,
                fontWeight: "bold",
              }}
            >
              <TelIcon /> {val.tel}
            </Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingTop: 120,
    backgroundColor: Colors["backgroundColor"],
  },
  sectionTitle: {
    paddingLeft: 30,
    fontSize: 11,
    fontWeight: "bold",
    // fontFamily: "futura",
    marginBottom: 30,
    letterSpacing: 0.5,
    textTransform: "uppercase",

    color: Colors["secondary"],
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  commiteeMember: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    width: Layout.window.width,
    alignSelf: "center",
    marginVertical: 10,
  },
});
