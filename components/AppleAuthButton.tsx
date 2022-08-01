// @ts-nocheck
import * as AppleAuthentication from "expo-apple-authentication";
import { getAuth, OAuthProvider, signInWithCredential } from "firebase/auth";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { useContext, useState } from "react";
import Layout from "../constants/Layout";
import { AppContext } from "../Context/AppContext";
import { Types } from "../Context/types";
import { Alert, Appearance } from "react-native";

export default function AppleAuthButton() {
  const { dispatch } = useContext(AppContext);
  const { ieeeid, setIeeeid } = useState("");

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
        marginTop: 10,
        marginBottom: 10,
      }}
      onPress={async () => {
        const nonce = Math.random().toString(36).substring(2, 10);
        try {
          //get credentials with apple sign in button
          const appleCredential = await AppleAuthentication.signInAsync({
            requestedScopes: [
              AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
              AppleAuthentication.AppleAuthenticationScope.EMAIL,
            ],
          });

          // auth with firebase
          const provider = new OAuthProvider("apple.com");

          const credential = provider.credential({
            idToken: appleCredential.identityToken || undefined,
            rawNonce: nonce,
          });

          signInWithCredential(getAuth(), credential).then((userCredential) => {
            getDoc(doc(getFirestore(), "users", userCredential.user.uid)).then(
              async (doc) => {
                if (doc.exists()) {
                  const {
                    IEEEID,
                    NotificationToken,
                    Notifications,
                    FirstName,
                    LastName,
                    Gender,
                    DateofBirth,
                  } = doc.data();
                  dispatch({
                    type: Types.LOGIN,
                    payload: {
                      email: doc.id,
                      IEEEID,
                      NotificationToken,
                      Notifications,
                      FirstName,
                      LastName,
                      Gender,
                      DateofBirth,
                    },
                  });
                } else {
                  let name = {
                    FirstName: appleCredential.fullName?.givenName || "",
                    LastName: appleCredential.fullName?.familyName || "",
                  };
                  Alert.prompt(
                    "IEEE ID",
                    "This email was not registered to any of our participants. Please enter your IEEE ID to improve your experience",
                    [
                      {
                        text: "SUBMIT",
                        onPress: (v) => {
                          setIeeeid(v);
                          dispatch({
                            type: Types.UPDATE_IEEEID,
                            payload: {
                              IEEEID: v,
                            },
                          });
                        },
                        style: "default",
                      },
                      {
                        text: "Cancel",
                        onPress: () => {},
                        style: "cancel",
                      },
                    ],
                    "plain-text"
                  ); /*
                  if (ieeeid && Number(ieeeid) && length(ieeeid) === 8) {
                    const q = query(
                      collection(getFirestore(), "users"),
                      where("IEEEID", "==", ieeeid)
                    );
                    const querySnapshot = await getDocs(q);
                    querySnapshot.forEach((doc) => {
                      name = {
                        FirstName: doc.data().FirstName || "",
                        LastName: doc.data().LastName || "",
                      };
                    });
                  }*/
                  dispatch({
                    type: Types.LOGIN,
                    payload: {
                      email: userCredential.user.uid,
                      ...name,
                      inAppRegister: true,
                      IEEEID: ieeeid,
                    },
                  });
                }
              }
            );
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
