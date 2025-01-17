import { View, Text, Image } from 'react-native';
import React, { useEffect } from 'react';
import Colors from '../../constants/Colors';

export default function SubInfoCard({ icon, title, value }) {
    useEffect(() => {
        console.log('Icon Source:', icon);
    }, []);

    return (
        <View
            style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: Colors.WHITE,
                padding: 10,
                margin: 5,
                gap: 10,
                flex: 1,
                borderRadius: 10,

            }}
        >
            <Image
                source={icon}
                style={{
                    width: 40,
                    height: 40,
                }}
            />
            <View style={{
                flex: 1,

            }} >
                <Text
                    style={{
                        fontFamily: 'poppins',
                        fontSize: 14,
                        color: Colors.GRAY,
                    }}
                >
                    {title}
                </Text>
                <Text
                    style={{
                        fontFamily: 'poppins-semibold',
                        fontSize: 16,
                    }}
                >
                    {value}
                </Text>
            </View>
        </View>
    );
}
