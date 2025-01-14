import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"; 
import { useRouter } from "expo-router";

const EmailVerificationScreen = ({}) => {
  const router = useRouter();

  const handleNext = () => {
    router.push('../../(signup)')
  };
  const handleBack = () => {
    router.push('../../(signin)')
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Check Your Email</Text>
      <Text style={styles.subtitle}>
      We have sent the reset password to the email address brandonelouis@gmial.com
      </Text>
      <View style={styles.illustrationContainer}>
              <Image source={require('../../imgs/emailverification.png')}
              style={styles.image}
              />
            </View>
      <TouchableOpacity style={styles.openemailbutton}>
        <Text style={styles.emailText}>OPEN YOUR EMAIL</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.backtologinbutton} onPress={handleBack}>
        <Text style={styles.backtologintext}>BACK TO LOGIN</Text>
      </TouchableOpacity>

      <Text style={styles.resendText}>
      You have not received the email?{" "}
        <TouchableOpacity style={styles.resendButton} onPress={handleNext}><Text style={styles.resendLink}>Resend</Text></TouchableOpacity>
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
    fontWeight: "400"
  },
  label: {
    fontSize: 14,
    color: "#6e6e6e",
    marginBottom: 5,
  },
  illustrationContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  image: {
    width: 125,
    height: 110,
  },
  openemailbutton: {
    backgroundColor: "#1A0057",
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: "center",
    marginTop: 30,
    width: "75%",
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
    width: "75%",
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
    fontWeight: "bold"
  },
  resendLink: {
    color: "#FF8C00",
    fontWeight: "bold",
    textDecorationLine: "underline"
  },
  resendButton: {
  }
});

export default EmailVerificationScreen;