import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestuarantCard from './RestuarantCard'
import { client } from '../sanity'

const FeaturedRow = ({ id, title, description }) => {

    const [restaurants, setRestaurants] = useState([])
    https://lmtrfu4m.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22featured%22%20%26%26%20_id%3D%3D'014d9412-2838-4cbc-ac09-d346dfa95890'%5D%20%7B%0A%20%20%20%20%20%20%20%20%20%20...%2C%0A%20%20%20%20%20%20%20%20%20%20restuarants%5B%5D-%3E%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20...%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20dishes%5B%5D-%3E%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20type-%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7D%5B0%5D%0A%0A

    useEffect(() => {
        fetch(`https://lmtrfu4m.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22featured%22%20%26%26%20_id%3D%3D'${id}'%5D%20%7B%0A%20%20%20%20%20%20%20%20%20%20...%2C%0A%20%20%20%20%20%20%20%20%20%20restuarants%5B%5D-%3E%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20...%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20dishes%5B%5D-%3E%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20type-%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7D%5B0%5D%0A%0A`)
            .then((response) => response.json())
            .then((data) => {
                console.log('--------------------------------------------------------------------------------------------------------')
                // console.log(data)
                // console.log(data.result.restuarants)
                setRestaurants(data.result.restuarants);
                // console.log(data)
                // const obj = JSON.parse(data)
                // console.log(data)
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, [])

    // console.log(restaurants)

    // useEffect(() => {
    //     client.fetch(`
    //     *[_type == "featured" && id== $id] {
    //         ...,
    //         restaurants[]->{
    //           ...,
    //           dishes[]->,
    //           type-> {
    //             name
    //           }
    //         },
    //       }[0]
    //     `).then((data) => {
    //         setRestaurants(data?.restaurants);
    //     })

    // }, [])


    return (
        <View>
            <View className="mt-4 flex-row items-center justify-between px-4">
                <Text className="font-bold text-lg">{title}</Text>
                <ArrowRightIcon color="#00CCBB" />
            </View>
            <Text className="text-xs text-gray-500 px-4">{description}</Text>

            <ScrollView
                horizontal
                contentContainerStyle={{
                    paddingHorizontal: 15,
                }}
                showsHorizontalScrollIndicator={false}
                className="pt-4"
            >

                {/* Sanity Fetch Restuarant Cards */}
                {/* {restaurants?.map(restaurant => (
                    <RestuarantCard
                        key={restaurant._id}
                        id={restaurant._id}
                        imgUrl={restaurant.image}
                        title={restaurant.name}
                        rating={restaurant.rating}
                        genre={restaurant.type?.name}
                        address={restaurant.address}
                        short_description={restaurant.short_description}
                        dishes={restaurant.dishes}
                        long={20}
                        lat={0}
                    />
                ))} */}
                {/* Restaurant cards */}
                <RestuarantCard
                    id={123}
                    imgUrl="https://links.papareact.com/gn7"
                    title="Yo! Sushi"
                    rating={4.5}
                    genre="Japanese"
                    address="123 Main St"
                    short_description="This is a test description"
                    dishes={[]}
                    long={20}
                    lat={0}
                />
                <RestuarantCard
                    id={123}
                    imgUrl="https://links.papareact.com/gn7"
                    title="Yo! Sushi"
                    rating={4.5}
                    genre="Japanese"
                    address="123 Main St"
                    short_description="This is a test description"
                    dishes={[]}
                    long={20}
                    lat={0}
                />
                <RestuarantCard
                    id={123}
                    imgUrl="https://links.papareact.com/gn7"
                    title="Yo! Sushi"
                    rating={4.5}
                    genre="Japanese"
                    address="123 Main St"
                    short_description="This is a test description"
                    dishes={[]}
                    long={20}
                    lat={0}
                />

            </ScrollView>
        </View>
    )
}

export default FeaturedRow
