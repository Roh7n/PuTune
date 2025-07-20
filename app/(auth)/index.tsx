import { useState } from 'react';
import { Button, KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default function index() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const signUp = () =>{
      
    }

    const signIn = () =>{

    }

    
  return (
    <View style={styles.container}  >
      <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }} >
        <Text style={styles.text}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          />

        <Text style={styles.text}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          autoCapitalize="none"/>

        <Button title="Sign Up" onPress={signUp} disabled={loading} />
        <Button title="Sign In" onPress={signIn} disabled={loading} />


        </KeyboardAvoidingView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#25292e",
        alignItems: "center",
    },

    input: {
        width: "100%",
        height: 50,
        backgroundColor: "#fff",
        borderRadius: 10,
        paddingHorizontal: 10,
        marginBottom: 20,
    },

    text: {
        fontSize: 20,
        color: "#fff",
    },
});