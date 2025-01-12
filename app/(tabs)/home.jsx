import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../../components/Home/Header'
import Slider from '../../components/Home/Slider'
import Categroy from '../../components/Home/Category'
import PetListByCategory from '../../components/Home/PetListByCategory'
import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from '../../constants/Colors'

export default function Home() {
  return (
    <View style={{
      padding: 10, margin: 10
    }} >


      <Header />

      <Slider />


      {/* <Categroy /> */}

      <PetListByCategory />




      {/* {List of Pets} */}


      {/* {Add New Pet Option} */}
      <View
        style={styles.addPetContainer}
      >
        <Ionicons 
        style={{
          color:Colors.PRIMARY
        }}
        name="paw-sharp" size={24} color="black" />
        <Text
          style={{
            fontFamily: 'poppins-semibold',
            color: Colors.PRIMARY
          }}
        >

          Add New Pet
        </Text>
      </View>

    </View>
  )
}


const styles = StyleSheet.create({
  addPetContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    padding: 20,
    marginTop: 20,
    backgroundColor: Colors.PRIMARY_LITE,
    borderWidth: 2,
    borderRadius: 15,
    borderStyle: 'dashed',
    borderBlockColor: Colors.PRIMARY,

    justifyContent: 'center'
  }
})