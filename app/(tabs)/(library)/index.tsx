import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function Library() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Library</Text>
      <Link href="/details/1">View first user details</Link>
      <Link href="/details/2">View second user details</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   backgroundColor: "#25292e",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    color: "#fff",
  },
});
