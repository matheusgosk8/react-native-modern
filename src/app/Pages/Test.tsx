import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesome5, AntDesign } from "react-native-vector-icons";
import { useNavigation } from '@react-navigation/native'


const Test = () => {

    const navigation = useNavigation();

    const goToRoute = (route: string) => {
        switch (route) {
            case 'home':
                return navigation.navigate('Home' as never);
            case 'test':
                return navigation.navigate('Test' as never)
        }
    }


    return (
        <View className='flex-1 justify-center items-center'>
            <Text className='text-xl font-semibold'>
                Página de testes ...
            </Text>

            <View className='flex flex-row gap-2'>
                <View className='shadow-md p-2 rounded-md bg-white'>
                    <Pressable onPress={() => goToRoute('home')}>
                        <AntDesign name='home' size={50} />
                    </Pressable>
                </View>
                <View className='shadow-md p-2 rounded-md bg-white'>
                    <Pressable onPress={() => goToRoute('test')}>
                        <FontAwesome5 name='network-wired' size={50} />
                    </Pressable>
                </View>

            </View>
        </View>
    )
}

export default Test

