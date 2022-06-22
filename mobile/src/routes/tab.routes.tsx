import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const { Screen, Navigator } = createBottomTabNavigator();

import Home from "../screens/Home";
import List from "../screens/List";

export function TabRoutes() {
    return (
        <Navigator>
            <Screen
                name="Notícias"
                component={List}
                options={{
                    title: 'Notícias do Dia'
                }}
             />
            <Screen
                name="Home"
                component={Home}
                options={{
                    title: 'Registro de Notícias'
                }}
             />
        </Navigator>
    ) 
}