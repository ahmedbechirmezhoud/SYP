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
import { deleteUser, getAuth, signOut } from "firebase/auth";
import { Types } from "../../Context/types";
import * as GoogleSignIn from "expo-google-sign-in";
import { RootStackParamList } from "../../types";

export default function ProfileScreen({
  navigation,
}: RootStackParamList<"Sponsors">) {
  const { state, dispatch } = useContext(AppContext);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <>
          <View style={styles.QRImage}>
            <QRCode value={state.user?.IEEEID || "error"} size={150} />
            <Text style={{ fontSize: 10, marginTop: 5, fontWeight: "bold" }}>
              Participant ID
            </Text>
          </View>
          <View style={styles.currentUser}>
            <Text style={styles.welcome}>
              WELCOME
              {!!state.user.FirstName &&
                state.user.FirstName?.length > 1 &&
                ","}{" "}
              {state.user.FirstName}
            </Text>

            <Text style={styles.customizeExp}>
              The IT Team wish you a great experience⚡
            </Text>
          </View>

          <View style={styles.changeIDSection}>
            <CustomButton
              onPress={() => {
                navigation.navigate("Sponsors");
              }}
              style={{ marginTop: 10 }}
              title="Meet our Sponsors "
              color={Colors["backgroundColor"]}
              bgColor={Colors["primaryColor"]}
            />
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
                          dispatch({ type: Types.LOGOUT, payload: {} });
                        });
                      },
                    },
                  ]
                );
              }}
              style={{ marginTop: 10 }}
              title="Delete Account"
              color={Colors["backgroundColor"]}
              bgColor={Colors["tintColorDark"]}
            />
            <CustomButton
              onPress={async () => {
                await GoogleSignIn.signOutAsync();
                await signOut(getAuth());
                dispatch({ type: Types.LOGOUT, payload: {} });
              }}
              style={{ marginTop: 10 }}
              title="Sign Out"
              color={Colors["backgroundColor"]}
              bgColor={Colors["tintColorDark"]}
            />
          </View>
        </>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
