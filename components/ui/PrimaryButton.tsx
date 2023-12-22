import { Text, View, Pressable, StyleSheet } from "react-native";

import { Colors } from "../../constants/colors";

interface Props {
  children: string | React.ReactNode;
  onPress: () => void;
  color: string;
}

export default function PrimaryButton({ children, onPress, color }: Props) {
  return (
    <View style={styles.outerContainer}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) =>
          pressed
            ? [
                { ...styles.innerContainer, backgroundColor: color },
                styles.pressed,
              ]
            : { ...styles.innerContainer, backgroundColor: color }
        }
        android_ripple={{ color: Colors.primary600 }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  innerContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },

  buttonText: {
    color: Colors.text500,
    textAlign: "center",
    fontFamily: "Preahvihear-regular",
  },
  // To style ripple on IOS
  pressed: {
    opacity: 0.75,
    backgroundColor: Colors.primary600,
  },
});
