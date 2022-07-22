// @ts-nocheck
import React from "react";
import { ActivityIndicator, Text, TouchableOpacity } from "react-native";
import * as GoogleSignIn from "expo-google-sign-in";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithCredential,
  signOut,
} from "firebase/auth";
import Svg, { Path } from "react-native-svg";
import Colors from "../constants/Colors";
import Layout from "../constants/Layout";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";
import { AppContext } from "../Context/AppContext";
import { Types } from "../Context/types";

export default class AuthButton extends React.Component {
  state = { user: "dfs", loading: false };
  componentDidMount() {
    this.initAsync();
  }

  static contextType = AppContext;

  initAsync = async () => {
    await GoogleSignIn.initAsync({
      clientId:
        "640548717558-dhdt10vs2tjqcs9338pk3gf06kmmgmsd.apps.googleusercontent.com",
    });
    this._syncUserWithStateAsync();
  };

  _syncUserWithStateAsync = async () => {
    const user = await GoogleSignIn.signInSilentlyAsync();
    this.setState({ user });
  };

  render() {
    const { state, dispatch } = this.context;

    const signOutAsync = async () => {
      await GoogleSignIn.signOutAsync();
      await signOut(getAuth());
      dispatch({ type: Types.LOGOUT, payload: {} });
      this.setState({ user: null });
    };

    const signInAsync = async () => {
      try {
        await GoogleSignIn.askForPlayServicesAsync();
        const { type, user } = await GoogleSignIn.signInAsync();
        if (type === "success") {
          this._syncUserWithStateAsync();
          const credential = GoogleAuthProvider.credential(
            user?.auth?.idToken,
            user?.auth?.accessToken
          );
          signInWithCredential(getAuth(), credential).then((userCredential) => {
            if (user?.email)
              getDoc(doc(getFirestore(), "users", user?.email)).then(
                async (doc) => {
                  if (doc.exists()) {
                    dispatch({
                      type: Types.LOGIN,
                      payload: {
                        email: user?.email,
                        ...doc.data(),
                      },
                    });
                  } else {
                    dispatch({
                      type: Types.LOGIN,
                      payload: {
                        email: user?.email,
                        FirstName: user?.firstName,
                        LastName: user?.lastName,
                        inAppRegister: true,
                      },
                    });
                    alert(
                      "This email was not registered to any of our participants"
                    );
                  }
                }
              );
            else alert("Error while Login");
          });
        }
      } catch ({ message }) {
        alert("login Error:" + message);
      }
    };

    const onPress = () => {
      this.setState((state) => {
        return { ...state, loading: true };
      });
      if (this.state.user) {
        signOutAsync();
      } else {
        signInAsync();
      }
    };

    return (
      <TouchableOpacity
        onPress={onPress}
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          minHeight: 48,
          backgroundColor: this.state.user
            ? Colors["primaryColor"]
            : Colors["backgroundColor"],
          borderRadius: 5,
          padding: 5,
          width: Layout.window.width * 0.7,
          ...this.props.style,
        }}
      >
        {!this.state.user && !this.state.loading && (
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width={30}
            height={30}
            viewBox="0 0 30 30"
            fill={Colors["primaryColor"]}
          >
            <Path d="M15.004 3C8.374 3 3 8.373 3 15s5.375 12 12.004 12c10.01 0 12.265-9.293 11.326-14H15v4h7.738c-.89 3.448-4.012 6-7.738 6a8 8 0 010-16c2.009 0 3.84.746 5.244 1.969l2.842-2.84A11.96 11.96 0 0015.004 3z" />
          </Svg>
        )}
        <Text
          style={{
            color: this.state.user
              ? Colors["backgroundColor"]
              : Colors["primaryColor"],
            textTransform: "uppercase",
            fontWeight: "bold",
            marginHorizontal: 10,
          }}
        >
          {!this.state.loading &&
            (this.state.user ? "Sign Out" : "Signin with Google")}
        </Text>
        {this.state.loading && (
          <ActivityIndicator
            color={
              this.state.user
                ? Colors["backgroundColor"]
                : Colors["primaryColor"]
            }
            size="large"
          />
        )}
      </TouchableOpacity>
    );
  }
}
