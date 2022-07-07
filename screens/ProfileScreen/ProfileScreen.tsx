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
import { CurrentUser } from "../../utils/user";
import { styles } from "./style";
import QRCode from "react-native-qrcode-svg";

export default function ProfileScreen() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <>
          <View style={styles.QRImage}>
            <QRCode value={CurrentUser.IEEEID || "error"} size={150} />
            <Text style={{ fontSize: 10, marginTop: 5, fontWeight: "bold" }}>
              Participant ID
            </Text>
          </View>
          <View style={styles.currentUser}>
            <Text style={styles.welcome}>WELCOME, {CurrentUser.FirstName}</Text>

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
