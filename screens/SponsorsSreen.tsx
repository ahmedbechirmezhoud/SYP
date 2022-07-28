import {
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
  Image,
  View,
} from "react-native";
import Colors from "../constants/Colors";
import Layout from "../constants/Layout";
import sponsorsData from "../sponsors-data";
import * as Linking from "expo-linking";

function Sponsors({ type, MinusWidth }: any) {
  return (
    <View
      style={{
        flexDirection: "row",
        width: Layout.window.width,
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {sponsorsData
        .filter((v) => v.type === type)
        .map((val, i) => (
          <TouchableOpacity
            style={{ maxHeight: 100, marginHorizontal: 10, marginVertical: 20 }}
            onPress={() => Linking.openURL(val.link)}
            key={i}
          >
            <Image
              source={val.filename}
              style={{
                width: Layout.window.width / 2 - MinusWidth,
                maxHeight: 100,
                resizeMode: "contain",
                borderRadius: 5,
              }}
            />
          </TouchableOpacity>
        ))}
    </View>
  );
}

export default function SponsorsScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.sectionTitle}>Platinum Sponsors</Text>
        <Sponsors type="Platinum" MinusWidth={20} />

        <Text style={styles.sectionTitle}>Gold Sponsors</Text>
        <Sponsors type="Gold" MinusWidth={60} />

        <Text style={styles.sectionTitle}>Silver Sponsors</Text>
        <Sponsors type="Silver" MinusWidth={70} />

        <Text style={styles.sectionTitle}>Bronze Sponsors</Text>
        <Sponsors type="Bronze" MinusWidth={70} />
      </ScrollView>
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
    letterSpacing: 0.5,
    textTransform: "uppercase",

    color: Colors["secondary"],
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: "#2e78b7",
  },
});
