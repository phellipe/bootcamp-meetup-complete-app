import React from 'react'
import { Image } from 'react-native'
import {
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation'

import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import Subscriptions from './pages/Subscriptions'

import logo from '~/assets/logo.png'

export default (isSigned = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
          SignUp,
        }),
        App: createStackNavigator(
          {
            Index: createBottomTabNavigator(
              {
                Dashboard,
                Subscriptions,
                Profile,
              },
              {
                tabBarOptions: {
                  keyboardHidesTabBar: true,
                  activeTintColor: '#fff',
                  inactiveTintColor: 'rgba(255, 255, 255, 0.6)',
                  style: {
                    backgroundColor: '#402845',
                    borderTopColor: 'transparent',
                  },
                },
              }
            ),
          },
          {
            defaultNavigationOptions: {
              headerStyle: {
                backgroundColor: '#22202c',
                elevation: 0,
              },
              headerTintColor: '#fff',
              headerTitle: (
                <Image
                  source={logo}
                  style={{ width: 35, height: 35, flex: 1 }}
                  resizeMode='contain'
                />
              ),
            },
          }
        ),
      },
      {
        initialRouteName: isSigned ? 'App' : 'Sign',
      }
    )
  )
