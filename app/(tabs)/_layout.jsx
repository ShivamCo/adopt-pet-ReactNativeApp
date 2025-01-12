import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Colors from '../../constants/Colors';

export default function TabLayout() {
  return (
    
    <Tabs>
       
        <Tabs.Screen name='home'
        options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon:({color})=> <FontAwesome5 name="home" size={24} color={Colors.PRIMARY}  />
        }}
        />
        <Tabs.Screen name='favorite'
        options={{
            title: 'Favorite',
            headerShown: false,
            tabBarIcon:({color})=> <MaterialIcons name="favorite" size={24} color={Colors.PRIMARY}  />
        }}
        />
        <Tabs.Screen name='inbox'
        options={{
            title: 'Inbox',
            headerShown: false,
            tabBarIcon:({color})=> <MaterialIcons name="chat" size={24} color={Colors.PRIMARY}  />
        }}
        />
        <Tabs.Screen name='profile'
        options={{
            title: 'Profile',
            headerShown: false,
            tabBarIcon:({color})=> <MaterialIcons name="person" size={24} color={Colors.PRIMARY}  />
        }}
        />
    </Tabs>


  )
}