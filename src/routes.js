import React from 'react'; 
import {createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Preload from './components/Preload';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import Dashboard from './pages/Dashboard';
import New from './pages/New';
import Profile from './pages/Profile';

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      Sign: createSwitchNavigator({
        Preload,
        SignIn,
        SignUp
      }),
      App: createBottomTabNavigator({
        Dashboard,
        New,
        Profile
      }, {
        tabBarOptions:{
          showLabel: false,
          activeTintColor: '#FFF',
          style:{
            borderTopColor: '#1B2C4C',
            backgroundColor: '#1B2C4C'
          }
        }
      })
    },
  ),
)

export default Routes;