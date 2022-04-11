import { Container, Title } from "./style";
import { TouchableOpacityProps } from "react-native";

interface IButtonProps extends TouchableOpacityProps {
  title: string;
}

export function Button({ title, ...rest }: IButtonProps) {
  return (
    <Container {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}
