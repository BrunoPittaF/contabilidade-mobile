import { ContainerHeader, LinksContainer, TextLink } from "./style";
import { View, Image } from "react-native";
import * as RootNavigation from "../../RootNavigation";

export function Header() {
  return (
    <ContainerHeader>
      <View>
        <Image source={require("../../../assets/assets-app/icon.png")} />
      </View>

      <LinksContainer>
        <TextLink onPress={() => RootNavigation.navigate("Login")}>
          Login
        </TextLink>

        <TextLink onPress={() => RootNavigation.navigate("Register")}>
          Registrar-se
        </TextLink>
      </LinksContainer>
    </ContainerHeader>
  );
}
