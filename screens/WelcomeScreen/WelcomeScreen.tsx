// @ts-nocheck
import {
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Svg, { Path } from "react-native-svg";
import { styles } from "./style";
import CustomButton from "../../components/CustomButton/CustomButton";

export default function WelcomeScreen({ navigation }: any) {
  const continuePressEvent = () => {};

  return (
    <SafeAreaView>
      <LinearGradient
        colors={["#F4890CFF", "#FF9F2EFF", "#FFBB7C"]}
        style={styles.linearGradient}
        end={[0.8, 1.5]}
        start={[0.3, 0.1]}
      >
        <View style={styles.bgImageContainer}>
          <Image
            style={styles.bgImageStyle}
            source={require("./../../assets/images/welcome_bg/bg_welcome.png")}
          />
        </View>

        <View style={styles.root}>
          <View style={styles.container}>
            {/* Use seperated images with no display absolute to make sure no white text overlaps an image */}
            <Image
              source={require("./../../assets/images/welcome_bg/vec_top.png")}
            />
            <View style={styles.welcomeTextContainer}>
              <Text style={styles.title}>WELCOME TO</Text>
              <Text style={styles.syp_congress}>SYP CONGRESS</Text>
            </View>
            <Image
              style={styles.marginBot}
              source={require("./../../assets/images/welcome_bg/vec_mid.png")}
            />
            <Image
              style={styles.marginBot}
              source={require("./../../assets/images/welcome_bg/vec_bot.png")}
            />

            <View style={styles.identifierContainer}>
              <Text style={{ ...styles.white, ...styles.title }}>
                IEEE IDENTIFIER
              </Text>
              <Text style={{ ...styles.white, fontSize: 12, lineHeight: 12 }}>
                Please enter your IEEE ID to customize your experience
              </Text>

              <TextInput placeholder="000000000000" style={styles.inputArea} />

              <View
                style={{ marginLeft: "15%", marginRight: "15%", width: "100%" }}
              >
                <CustomButton
                  style={{ marginTop: 15 }}
                  onPress={continuePressEvent}
                  title="CONTINUE"
                  width="70%"
                />
              </View>
            </View>
          </View>
          <View style={styles.footer}>
            <Image
              style={styles.logo}
              source={require("./../../assets/images/logo_footer.png")}
            />

            <TouchableOpacity onPress={() => navigation.navigate("Root")}>
              <View style={styles.skipBtn}>
                <View style={styles.skipBtnText}>
                  <Text style={{ ...styles.white, ...styles.skip }}>SKIP</Text>
                  <Text style={{ ...styles.white, ...styles.continue }}>
                    CONTINUE ANONYMOUSLY
                  </Text>
                </View>
                <Svg
                  width="22"
                  height="16"
                  viewBox="0 0 22 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <Path
                    d="M21.7071 8.70711C22.0976 8.31658 22.0976 7.68342 21.7071 7.29289L15.3431 0.928932C14.9526 0.538408 14.3195 0.538408 13.9289 0.928932C13.5384 1.31946 13.5384 1.95262 13.9289 2.34315L19.5858 8L13.9289 13.6569C13.5384 14.0474 13.5384 14.6805 13.9289 15.0711C14.3195 15.4616 14.9526 15.4616 15.3431 15.0711L21.7071 8.70711ZM0 9H21V7H0V9Z"
                    fill="#FFFAF4"
                  />
                </Svg>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}
