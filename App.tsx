import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from './components/home';
import DownloadScreen from './components/download';
import SettingsScreen from './components/settings';


const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" size={size} color={color} /> 
            ),
          }}
        />
        <Tab.Screen
          name="Download"
          component={DownloadScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="file-download" size={size} color={color} /> 
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="settings" size={size} color={color} /> 
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


export default App;
