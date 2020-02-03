import React, { useEffect } from 'react';
import firebase from '../../services/firebaseConnection';
import { ActivityIndicator } from 'react-native';

import { Background, Container } from './styles';

export default function Preload({ navigation }){

  useEffect(()=> {

    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        navigation.navigate('Dashboard', {uid: user.uid});
      }else{
        navigation.navigate({ routeName: 'SignIn' });
      }
    })

  }, []);

  return(
    <Background>
      <Container>
        <ActivityIndicator color="#FFF" size={50} />
      </Container>
    </Background>
  )
}
