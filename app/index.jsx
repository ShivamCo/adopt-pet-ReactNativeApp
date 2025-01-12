import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { Link, Redirect, useRootNavigationState } from 'expo-router'
import { useUser } from '@clerk/clerk-expo'
// import { useNavigationState } from '@react-navigation/native'

export default function index() {


    const rootNaviationState = useRootNavigationState()

    const {user} = useUser();

    // useEffect(()=>{
    //     CheckNavigation()

    // },[])

    // const CheckNavigation = () =>{
    //     if(!rootNaviationState.key)
    //         return null
       
    // }

  return (
    <View>
      <Link href={'/login'} >
      <Text style={{
        fontSize: 30
      }}>
        {
          user
          ? <Redirect href={'/(tabs)/home'}/>
          : <Redirect href={'/login'}/>

        }
      </Text>
      </Link>
    </View>
  )
}