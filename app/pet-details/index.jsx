import { View, Text, ScrollView, Touchable, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { useLocalSearchParams, useNavigation } from 'expo-router'
import Petinfo from '../../components/PetDetails/Petinfo';
import PetMoreInfor from '../../components/PetDetails/PetMoreInfor';
import AboutPet from '../../components/PetDetails/AboutPet';
import OwnerInfo from '../../components/PetDetails/OwnerInfo';
import Colors from '../../constants/Colors';


export default function index() {
    const pet = useLocalSearchParams();
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerTransparent: true,
            headerTitle: ''
        })
    }, [])

    return (
        <View>
            <ScrollView>
                <Petinfo pet={pet} />


                <PetMoreInfor pet={pet} />


                <AboutPet pet={pet} />

                <OwnerInfo pet={pet} />

                <View style={{
                    height: 80
                }} >

                </View>
                {/* owner details */}
                

            </ScrollView>


            {/* adopt me button */}
            <View style={styles.bottomContainer} >
                    <TouchableOpacity style={styles.adoptMeButton} >
                        <Text style={{
                            textAlign:'center',
                            fontFamily:'poppins-semibold',
                            fontSize:20
                        }} >
                            Adopt Me
                        </Text>
                    </TouchableOpacity>
                </View>

        </View>
    )
}


const styles = StyleSheet.create({
    adoptMeButton: {
        backgroundColor: Colors.PRIMARY,
        padding:20
    },
    bottomContainer: {
position: 'absolute',
width:'100%',
bottom:0
    }
})