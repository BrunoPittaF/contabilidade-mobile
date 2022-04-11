import { Text } from "react-native";
import { useFonts, Poppins_400Regular } from "@expo-google-fonts/poppins";
import { Form } from "../../components/Form";
export function Login() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
  });

  if (!fontsLoaded) {
    return <Text>Carregando Fonte...</Text>;
  }

  return <Form />;
}
