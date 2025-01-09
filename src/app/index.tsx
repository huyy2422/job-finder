import React, { useEffect, FC } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import Svg, { Circle, Rect } from "react-native-svg";
import { useRouter } from 'expo-router';

interface SplashScreenProps {
  onFinish: () => void;
}

const SplashScreen: FC<SplashScreenProps> = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 3000); // 3 seconds for demonstration
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../imgs/logo.png')}/>
      </View>
      <Text style={styles.appName}>Jobspot</Text>
    </View>
  );
};

const App = () => {
  const router = useRouter();
  const [isSplashVisible, setSplashVisible] = React.useState(true);

  useEffect(() => {
    if (!isSplashVisible) {
      router.replace('/(splash)');
    }
  }, [isSplashVisible]);

  return (
    isSplashVisible ? (
      <SplashScreen onFinish={() => setSplashVisible(false)} />
    ) : null
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A0057",
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    marginBottom: 20,
  },
  appName: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default App;
