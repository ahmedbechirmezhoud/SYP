// @ts-nocheck
import * as AppleAuthentication from "expo-apple-authentication";
import { getAuth, OAuthProvider, signInWithCredential } from "firebase/auth";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useContext } from "react";
import Layout from "../constants/Layout";
import { AppContext } from "../Context/AppContext";
import { Types } from "../Context/types";
import { Appearance } from "react-native";

export default function AppleAuthButton() {
  const { dispatch } = useContext(AppContext);

  return (
    <AppleAuthentication.AppleAuthenticationButton
      buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
      buttonStyle={
        Appearance.getColorScheme() === "dark"
          ? AppleAuthentication.AppleAuthenticationButtonStyle.BLACK
          : AppleAuthentication.AppleAuthenticationButtonStyle.WHITE
      }
      cornerRadius={5}
      style={{
        width: Layout.window.width * 0.7,
        height: 48,
        alignSelf: "center",
        marginTop: 30,
        marginBottom: 10,
      }}
      onPress={async () => {
        const nonce = Math.random().toString(36).substring(2, 10);
        try {
          const appleCredential = await AppleAuthentication.signInAsync({
            requestedScopes: [
              AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
              AppleAuthentication.AppleAuthenticationScope.EMAIL,
            ],
          });

          const provider = new OAuthProvider("apple.com");

          const credential = provider.credential({
            idToken: appleCredential.identityToken || undefined,
            rawNonce: nonce,
          });

          signInWithCredential(getAuth(), credential).then((userCredential) => {
            if (appleCredential.email)
              getDoc(doc(getFirestore(), "users", appleCredential.email)).then(
                async (doc) => {
                  if (doc.exists()) {
                    dispatch({
                      type: Types.LOGIN,
                      payload: {
                        email: appleCredential.email,
                        ...doc.data(),
                      },
                    });
                  } else {
                    dispatch({
                      type: Types.LOGIN,
                      payload: {
                        email: appleCredential.email,
                        FirstName: appleCredential.fullName,
                        inAppRegister: true,
                      },
                    });
                    Alert.alert(
                      "Warning",
                      "This email was not registered to any of our participants"
                    );
                  }
                }
              );
            else alert("Error while Login");
          });
          // signed in
        } catch (e) {
          if (e.code === "ERR_CANCELED") {
            // handle that the user canceled the sign-in flow
          } else {
            // handle other errors
          }
        }
      }}
    />
  );
}
