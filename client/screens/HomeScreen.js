import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { View, Text, Image, StyleSheet, StatusBar, TextInput, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import {
    UserIcon,
    ChevronDownIcon,
    SearchIcon,
    AdjustmentsIcon,
} from "react-native-heroicons/outline";
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import { createClient } from '@sanity/client';

const client = createClient({
    projectId: 'lmtrfu4m',
    dataset: 'production',
    useCdn: true,
    apiVersion: "2022-01-12",
});

const HomeScreen = () => {
    const navigation = useNavigation();
    const [featuredCategories, setFeaturedCategories] = useState(null)

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    })

    // useEffect(() => {
    //     const query = `*[_type == "featured"] {
    //       ...,
    //       restaurants[]->{
    //         ...,
    //         dishes[]->
    //       }
    //     }`;
    //     client
    //         .fetch(query)
    //         .then((data) => {
    //             setFeaturedCategories(data);
    //         })
    //         .catch((error) => console.log(error));
    // }, []);

    // useEffect(() => {
    //     fetch('https://lmtrfu4m.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22featured%22%5D%20%7B%0A%20%20...%2C%0A%20%20restuarants%5B%5D-%3E%7B%0A%20%20%20%20...%2C%0A%20%20%20%20dishes%5B%5D-%3E%0A%20%20%7D%0A%7D')
    //         .then((response) => response.json())
    //         .then((data) => {
    //             setFeaturedCategories(data.result)
    //             // console.log(data)
    //             // const obj = JSON.parse(data)
    //             // console.log(data)
    //         })
    //         .catch((error) => {
    //             console.error('Error:', error);
    //         });
    // }, [])
    console.log(`
    
    
    
    
    
    
    
    
    
    `)
    // console.log(featuredCategories)

    return (
        <SafeAreaView className="bg-white pt-5">
            {/* <Text className='text-red-500'> */}
            {/* Header */}
            <View className="flex-row pb-3 items-center mx-4 space-x-2">
                <Image
                    source={{
                        uri: "https://links.papareact.com/wru",
                    }}
                    className="h-7 w-7 bg-gray-300 p-4 rounded-full"
                />

                <View className="flex-1">
                    <Text className="font-bold text-gray-400 text-xs">
                        Deliver Now!
                    </Text>
                    <Text className='font-bold text-xl'>
                        Current Location
                        <ChevronDownIcon size={20} color="#00CCBB" />
                    </Text>
                </View>

                <UserIcon size={35} color="#00CCBB" />
            </View>


            {/* Search */}
            <View className="flex-row items-center space-x-2 pb-2 mx-4">
                <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
                    {/* <SearchIcon color="gray" size={20} /> */}
                    <TextInput
                        placeholder="Restaurants and Cuisines"
                        keyboardType="default"
                    />
                </View>

                {/* <AdjustmentsIcon color="#00CCBB" /> */}
            </View>

            {/* Body */}
            <ScrollView className="bg-gray-100"
                contentContainerStyle={{
                    paddingBottom: 100,
                }}
            >
                {/* Categories  */}
                <Categories />

                {/* Featured Rows
                {featuredCategories?.map((category) => {
                    console.log(category._id)
                    console.log(category.name)
                    console.log(category.short_description)
                    // <FeaturedRow
                    //     key={category._id}
                    //     id={category._id}
                    //     title={category.name}
                    //     description={category.short_description}
                    // />
                })} */}


                <FeaturedRow
                    id="123"
                    title="Featured"
                    description="Paid Placements for our partners"
                // featuredCategory="featured"
                />

                <FeaturedRow
                    id="123"
                    title="Tasty Discounts"
                    description="Paid Placements for our partners"
                // featuredCategory="featured"
                />

                <FeaturedRow
                    id="123"
                    title="Offers Near You!"
                    description="Paid Placements for our partners"
                // featuredCategory="featured"
                />

            </ScrollView>

            {/* Tasty Discounts */}
        </SafeAreaView>
    )
}

export default HomeScreen;
