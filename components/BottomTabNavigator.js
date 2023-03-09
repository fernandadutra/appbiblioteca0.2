import React,{Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Firstscreen from '../screens/firstscreen';
import Secondscreen from '../screens/secondscreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Tab=createBottomTabNavigator();
export default class BottomTabNavigator extends Component{
render(){
    return(
        <SafeAreaProvider>
        <NavigationContainer>
        <Tab.Navigator>
        <Tab.Screen name='Primeira tela' component={Firstscreen}></Tab.Screen>
        <Tab.Screen name='Segunda tela' component={Secondscreen}></Tab.Screen>
        </Tab.Navigator>
        </NavigationContainer>
        </SafeAreaProvider>
 )
}
} 