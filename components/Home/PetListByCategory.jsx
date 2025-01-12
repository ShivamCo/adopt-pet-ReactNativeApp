import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet, SectionList } from 'react-native';
import { db } from '../../config/FirebaseConfit';
import Category from './Category';
import { getDocs, query, collection, where } from 'firebase/firestore';
import { useCategoryStore } from '../../store/categoryStore';
import PetListItem from './PetListItem';

export default function PetListByCategory() {
  const { currentCategory } = useCategoryStore();
  const [pets, setPets] = useState([]);
  const [loader, setLoader] = useState(false)

  const GetPetList = async (category) => {

    try {
      setLoader(true)
      const q = query(collection(db, 'Pets'), where('category', '==', category));
      const querySnapshot = await getDocs(q);
      const petsList = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setPets(petsList);
      setLoader(false)
    } catch (error) {
      console.error('Error fetching pets:', error);
    }
  };

  useEffect(() => {
    if (currentCategory) {
      GetPetList(currentCategory);
    }
  }, [currentCategory]);

  return (
    <View>
      <Category />
      
      <FlatList
        refreshing={loader}
        onRefresh={() => GetPetList('dogs')}
        style={styles.petsListContainer}
        data={pets}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <PetListItem pet={item} />

        )}
      />
      
    </View>
  );
}


const styles = StyleSheet.create({
  petsListContainer : { 
    // flex : 1, 
    // flexGrow :1,
    // paddingTop: 15,
    
    
  }
})