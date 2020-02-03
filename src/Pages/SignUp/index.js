import React, { useState } from 'react';
import { Platform } from 'react-native';
import firebase from '../../services/firebaseConnection';


import { Background, Container, Logo, AreaInput, Input,
         SubmitButton, SubmitText, SignUpText, SignInButton, SignInText} from './styles';

export default function SignUp({ navigation }){

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  firebase.auth().signOut();


  async function handleSubmit(){
    if(nome !== '' && email !== '' && password !== ''){
      await firebase.auth().createUserWithEmailAndPassword(email, password)
      .then( async () => {
        let uid = firebase.auth().currentUser.uid;
        await firebase.database().ref('users').child(uid).set({
          saldo: 0,
          nome: nome,
        });
      })
      .catch((error)=> {
        alert(error.code);
      })
    }
  }

  return(
    <Background>
      <Container behavior={Platform.OS === 'ios' ? 'padding' : ''} enabled>
        <SignUpText>Quase tudo pronto :)</SignUpText>

        <AreaInput>
          <Input
            placeholder="Nome"
            autoCorrect={false}
            autoCapitalize="none"
            value={nome}
            onChangeText={(nome)=> setNome(nome)}
          />
        </AreaInput>

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
          <SubmitText>Cadastrar</SubmitText>
        </SubmitButton>

        <SignInButton onPress={()=> navigation.navigate('SignIn') }>
          <SignInText>Ja possuo uma conta</SignInText>
        </SignInButton>

      </Container>
    </Background>
  )
} 