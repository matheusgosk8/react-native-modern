import { Link } from "expo-router";
import React, { useState } from "react";
import Home from "./Pages/Home";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Test from "./Pages/Test";
import { FontAwesome5, AntDesign } from "react-native-vector-icons";


const Tab = createBottomTabNavigator();


export default function Page() {





  return (


    <Tab.Navigator initialRouteName="Home" id={undefined}>
      <Tab.Screen name="Home" component={Home}
        options={{
          tabBarIcon: (() => (
            <AntDesign name='home' size={20} />
          ))
        }}
      />
      <Tab.Screen name="Test" component={Test}
        options={{
          tabBarIcon: (() => (
            <FontAwesome5 name='network-wired' size={20} />
          ))
        }}
      />
    </Tab.Navigator>

  );
}


