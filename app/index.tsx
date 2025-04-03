import styled from "styled-components/native";
import { useEffect, useState } from "react";
import Title from "../components/Titulo/titulo";
import InputTexto from "@/components/Input/input";
import { TouchableOpacity, View, Text } from "react-native";
import { Ionicons } from '@expo/vector-icons'; 

export default function App() {

  const [email, setEmail] = useState('');
  const [erroEmail, setErroEmail] = useState(false);

  const [senha, setSenha] = useState('');
  const [erroSenha, setErroSenha] = useState(false);

  const [isPasswordVisible, setIsPasswordVisible] = useState(false); 

  useEffect(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email)) {
      setErroEmail(false);
    } else {
      setErroEmail(true);
    }
  }, [email]);

  useEffect(() => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
    if (!passwordRegex.test(senha)) {
      setErroSenha(true);
    } else {
      setErroSenha(false);
    }
  }, [senha]);

  return (
    <Tela>
      <Title texto={"Entrar"} flag={true} />
      <Title texto={"Bem vindo ao app"} flag={false} />
      <ContainerCampoTexto>
        <View>
          <InputTexto
            erro={erroEmail}
            placeholder="Digite seu email"
            onChangeText={text => setEmail(text)}
          />
          {erroEmail ? <TextErrorHint>Email inválido</TextErrorHint> : null}
        </View>

        <View>
          <InputTexto
            erro={erroSenha}
            placeholder="Digite sua senha..."
            secureTextEntry={!isPasswordVisible}
            onChangeText={text => setSenha(text)}
          />
          <TouchableOpacity
            onPress={() => setIsPasswordVisible(!isPasswordVisible)} 
            style={{ position: 'absolute', right: 15, top: 10 }}
          >
            {/* <Ionicons
              name={isPasswordVisible ? 'eye' : 'eye-off'}
              size={24}
            //   color="gray"
            /> */}
          </TouchableOpacity>
          {erroSenha ? <TextErrorHint>Senha inválida</TextErrorHint> : null}
        </View>
      </ContainerCampoTexto>
      <ContainerBotoes>
        <Botao>
          <TextoBotao>Entrar</TextoBotao>
        </Botao>
        <Links>Cadastre-se</Links>
        <Links>Esqueci a senha</Links>
      </ContainerBotoes>
    </Tela>
  );
}

const Tela = styled.View`
  flex: 1;
  background-color: #33415C;
  padding: 26px;
`;

const ContainerCampoTexto = styled.View`
  gap: 25px;
`;

const ContainerBotoes = styled.View`
  margin-top: 65px;
  gap: 20px;
`;

const Botao = styled.Pressable`
  background-color: #fff;
  padding: 20px;
`;

const TextoBotao = styled.Text`
  text-align: center;
  font-size: 24px;
  font-weight: bold;
`;

const Links = styled.Text`
  text-align: center;
  color: #fff;
  font-size: 16px;
`;

const TextErrorHint = styled.Text`
  font-size: 16px;
  color: #E63946;
`;
