import { StyleSheet } from 'react-native';
import { Text, View } from "react-native";
import Colors from '../constants/Colors';
import { RootTabScreenProps } from '../types';

export default function ProfileScreen({ navigation }: RootTabScreenProps<'Timeline'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Change ID</Text>
      <View style={styles.separator}  />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors["backgroundColor"]
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
