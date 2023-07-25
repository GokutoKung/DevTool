import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Login from '../components/LogIn';
import SignUp from '../components/SignUp';
import HomePage from '../components/HomePage';
import QRPage from '../components/QRPage';
import ProfilePage from '../components/ProfilePage';
import NewsPage from '../components/NewsPage';
import ScanPage from '../components/ScanPage';
import BusCallPage from '../components/BusCallPage';
import StationCallPage from '../components/StationCall';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import ReportPage from '../components/ReportPage';

const Stack = createStackNavigator();
const Stack2 = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTabs = () => {
    return (
      <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#1E90FF', // set focused color to blue
        inactiveTintColor: '#CCCCCC',
        style: {
          backgroundColor: '#FFFFFF',
          borderTopWidth: 1,
          borderTopColor: '#444444',
          paddingBottom: 5,
          height: 60,
          justifyContent: 'center',
          alignItems: 'center',
        },
        labelStyle: {
          fontSize: 14,
          fontWeight: 'bold',
          marginBottom: 5,
        },
      }}
      >
        <Tab.Screen name="Scan" component={ScanStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons name="line-scan" size={24} color="black" />
          ), headerShown: false}} 
        />
        <Tab.Screen name="News" component={NewsPage} options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'ios-newspaper' : 'ios-newspaper-outline'}
              size={24}
              color={focused ? '#1E90FF' : '#CCCCCC'}
            />
          )
        }}/>
        <Tab.Screen name="Home" component={HomePage} options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'ios-bus' : 'ios-bus-outline'}
              size={24}
              color={focused ? '#1E90FF' : '#CCCCCC'}
            />
          )
        }}/>
        <Tab.Screen name="Profile" component={ProfilePage} options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign name="profile" size={24} color={focused ? '#1E90FF' : '#CCCCCC'} />
          )
        }} />
        <Tab.Screen name="QR" component={QRPage} options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign name="qrcode" size={24} color={focused ? '#1E90FF' : '#CCCCCC'} />
          )
        }} />
      </Tab.Navigator>
    );
  };

  const ScanStack = () => {
    return (
      <Stack2.Navigator
      initialRouteName="ScanHome"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#007AFF',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack2.Screen
          name="ScanHome"
          component={ScanPage}
          options={{
            title: 'Scan',
            headerLeft: false
          }}
        />
        <Stack2.Screen
          name="BusCall"
          component={BusCallPage}
          options={{
            title: 'BusCall',
          }}
        />
        <Stack2.Screen
          name="BusStop"
          component={StationCallPage}
          options={{
            title: 'BusStop',
          }}
        />
        <Stack2.Screen
          name="Report"
          component={ReportPage}
          options={{
            title: 'Report',
          }}
        />
      </Stack2.Navigator>
    );
  };

const Navigator = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#007AFF',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: 'Login',
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            title: 'Sign Up',
          }}
        />
        <Stack.Screen
          name="Home"
          component={HomeTabs}
          options={{
            headerShown: false,
            headerLeft: null
          }}
        />
      </Stack.Navigator>
    );
  };
  
  export default Navigator;