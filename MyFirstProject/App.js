import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HistoriaScreen from './src/containers/HistoriaScreen';
import MusicosStack from './src/navigation/MusicosStack';

const Tab = createBottomTabNavigator();

function App() {

  return (

    <NavigationContainer>

      <Tab.Navigator

        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if (route.name === 'Historia') {
              iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
            } else if (route.name === 'Musicos') {
              iconName = focused ? 'ios-list-blox' : 'ios-list';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTinColor: 'gray',
        })}
      >
        <Tab.Screen options={{headerStyle:{backgroundColor:'lime'},
          headerTitleAlign:'center',tabBarStyle:{backgroundColor:'lime'}}} 
          name="Historia" component={HistoriaScreen} />

        <Tab.Screen options={{headerShown: false ,headerStyle:{backgroundColor:'lime'},
          headerTitleAlign:'center',tabBarStyle:{backgroundColor:'lime'}}} 
          name="Musicos" component={BusquedaStack} />
      
      </Tab.Navigator>

    </NavigationContainer>

  );

}

export default App