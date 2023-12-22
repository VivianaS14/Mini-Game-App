import { Image, StyleSheet, Text, View } from "react-native";

import Title from "../components/ui/Title";
import Card from "../components/ui/Card";

import { Colors } from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

interface Props {
  roundsNumber: number;
  userNumber: number;
  onRestart: () => void;
}

export default function GameOver({
  roundsNumber,
  userNumber,
  onRestart,
}: Props) {
  return (
    <View style={styles.container}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/medal.png")}
          style={styles.image}
        />
      </View>
      <View>
        <Text style={styles.summaryText}>
          Your phone needed <Text style={styles.highLight}>{roundsNumber}</Text>{" "}
          rounds to guess the number{" "}
          <Text style={styles.highLight}>{userNumber}</Text>.
        </Text>
        <PrimaryButton onPress={onRestart} color={Colors.primary500}>
          Start New Game
        </PrimaryButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
    gap: 50,
  },

  imageContainer: {
    width: 200,
    height: 200,
    borderRadius: 200,
    borderWidth: 10,
    borderColor: Colors.text500,
    backgroundColor: Colors.secondary300,
    overflow: "hidden",
    margin: 36,
    marginVertical: "auto",
  },

  image: {
    width: "100%",
    height: "100%",
  },

  summaryText: {
    marginBottom: 24,
    fontSize: 20,
    fontFamily: "Preahvihear-regular",
    textAlign: "center",
  },

  highLight: {
    fontFamily: "Preahvihear-regular",
    color: Colors.primary400,
  },
});
