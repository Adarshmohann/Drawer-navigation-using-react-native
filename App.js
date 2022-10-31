import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Login from "./src/page1";
import Item from "./src/Drawer/Item";
import List from "./src/Drawer/List";
import Otp from "./src/Page2.js";

const Stack=createStackNavigator()
const Drawer=createDrawerNavigator()


function MyStak(){
    return(
        <Stack.Navigator>
            <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}/>

            <Stack.Screen
            name="Otp"
            component={Otp}
            options={{headerShown: false}}/>

            <Stack.Screen
            name="MyDrawer"
            component={MyDrawer}
            options={{headerShown: false}}/>

            
        </Stack.Navigator>
    )
}

function MyDrawer(){
    return(
        <Drawer.Navigator>
            <Drawer.Screen
            name="List"
            component={List}/>

            <Drawer.Screen
            name="Item"
            component={Item}/>
        </Drawer.Navigator>
    )
}
export default function App(){
    return(
        <NavigationContainer>
            <MyStak/>
        </NavigationContainer>
    )
}








