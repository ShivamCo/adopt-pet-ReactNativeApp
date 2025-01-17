import { View, Text, Image } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors'
import MarkFav from '../MarkFav'


export default function Petinfo({ pet }) {
    return (
        <View>

            <Image
                source={{ uri: pet.imageUrl }}
                style={{
                    with: '100%',
                    height: 400,
                    objectFit: 'cover'
                }}

            />

            <View style={{
                padding: 20,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignContent: 'center'
               }}>
                <View>
                    <Text style={{
                        fontFamily: 'poppins-bold',
                        fontSize: 25
                    }} >
                        {pet?.name}
                    </Text>
                    <Text style={{
                        fontFamily: 'poppins',
                        fontSize: 15,
                        color: Colors.GRAY

                    }} >
                        {pet?.adress}
                    </Text>

                </View>
                <View style={{
                    
                }}>
                  <MarkFav pet={pet} />
                </View>

            </View>

        </View>
    )
}