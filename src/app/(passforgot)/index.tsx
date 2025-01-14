import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { useRouter } from "expo-router";

const ForgotPasswordScreen = ({}) => {
  const router = useRouter();

  const handleBack = () => {
    router.push("../../(signin)");
  };
  const handleNext = () => {
    router.push('../../(verifyemail)')
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot Password?</Text>
      <Text style={styles.subtitle}>
        To reset your password, you need your email or mobile number that can be
        authenticated
      </Text>
      <View style={styles.illustrationContainer}>
        <Image
          source={require("../../imgs/forgotpassword.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Brandonelouis@gmail.com"
          placeholderTextColor="#A0A0A0"
        />
      </View>
      <TouchableOpacity style={styles.openemailbutton} onPress={handleNext}>
        <Text style={styles.emailText}>RESET PASSWORD</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.backtologinbutton} onPress={handleBack}>
        <Text style={styles.backtologintext}>BACK TO LOGIN</Text>
      </TouchableOpacity>

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
    fontWeight: "400",
  },
  label: {
    fontSize: 14,
    color: "#6e6e6e",
    marginBottom: 5,
  },
  inputContainer: {
    width: "90%",
    marginTop: 20,
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
  illustrationContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  image: {
    width: 135,
    height: 110,
  },
  openemailbutton: {
    backgroundColor: "#1A0057",
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: "center",
    marginTop: 30,
    width: "90%",
  },
  emailText: {
    fontSize: 16,
    color: "#FFF",
    fontWeight: "bold",
  },
  backtologinbutton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ECE9FF",
    borderRadius: 8,
    paddingVertical: 15,
    marginTop: 15,
    width: "90%",
    justifyContent: "center",
  },
  backtologintext: {
    fontSize: 16,
    color: "#1A0057",
    fontWeight: "bold",
  },
  resendText: {
    marginTop: 20,
    fontSize: 14,
    color: "#6e6e6e",
    fontWeight: "bold",
  },
  resendLink: {
    color: "#FF8C00",
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  resendButton: {},
});

export default ForgotPasswordScreen;
