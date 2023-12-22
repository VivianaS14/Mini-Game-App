import { useState } from "react";
import { StyleSheet, TextInput, View, Alert, Text } from "react-native";

import PrimaryButton from "../components/ui/PrimaryButton";
import { Colors } from "../constants/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";

interface Props {
  onPickNumber: (number: number) => void;
}

export default function StartGame({ onPickNumber }: Props) {
  const [enteredNumber, setEnteredNumber] = useState("");

  const inputHandler = (number: string) => {
    setEnteredNumber(number);
  };

  const onConfirm = () => {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      // show alert...
      Alert.alert(
        "Invalid number! " + enteredNumber,
        " Number has to be between 1 and 99",
        [
          {
            text: "Okay",
            style: "destructive",
            onPress: onReset,
          },
        ]
      );
      return;
    }

    onPickNumber(chosenNumber);
  };

  const onReset = () => {
    setEnteredNumber("");
  };

  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <Text style={styles.instructionText}>
          Enter a Number to be guess for your phone!
        </Text>
        <Text style={styles.instructionText2}>
          Only numbers between 1 to 99
        </Text>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          value={enteredNumber}
          onChangeText={inputHandler}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton color={Colors.primary500} onPress={onReset}>
              Reset
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton color={Colors.primary500} onPress={onConfirm}>
              Confirm
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  instructionText: {
    color: Colors.primary500,
    fontSize: 24,
    fontFamily: "Preahvihear-regular",
    marginBottom: 25,
    textAlign: "center",
  },

  instructionText2: {
    color: Colors.primary500,
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
  },

  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    marginVertical: 8,
    color: Colors.primary400,
    fontWeight: "bold",
    borderBottomColor: Colors.primary400,
    borderBottomWidth: 2,
    textAlign: "center",
  },

  buttonsContainer: {
    flexDirection: "row",
  },

  buttonContainer: {
    flex: 1,
  },
});
