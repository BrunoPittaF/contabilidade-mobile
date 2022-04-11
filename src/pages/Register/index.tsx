import { ContainerBody, FormContainer, InputText, Title } from "./style";
import { Button } from "../../components/Button";
import { useState } from "react";
import { api } from "../../services/api";

export function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [totalMoney, setTotalMoney] = useState(0);

  function submitForm() {
    const data = {
      email,
      cpf,
      name,
      total_money: totalMoney,
    };
    api
      .post("/account", data)
      .then(function () {
        alert(
          `Olá ${data.cpf}, ${data.email}, ${data.name}, ${data.total_money}`
        );
      })
      .catch(function (error) {
        alert(error);
      });
  }

  return (
    <ContainerBody>
      <Title>Cadastrar Usuário</Title>

      <FormContainer>
        <InputText
          onChangeText={(event) => {
            setName(event);
          }}
          placeholder="Nome"
          keyboardType="name-phone-pad"
        />
        <InputText
          onChangeText={(event) => {
            setEmail(event);
          }}
          placeholder="Email"
          keyboardType="email-address"
        />
        <InputText
          onChangeText={(event) => setCpf(event)}
          placeholder="Cpf"
          keyboardType="phone-pad"
        />
        <InputText
          onChangeText={(event) => {
            setTotalMoney(Number(event));
          }}
          placeholder="Saldo Inicial"
          keyboardType="phone-pad"
        />
        <Button
          style={{ marginTop: 40 }}
          title="Cadastrar"
          onPress={submitForm}
        />
      </FormContainer>
    </ContainerBody>
  );
}
