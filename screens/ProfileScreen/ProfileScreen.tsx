import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import CustomButton from "../../components/CustomButton/CustomButton";
import Colors from "../../constants/Colors";
import { RootTabScreenProps } from "../../types";
import { styles } from "./style";

export default function ProfileScreen({
  navigation,
}: RootTabScreenProps<"Timeline">) {
  const changeIEEEIdentifier = () => {};

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <>
          <Image
            style={styles.QRImage}
            source={require("./../../assets/images/QR.png")}
          />

          <View style={styles.currentUser}>
            <Text style={styles.welcome}>WELCOME, BECHIIIIIR</Text>

            <Text style={styles.customizeExp}>
              We need the IEEE ID to customize your app experience
            </Text>

            <View style={styles.currentIDContainer}>
              <Text style={styles.currentIDTitle}>Current ID :</Text>
              <Text style={styles.currentID}> 5465446464</Text>
            </View>
          </View>

          <View style={styles.changeIDSection}>
            <Text style={styles.title}>NEW IEEE IDENTIFIER</Text>

            <TextInput placeholder="000000000000" style={styles.inputArea} />

            <View style={styles.buttonContainer}>
              <CustomButton
                title="CHANGE"
                onPress={changeIEEEIdentifier}
                width="60%"
                bgColor={Colors["primaryColor"] + "CC"}
                color={Colors["backgroundColor"]}
              />
            </View>
          </View>
        </>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
