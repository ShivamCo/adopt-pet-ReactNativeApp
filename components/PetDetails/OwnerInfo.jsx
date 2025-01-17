import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors'
import Ionicons from '@expo/vector-icons/Ionicons';

export default function OwnerInfo({ pet }) {
    return (


        <View style={styles.container} >
            <View style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
            }} >
                <Image source={{ uri: pet?.userImage }}
                    style={{
                        width: 50,
                        height: 50,
                        borderRadius: 90
                    }}
                />
                <View>
                    <Text style={{
                        fontFamily: 'poppins-semibold',
                        fontSize: 17
                    }} >
                        {pet?.userName}
                    </Text>
                    <Text>Pet Owner</Text>
                </View>

            </View>
            <View style={{
                paddingRight: 10,
                color: 'blue'
            }} >
                <Ionicons name="send" size={24} color="#34b0d1" />
                
            </View>
        </View>


    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        marginVertical: 10,
        paddingHorizontal: 20,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
        borderWidth: 1,
        borderColor:Colors.PRIMARY,
        borderRadius: 15,
        padding: 10,
        backgroundColor: Colors.WHITE,
        justifyContent: 'space-between'

    }
})