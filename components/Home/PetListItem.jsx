import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors'
import { useRouter } from 'expo-router'


export default function PetListItem({ pet }) {
    const router = useRouter()
    return (

        

        <TouchableOpacity
        onPress={()=> router.push({
            pathname: 'pet-details',
            params: pet
        }) }
            style={{
                padding: 10,
                marginRight: 15,
                backgroundColor: Colors.WHITE,
                borderRadius: 10,
                marginTop: 5
            }}
        >


            <Image
                source={{ uri: pet?.imageUrl }}
                style={{
                    objectFit: 'cover',
                    borderRadius: 10,
                    width: 150,
                    height: 150
                }}
            />
            <Text
                style={{
                    fontFamily: 'poppins-semibold',
                    fontSize: 18
                }}

            >{pet?.name}</Text>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }} >
                <Text style={{
                    color: Colors.GRAY,
                    fontFamily: 'poppins'
                }} >{pet?.breed}</Text>
                <Text
                    style={{
                        fontFamily: 'poppins',
                        color: Colors.PRIMARY,
                        backgroundColor: Colors.PRIMARY_LITE,
                        paddingHorizontal: 8,
                        paddingVertical:2,
                        fontSize: 14,
                        borderRadius: 10,
                        
                    }}
                >{pet?.age} Yrs</Text>
            </View>


        </TouchableOpacity>

    )
}