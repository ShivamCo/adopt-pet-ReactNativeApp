import { View, Text, Image } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo';

export default function Header() {

    const {user} = useUser();


  return (
    <View style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }} >
      <View>
        <Text>
            Welcome,
        </Text>
        <Text
        style={{
            fontFamily: 'poppins-semibold',
            fontSize: 25
        }}
        >{  (user?.fullName).toUpperCase()}</Text>
      </View>
      <Image  source={{uri:user?.imageUrl}} style={{
        width: 40,
        height: 40,
        borderRadius: 100
      
      }} />
    </View>
  )
}