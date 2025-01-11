import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  AppState,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useRouter } from "expo-router";
import { supabase } from "../../lib/supabase";

AppState.addEventListener("change", (state) => {
  if (state === "active") {
    supabase.auth.startAutoRefresh();
  } else {
    supabase.auth.stopAutoRefresh();
  }
});

const SignUpScreen = ({}) => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function signUpWithEmail() {
    setLoading(true);
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email: email,
      password: password,
    });
    if (error) Alert.alert(error.message);
    if (!session)
      Alert.alert("Please check your inbox for email verification!");
    setLoading(false);
  }

  const router = useRouter();

  const handleNext = () => {
    router.push("../../(signin)");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create An Account</Text>
      <Text style={styles.subtitle}>
        Join us to discover opportunities and achieve your goals. Let's get
        started!
      </Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Full Name</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setFullname(text)}
          value={fullname}
          placeholder="Your full name"
          autoCapitalize={"none"}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder="email@address.com"
          autoCapitalize={"none"}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <View style={styles.passwordWrapper}>
          <TextInput
            style={[styles.input, { flex: 1 }]}
            onChangeText={(text) => setPassword(text)}
            value={password}
            secureTextEntry={true}
            placeholder="Password"
            autoCapitalize={"none"}
          />
          <Icon name="eye-off-outline" size={20} color="#A0A0A0" />
        </View>
      </View>

      <View style={styles.options}>
        <View style={styles.checkboxContainer}>
          <View style={styles.checkbox} />
          <Text style={styles.checkboxLabel}>Remember me</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText} disabled={loading} onPress={() => signUpWithEmail()}>SIGN UP</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.googleButton}>
        <Image
          source={require("../../imgs/gglogo.jpg")}
          style={styles.googleIcon}
        />
        <Text style={styles.googleText}>SIGN UP WITH GOOGLE</Text>
      </TouchableOpacity>

      <Text style={styles.signupText}>
        Already have an account ?{" "}
        <TouchableOpacity style={styles.signuplink} onPress={handleNext}>
          <Text style={styles.signupLink}>Sign In</Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#1A0057",
    marginTop: 50,
  },
  subtitle: {
    fontSize: 16,
    color: "#1A0111",
    marginTop: 10,
    textAlign: "center",
    paddingHorizontal: 20,
    fontWeight: "bold",
  },
  inputContainer: {
    width: "90%",
    marginTop: 20,
  },
  label: {
    fontSize: 14,
    color: "#6e6e6e",
    marginBottom: 5,
  },
  input: {
    backgroundColor: "#FFF",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: "#000",
    borderWidth: 1,
    borderColor: "#FFF",
  },
  passwordWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 8,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "#FFF",
  },
  options: {
    width: "90%",
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: "#E6E1FF",
    borderRadius: 4,
    marginRight: 8,
    color: "#E6E1FF",
  },
  checkboxLabel: {
    fontSize: 14,
    color: "#6e6e6e",
  },
  forgotPassword: {
    fontSize: 14,
    color: "#1A0057",
    fontWeight: "bold",
  },
  loginButton: {
    backgroundColor: "#1A0057",
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: "center",
    marginTop: 30,
    width: "75%",
  },
  loginText: {
    fontSize: 16,
    color: "#FFF",
    fontWeight: "bold",
  },
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ECE9FF",
    borderRadius: 8,
    paddingVertical: 15,
    marginTop: 15,
    width: "75%",
    justifyContent: "center",
  },
  googleIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  googleText: {
    fontSize: 16,
    color: "#1A0057",
    fontWeight: "bold",
  },
  signupText: {
    marginTop: 20,
    fontSize: 14,
    color: "#6e6e6e",
  },
  signupLink: {
    color: "#FF8C00",
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  signuplink: {},
});

export default SignUpScreen;
