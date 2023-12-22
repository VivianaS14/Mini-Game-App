import { useEffect, useState } from "react";
import {
  Alert,
  FlatList,
  ListRenderItem,
  ListRenderItemInfo,
  StyleSheet,
  Text,
  View,
} from "react-native";

import Card from "../components/ui/Card";
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";
import NumberContainer from "../components/game/NumberContainer";

import { Colors } from "../constants/colors";
import { Ionicons } from "@expo/vector-icons";
import CardLogRound from "../components/ui/CardLogRound";

interface Props {
  userNumber: number;
  onGameOver: (numberRounds: number) => void;
}

function generateRandom(min: number, max: number, exclude: number) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandom(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

export default function GameScreen({ userNumber, onGameOver }: Props) {
  const initialGuest = generateRandom(1, 100, userNumber);

  const [currentGuest, setCurrentGuest] = useState<number>(initialGuest);
  const [guessRounds, setGuessRounds] = useState([initialGuest]);

  const guessRoundsLength = guessRounds.length;

  const nextGuessHandler = (direction: "lower" | "greater") => {
    if (
      (direction === "lower" && currentGuest < userNumber) ||
      (direction === "greater" && currentGuest > userNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = currentGuest;
    } else {
      minBoundary = currentGuest + 1;
    }
    const newRndNumber = generateRandom(minBoundary, maxBoundary, currentGuest);
    setCurrentGuest(newRndNumber);
    setGuessRounds((prev) => [newRndNumber, ...prev]);
  };

  useEffect(() => {
    if (currentGuest === userNumber) {
      Alert.alert("Hooray!", "I catch you! It's " + currentGuest + "!", [
        {
          text: "Awesome!",
          style: "cancel",
          onPress: () => onGameOver(guessRoundsLength),
        },
      ]);
    }
  }, [currentGuest, userNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  return (
    <View style={styles.screen}>
      <Title>Phone's Guess</Title>
      <NumberContainer>{currentGuest.toString()}</NumberContainer>
      <Card>
        <Text style={styles.questionText}>Higher or lower?</Text>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton
              color={Colors.primary500}
              onPress={() => nextGuessHandler("lower")}
            >
              <Ionicons name="remove" size={24} color="black" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton
              color={Colors.primary500}
              onPress={() => nextGuessHandler("greater")}
            >
              <Ionicons name="add" size={24} color="black" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View style={styles.logsContainer}>
        <FlatList
          data={guessRounds}
          renderItem={({ item, index }: ListRenderItemInfo<number>) => (
            <CardLogRound
              guess={item}
              roundNumber={guessRoundsLength - index}
            />
          )}
          keyExtractor={(item) => item.toString()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    marginTop: 100,
  },

  buttonsContainer: {
    marginTop: 15,
    flexDirection: "row",
  },

  buttonContainer: {
    flex: 1,
  },

  questionText: {
    color: Colors.primary500,
    fontSize: 20,
    fontFamily: "Preahvihear-regular",
    textAlign: "center",
  },

  logsContainer: {
    flex: 3,
    marginVertical: 10,
  },
});
