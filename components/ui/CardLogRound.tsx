import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/colors";

interface Props {
  roundNumber: number;
  guess: number;
}

export default function CardLogRound({ roundNumber, guess }: Props) {
  return (
    <View style={styles.item}>
      <Text style={styles.itemText}># {roundNumber}</Text>
      <Text style={styles.itemText}>Phone's Guess: {guess}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    borderColor: Colors.primary800,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.primary500,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    elevation: 6,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },

  itemText: {
    fontFamily: "Preahvihear-regular",
    fontSize: 17,
  },
});
