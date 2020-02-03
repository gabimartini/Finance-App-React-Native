import React from 'react';
import { StatusBar } from 'react-native';

console.disableYellowBox=true;

import Routes from './routes';

export default function Index(){
  return(
    <>
      <StatusBar backgroundColor="#262630" barStyle="light-content" />
      <Routes/>
    </>
  )
} 