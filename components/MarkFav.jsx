// MarkFav.js
import { View, Pressable } from 'react-native';
import React, { useEffect, useState } from 'react';
import Shared from './../shared/Shared';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useUser } from '@clerk/clerk-expo';
import Colors from '../constants/Colors';

export default function MarkFav({ pet }) {
    const { user } = useUser();
    const [favList, setFavList] = useState([]);

    useEffect(() => {
        if (user) {
            GetFav();
        }
    }, [user]);

    const GetFav = async () => {
        const result = await Shared.GetFavList(user);
        if (result) {
            setFavList(result.favorites || []);
        }
    };

    const AddToFav = async () => {
        if (!pet?.id) return;

        const updatedFavList = [...favList, pet.id];
        await Shared.UpdateFav(user, updatedFavList);
        GetFav();
    };

    const RemoveFromFav = async () => {
        if (!pet?.id) return;

        await Shared.RemoveFav(user, pet.id);
        GetFav();
    };

    return (
        <View>
            {favList.includes(pet.id) ? (
                <Pressable onPress={RemoveFromFav}>
                    <AntDesign name="heart" size={30} color={Colors.PRIMARY} />
                </Pressable>
            ) : (
                <Pressable onPress={AddToFav}>
                    <AntDesign name="hearto" size={30} color="black" />
                </Pressable>
            )}
        </View>
    );
}
