import React from "react";
import { StyleSheet, View } from "react-native";
import { Colors } from "../../constants/colors";

interface Props {
  children: React.ReactNode;
}

export default function Card({ children }: Props) {
  return <View style={styles.inputContainer}>{children}</View>;
}

const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    marginTop: 36,
    marginHorizontal: 24,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary900,
    borderRadius: 8,
    // Shadow for android
    elevation: 4,
    // Shadow for IOS
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
