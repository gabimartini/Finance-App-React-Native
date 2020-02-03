import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/MaterialIcons';

import firebase from '../../services/firebaseConnection';

import { Container, Title, Name, LogoutButton, LogoutText } from './styles';

export default function Profile(){

  const [nome, setNome] = useState('');

  useEffect(()=> {



    async function loadName(){

      const nomeStorage = await AsyncStorage.getItem('@nome');
      if(nomeStorage){
        setNome(nomeStorage);
      }else{

        let uid = firebase.auth().currentUser.uid;
        await firebase.database().ref('users').child(uid)
        .once('value').then((snapshot)=> {
          setNome(snapshot.val().nome);
        });
        await AsyncStorage.setItem('@nome', nome);

      }

    }

    loadName();

  }, []);

  async function handleLogout(){
    await firebase.auth().signOut();
    await AsyncStorage.removeItem('@nome');
  }

  return(
    <Container>
      <Title>Bem-vindo(a)</Title>
      <Name> {nome} </Name>

      <LogoutButton onPress={handleLogout}>
        <LogoutText>Sair</LogoutText>
      </LogoutButton>
    </Container>
  )
}

Profile.navigationOptions = {
  tabBarLabel: 'Perfil',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="account-circle" size={24} color={tintColor} />
  )
};
