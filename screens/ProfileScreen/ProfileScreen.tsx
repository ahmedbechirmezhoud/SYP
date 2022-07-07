import { getCurrentUser } from "expo-google-sign-in";
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import AuthButton from "../../components/AuthButton";
import { styles } from "./style";

export default function ProfileScreen() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <>
          <View style={styles.QRImage}>
            <Image source={require("./../../assets/images/QR.png")} />
            <Text>Participant's ID</Text>
          </View>
          <View style={styles.currentUser}>
            <Text style={styles.welcome}>
              WELCOME, {getCurrentUser()?.displayName}
            </Text>

            <Text style={styles.customizeExp}>
              The IT Team wish you a great experience⚡
            </Text>
          </View>

          <View style={styles.changeIDSection}>
            <AuthButton />
          </View>
        </>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
