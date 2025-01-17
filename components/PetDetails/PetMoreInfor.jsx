import { View } from 'react-native';
import React from 'react';
import Colors from '../../constants/Colors';
import SubInfoCard from './SubInfoCard';

export default function PetMoreInfor({ pet }) {
    return (
        <View
            style={{
                padding: 20,
            }}
        >
            <View
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                }}
             >
                {/* Age */}
                <SubInfoCard
                    title="Age"
                    value={pet?.age}
                    icon={require('../../assets/images/Callander.png')}
                />

                <SubInfoCard
                    title="Breed"
                    value={pet?.breed}
                    icon={require('../../assets/images/breed.png')}
                />

                

                {/* Add more cards as needed */}
            </View>

            <View
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                }}
             >
                {/* Age */}
                

                <SubInfoCard
                    title="Sex"
                    value={pet?.sex}
                    icon={require('../../assets/images/sex.png')}
                />

                <SubInfoCard
                    title="Weight"
                    value={pet?.weight+" kg"}
                    icon={require('../../assets/images/weight.png')}
                />

                {/* Add more cards as needed */}
            </View>
        </View>
    );
}
