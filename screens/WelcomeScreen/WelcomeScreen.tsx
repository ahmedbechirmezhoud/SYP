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
import AuthButton from "../../components/AuthButton";
import Colors from "../../constants/Colors";

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
              style={{ tintColor: Colors["backgroundColor"] }}
              source={require("./../../assets/images/welcome_bg/vec_top.png")}
            />
            <View style={styles.welcomeTextContainer}>
              <Text
                style={[styles.title, { color: Colors["backgroundColor"] }]}
              >
                WELCOME TO
              </Text>
              <Text
                style={[
                  styles.syp_congress,
                  { color: Colors["backgroundColor"] },
                ]}
              >
                SYP CONGRESS
              </Text>
            </View>
            <Image
              style={[
                styles.marginBot,
                { tintColor: Colors["backgroundColor"] },
              ]}
              source={require("./../../assets/images/welcome_bg/vec_mid.png")}
            />
            <Image
              style={[
                styles.marginBot,
                { tintColor: Colors["backgroundColor"] },
              ]}
              source={require("./../../assets/images/welcome_bg/vec_bot.png")}
            />

            <View style={styles.identifierContainer}>
              <Text
                style={{ color: Colors["backgroundColor"], ...styles.title }}
              >
                SIGN IN
              </Text>
              <Text
                style={{
                  color: Colors["backgroundColor"],
                  fontSize: 12,
                  lineHeight: 12,
                }}
              >
                Please Sign in with the email provided during your registration
              </Text>

              <AuthButton style={{ alignSelf: "center", marginTop: 30 }} />
            </View>
          </View>
          <View style={styles.footer}>
            <Image
              style={[styles.logo, { tintColor: Colors["backgroundColor"] }]}
              source={require("./../../assets/images/logo_footer.png")}
            />
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}
