// @ts-nocheck
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import AuthButton from "../../components/AuthButton";
import { styles } from "./style";
import QRCode from "react-native-qrcode-svg";
import { useContext } from "react";
import { AppContext } from "../../Context/AppContext";

export default function ProfileScreen() {
  const { state } = useContext(AppContext);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <>
          <View style={styles.QRImage}>
            <QRCode value={state.user.IEEEID || "error"} size={150} />
            <Text style={{ fontSize: 10, marginTop: 5, fontWeight: "bold" }}>
              Participant ID
            </Text>
          </View>
          <View style={styles.currentUser}>
            <Text style={styles.welcome}>WELCOME, ELDON</Text>

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
