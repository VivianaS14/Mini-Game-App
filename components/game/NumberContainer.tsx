import { StyleSheet, Text, View } from "react-native";

import { Colors } from "../../constants/colors";

interface Props {
  children: string;
}

export default function NumberContainer({ children }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    marginHorizontal: 24,
    marginTop: 20,
    borderWidth: 3,
    borderColor: Colors.primary900,
    backgroundColor: Colors.secondary300,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },

  numberText: {
    color: Colors.text500,
    fontSize: 36,
    fontFamily: "Preahvihear-regular",
  },
});
