import { View, Text, TextInput } from "react-native";
import { ContainerBody, Title, InputText, FormContainer } from "./style";

import { Button } from "../Button";
import { useState } from "react";
import { api } from "../../services/api";

interface IUser {
  email: string;
  name: string;
  cpf: string;
  id: string;
  statement: [];
  total_enter_money: number;
  total_exit_money: number;
  total_money: number;
}

export function Form() {
  const [cpf, setCpf] = useState("");
  function submitForm() {
    api
      .get("/account", {
        headers: {
          cpf: cpf,
        },
      })
      .then(function (response) {
        alert(`Bem vindo ${response.data.name} !`);
      })
      .catch(function (error) {
        alert(error);
      });
  }
  return (
    <ContainerBody>
      <Title>Login Usuário</Title>

      <FormContainer>
        <InputText
          onChangeText={(event) => setCpf(event)}
          placeholder="cpf"
          keyboardType="phone-pad"
        />
        <Button title="Cadastrar" onPress={submitForm} />
      </FormContainer>
    </ContainerBody>
  );
}
