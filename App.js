import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import Read from './src/screens/Read';
import Create from './src/screens/Create';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider>
      <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Create') {
              iconName = focused
                ? 'md-add-circle'
                : 'md-add-circle-outline';
            } else if (route.name === 'Read') {
              iconName = focused ? 'md-list-circle' : 'md-list-circle-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Create" component={Create} />
        <Tab.Screen name="Read" component={Read} />
      </Tab.Navigator>
    </NavigationContainer>
  </Provider>
    
  );
}