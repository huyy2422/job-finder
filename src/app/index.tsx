import React, { useEffect, FC } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { useRouter } from 'expo-router';

interface SplashScreenProps {
  onFinish: () => void;
}

const LogoSplashScreen: FC<SplashScreenProps> = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 3000); 
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../imgs/logo.png')}
        style={styles.image}/>
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
      <LogoSplashScreen onFinish={() => setSplashVisible(false)} />
    ) : null
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#130160",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
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
