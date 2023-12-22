import { StyleSheet, Text } from "react-native";
import { Colors } from "../../constants/colors";

interface Props {
  children: string;
}

export default function Title({ children }: Props) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    padding: 12,
    fontSize: 24,
    fontFamily: "Preahvihear-regular",
    color: Colors.primary900,
    textAlign: "center",
    borderWidth: 2,
    borderColor: Colors.primary900,
    borderRadius: 8,
    backgroundColor: Colors.secondary300,
  },
});
