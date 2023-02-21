import { useNavigation } from '@react-navigation/native'
import React, { useLayoutEffect } from 'react'
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

const HomeScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    })
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

                {/* Featured Rows */}
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
