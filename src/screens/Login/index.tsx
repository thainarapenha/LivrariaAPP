import React, { useContext, useState } from "react"
import { Image } from "react-native"
import { ButtonLogin, Container, InputName, InputPassword, TextButton, Title, TextRecoveryPass } from "./styles"
import { useNavigation } from "@react-navigation/native";
import { LoadingTimeSplashContext } from "@contexts/LoadingTimeSplash";

export const Login = () => {
  const navigation = useNavigation();
  const { token, setToken } = useContext(LoadingTimeSplashContext);

  const confirmationLogin = () => {
    setToken(true);
    // navigation.navigate('Home');
  }

  return (
    <Container>
      <Image
        style={{ maxWidth: 100, height: 100 }}
        source={require('@assets/png/logo_livraria_preto.png')}
      />

      <Title>Meu Livro</Title>

      <InputName
        placeholder="  Usuário"
      />
      <InputPassword
        placeholder="  Senha"
        secureTextEntry={true}
      />
      <ButtonLogin onPress={() => {confirmationLogin()}}>
        <TextButton>Entrar</TextButton>
      </ButtonLogin>

      <TextRecoveryPass>
        Esqueci a senha
      </TextRecoveryPass>
    </Container>
  )
}