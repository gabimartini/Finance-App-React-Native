import React, { useState } from 'react';
import { Platform } from 'react-native';
import firebase from '../../services/firebaseConnection';

import { Background, Container, Logo, AreaInput, Input,
         SubmitButton, SubmitText, SignUpLink, SignUpText } from './styles';

export default function SignIn({ navigation }){

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(){
    if(email !== '' && password !== ''){
      firebase.auth().signInWithEmailAndPassword(email, password)
      .catch((error)=>{
        alert(error.code);
      })
    }
  }

  return(
    <Background>
      <Container behavior={Platform.OS === 'ios' ? 'padding' : ''} enabled>
        <Logo source={require('../../assets/logo.png')}/>

        <AreaInput>
          <Input
            placeholder="Email"
            autoCorrect={false}
            autoCapitalize="none"
            value={email}
            onChangeText={(email)=> setEmail(email)}
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder="Senha"
            autoCorrect={false}
            autoCapitalize="none"
            secureTextEntry={true}
            value={password}
            onChangeText={(password)=> setPassword(password)}
          />
        </AreaInput>

        <SubmitButton onPress={handleSubmit}>
          <SubmitText>Acessar</SubmitText>
        </SubmitButton>

        <SignUpLink onPress={()=> navigation.navigate('SignUp')}>
          <SignUpText>Criar conta gratuita</SignUpText>
        </SignUpLink>

      </Container>
    </Background>
  )
} 