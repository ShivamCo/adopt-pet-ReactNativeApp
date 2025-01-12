import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { db } from '../../config/FirebaseConfit';
import { collection, getDocs } from 'firebase/firestore';
import Colors from '../../constants/Colors';
import { useCategoryStore } from '../../store/categoryStore';

export default function Category() {
    const { currentCategory, setCategory } = useCategoryStore();
    const [categoryList, setCategoryList] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('dogs'); // Default category

    // Fetch categories from Firestore
    const GetCategory = async () => {
        try {
            const snapShot = await getDocs(collection(db, 'categories'));
            const categoryList = snapShot.docs.map((doc) => doc.data());
            setCategoryList(categoryList); 
        } catch (error) {
            console.error('Error fetching category data:', error);
        }
    };

    useEffect(() => {
        GetCategory();
    }, []);



    return (
        <View style={{ marginTop: 20 }}>
            <Text style={styles.headerText}>Category</Text>
            <FlatList
                numColumns={4}
                data={categoryList}
                keyExtractor={(item, index) => `${item.name}-${index}`} // Unique key
                renderItem={({ item }) => (
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <TouchableOpacity
                            onPress={() => {
                                setSelectedCategory(item.name);
                                setCategory(item.name)
                            }}
                            style={[
                                styles.container,
                                selectedCategory === item.name && styles.selectedCategoryButton,
                            ]}
                        >
                            <Image source={{ uri: item?.imageUrl }} style={styles.image} />
                        </TouchableOpacity>
                        <Text style={styles.categoryText}>
                            {item?.name?.toUpperCase()}
                        </Text>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    headerText: {
        fontFamily: 'poppins-semibold',
        fontSize: 20,
        marginBottom: 10,
    },
    container: {
        backgroundColor: Colors.PRIMARY_LITE,
        padding: 15,
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 15,
        borderColor: Colors.PRIMARY,
        margin: 5,
        
    },
    selectedCategoryButton: {
        backgroundColor: Colors.PRIMARY,
        padding: 15,
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 15,
        borderColor: Colors.PRIMARY,
        margin: 5,
    },
    image: {
        width: 40,
        height: 40,
    },
    categoryText: {
        fontFamily: 'poppins',
        textAlign: 'center',
    },
});
