import { View, Text, StyleSheet, FlatList, Image, Dimensions } from 'react-native';
import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../config/FirebaseConfit';

export default function Slider() {
    const [sliderList, setSliderList] = useState([]);

    const GetSlider = async () => {
        try {
            const snapShot = await getDocs(collection(db, 'adoptpet'));
            const sliderData = [];
            snapShot.forEach((doc) => {
                sliderData.push(doc.data());
            });
            setSliderList(sliderData); // Update state with the collected data
        } catch (error) {
            console.error('Error fetching slider data:', error);
        }
    };

    useEffect(() => {
        GetSlider();
    }, []);

    return (
        <View style={{
            marginTop: 10
        }} >
            <FlatList
                data={sliderList}
                horizontal={true}
                showsHorizontalScrollIndicator= {false}
                keyExtractor={(item, index) => index.toString()} // Ensure unique keys
                renderItem={({ item }) => (
                    <Image
                        source={{
                            uri: item?.imageUrl,
                        }}
                        style={styles.sliderImage}
                    />
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    sliderImage: {
        width:Dimensions.get('screen').width*0.8 ,
        height: 160,
       marginRight: 15,
        borderRadius: 15
    },
});
