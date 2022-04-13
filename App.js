import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

import ReadScreen from './src/screens/ReadScreen';
import CreateScreen from './src/screens/CreateScreen';

import { Provider } from './src/context/ShopContext';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName='Lista'
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Új') {
                iconName = focused
                  ? 'md-add-circle'
                  : 'md-add-circle-outline';
              } else if (route.name === 'Lista') {
                iconName = focused ? 'md-list-circle' : 'md-list-circle-outline';
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          })}
        >
          <Tab.Screen name="Új" component={CreateScreen} />
          <Tab.Screen name="Lista" component={ReadScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});