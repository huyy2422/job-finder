import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Svg, { Path, Circle, Rect } from "react-native-svg";

const OnboardingScreen = ({ onNext }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Jobspot</Text>

      <View style={styles.illustrationContainer}>
        <Image source={require('../../imgs/splashscreenic.png')}
        style={styles.image}
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.title}>
          Find Your <Text style={styles.highlight}>Dream Job</Text> Here!
        </Text>
        <Text style={styles.subtitle}>
          Explore all the most exciting job roles based on your interest and study major.
        </Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={onNext}>
        <Text style={styles.buttonText}>→</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    justifyContent: "space-between",
    padding: 20,
  },
  logo: {
    alignSelf: "flex-end",
    fontSize: 18,
    fontWeight: "bold",
    color: "#1A0057",
  },
  illustrationContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  image: {
    width: 300,
    height: 300,
  },
  textContainer: {
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    marginBottom: 10,
  },
  highlight: {
    color: "#FF8C00",
  },
  subtitle: {
    fontSize: 16,
    color: "#6D6D6D",
    textAlign: "center",
    marginHorizontal: 10,
  },
  button: {
    backgroundColor: "#1A0057",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 40,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default OnboardingScreen;
