import { useRouter } from "expo-router";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const SplashScreen = ({ onNext }) => {
  const router = useRouter();

  const handleNext = () => {
    router.push('../../(auth)')
  };
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
          Find Your {'\n'}<Text style={styles.highlight}>Dream Job {'\n'}</Text>Here!
        </Text>
        <Text style={styles.subtitle}>
          Explore all the most exciting job roles based on your interest and study major.
        </Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleNext}>
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
    alignItems: "baseline",
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#000",
    textAlign: "left",
    marginBottom: 10,
  },
  highlight: {
    color: "#FF8C00",
  },
  subtitle: {
    fontSize: 17,
    color: "#524B6B",
    textAlign: "left",
    marginHorizontal: 1,
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
    textAlign: "auto",
    fontWeight: "bold",
  },
});

export default SplashScreen;
