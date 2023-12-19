import { Text, View } from "react-native";

interface Props {
  children: string;
}

export default function PrimaryButton({ children }: Props) {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  );
}
