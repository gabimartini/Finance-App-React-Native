import React, { useState } from 'react';
import firebase from '../../services/firebaseConnection';
import { Keyboard, Alert, SafeAreaView, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Picker from '../../components/Picker';
import { Container, Input, SubmitButton, SubmitText } from './styles';

export default function New({ navigation }){
  const [valor, setValor] = useState('');
  const [tipo, setTipo] = useState(null);

  function handleSubmit(){
    Keyboard.dismiss();
    if(isNaN(parseFloat(valor)) || tipo === null){
      alert('Preencha todos os campos!');
      return;
    }

    Alert.alert(
      'Confirmando dados',
      `Tipo ${tipo} - Valor: ${parseFloat(valor)}`,
      [
        {
          text: 'Cancelar',
          style: 'cancel'
        },
        {
          text: 'Continuar',
          onPress: () =>  handleAdd()
        }
      ]
    )
    
  }


  async function handleAdd(){
    let uid = firebase.auth().currentUser.uid;

    let key = firebase.database().ref('historico').child(uid).push().key;
    await firebase.database().ref('historico').child(uid).child(key).set({
      tipo: tipo,
      valor: parseFloat(valor),
      date: new Date().toLocaleDateString(),
    });

    //Atualizar nosso saldo.
    let user = firebase.database().ref('users').child(uid);
    await user.once('value').then((snapshot) => {
      let saldo = parseFloat(snapshot.val().saldo);

      tipo === 'despesa' ? saldo -= parseFloat(valor) : saldo +=  parseFloat(valor);

      user.child('saldo').set(saldo);
    });
    setValor('');
    Keyboard.dismiss();
    navigation.navigate('Dashboard');

  }

  return(
  <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss()}>

    <Container>
     <SafeAreaView style={{alignItems: 'center'}}>

      <Input
        placeholder="Valor desejado"
        keyboardType="numeric"
        value={valor}
        onChangeText={ (valor)=> setValor(valor) }
        returnKeyType="next"
        onSubmitEditing={ () => Keyboard.dismiss() }
      />

      <Picker onChange={setTipo}/>

      <SubmitButton onPress={handleSubmit}>
        <SubmitText>Registrar</SubmitText>
      </SubmitButton>

     </SafeAreaView>
    </Container>
  </TouchableWithoutFeedback>
  )
}

New.navigationOptions = {
  tabBarLabel: 'Registrar',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="edit" size={24} color={tintColor} />
  )
};

