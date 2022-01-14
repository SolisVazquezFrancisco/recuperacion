import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MusicosScreen from '../containers/MusicosScreen';
import BusquedaScreen from '../containers/BusquedaScreen';

const NavigationStack = createNativeStackNavigator();

function MusicosStack() {
  return (
    <NavigationStack.Navigator>

      <NavigationStack.Screen options={{headerStyle:{backgroundColor:'lime'},
        headerTitleAlign:'center'}} 
        name="Listado de usuarios" 
        component={MusicosScreen}/>

      <NavigationStack.Screen options={{headerStyle:{backgroundColor:'lime'},
        headerTitleAlign:'center'}} 
        name="Usuarios" 
        component={BusquedaScreen}/> 

    </NavigationStack.Navigator>
  );
}

export default MusicosStack;