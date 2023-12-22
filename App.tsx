import { useCallback, useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";

import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";

import StartGame from "./screens/StartGame";
import GameScreen from "./screens/GameScreen";
import GameOver from "./screens/GameOver";

import { Colors } from "./constants/colors";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

export default function App() {
  const [userNumber, setUserNumber] = useState<number>();
  const [isGameOver, setIsGameOver] = useState(false);
  const [guessRounds, setGuessRounds] = useState(0);

  const [fontsLoaded] = useFonts({
    "Preahvihear-regular": require("./assets/fonts/Preahvihear-Regular.ttf"),
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  const pickedNumberHandler = (pickedNumber: number) => {
    setUserNumber(pickedNumber);
  };

  const gameOverHandler = (numberRounds: number) => {
    setIsGameOver(true);
    setGuessRounds(numberRounds);
  };

  const restartHandler = () => {
    setUserNumber(undefined);
    setGuessRounds(0);
    setIsGameOver(false);
  };

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  let screen = <StartGame onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }

  if (isGameOver && userNumber) {
    screen = (
      <GameOver
        roundsNumber={guessRounds}
        userNumber={userNumber}
        onRestart={restartHandler}
      />
    );
  }

  return (
    <LinearGradient
      colors={[
        Colors.primary400,
        Colors.primary500,
        Colors.primary600,
        Colors.primary700,
        Colors.primary800,
        Colors.primary900,
      ]}
      style={styles.app}
      onLayout={onLayoutRootView}
    >
      <ImageBackground
        source={require("./assets/images/dices-bg.jpg")}
        resizeMode="cover"
        imageStyle={styles.bgImage}
        style={styles.app}
      >
        <SafeAreaView style={styles.app}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },

  bgImage: {
    opacity: 0.5,
  },
});
