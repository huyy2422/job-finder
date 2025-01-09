import React, { useEffect, FC } from "react";
import { View, StyleSheet, Text } from "react-native";
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
        <Svg width={80} height={80} viewBox="0 0 100 100">
          <Rect x="10" y="10" width="80" height="80" rx="20" fill="white" />
          <Circle cx="35" cy="40" r="5" fill="black" />
          <Circle cx="65" cy="40" r="5" fill="black" />
          <Rect
            x="40"
            y="55"
            width="20"
            height="3"
            rx="2"
            fill="black"
            transform="rotate(0 30 55)"
          />
        </Svg>
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
      router.replace('/home'); // Navigate to the home screen
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
