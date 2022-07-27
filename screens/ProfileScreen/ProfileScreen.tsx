// @ts-nocheck
import {
  Alert,
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
import CustomButton from "../../components/CustomButton/CustomButton";
import Colors from "../../constants/Colors";
import { deleteUser, getAuth } from "firebase/auth";
import { Types } from "../../Context/types";

export default function ProfileScreen() {
  const { state, dispatch } = useContext(AppContext);

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
            <Text style={styles.welcome}>WELCOME, {state.user.FirstName}</Text>

            <Text style={styles.customizeExp}>
              The IT Team wish you a great experience⚡
            </Text>
          </View>

          <View style={styles.changeIDSection}>
            <CustomButton
              onPress={() => {
                Alert.alert(
                  "Delete Account Permanently",
                  "Are you sure you want to delete your account ?",
                  [
                    {
                      text: "Cancel",
                      style: "cancel",
                    },
                    {
                      text: "Delete",
                      onPress: () => {
                        deleteUser(getAuth().currentUser).then(() => {
                          dispatch({ type: Types.LOGOUT });
                        });
                      },
                    },
                  ]
                );
              }}
              style={{ marginTop: 10 }}
              title="Delete Account"
              color={Colors["backgroundColor"]}
              bgColor={"#EE4B2B"}
            />
            <AuthButton />
          </View>
        </>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
