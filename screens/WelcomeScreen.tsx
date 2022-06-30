import { StyleSheet, Text, View, Button } from "react-native";
import Colors from "../constants/Colors";

export default function WelcomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <View style={styles.separator} />
      <Button title="Skip" onPress={() => navigation.navigate("Root")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors["backgroundColor"],
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
