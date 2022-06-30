import { StyleSheet, Text, View  } from 'react-native';
import Colors from '../constants/Colors';

export default function TimelineScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Timeline</Text>
      <View style={styles.separator} />
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
