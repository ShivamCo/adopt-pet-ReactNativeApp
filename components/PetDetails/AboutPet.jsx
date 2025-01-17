import { View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'
import Colors from '../../constants/Colors'

export default function AboutPet({ pet }) {
  const [readMore, setReadMore] = useState(false);

  return (
    <View style={{
      padding: 20
    }} >
      <Text style={{
        fontFamily: 'poppins-semibold',
        fontSize: 18,
        color: Colors.PRIMARY
      }} >About {pet?.name}</Text>
      <Text
        numberOfLines={readMore ? 100 : 2}
        style={{
          fontFamily: 'poppins',
          fontSize: 16
        }} >
        {pet?.about} {readMore && 'Read More'}
      </Text>
      {readMore
        ?
        <Pressable onPress={() => setReadMore(false)}>
          <Text

            style={{
              color: Colors.PRIMARY,
              fontFamily: 'poppins-semibold'
              
            }} > Show Less </Text>
        </Pressable>
        :
        <Pressable onPress={() => setReadMore(true)}>
          <Text

            style={{
              color: Colors.PRIMARY,
              fontFamily: 'poppins-semibold'
            }}>
            Read More
          </Text>
        </Pressable>
      }
    </View>
  )
}