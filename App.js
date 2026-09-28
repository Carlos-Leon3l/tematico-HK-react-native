import React from "react"
import { NavigationContainer, NavigationIndependentTree } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { MaterialCommunityIcons } from "@expo/vector-icons"

import Nascimento from "./src/screens/Nascimento"
import Chegada from "./src/screens/Chegada"
import Aventura from "./src/screens/Aventura"
import Radiancia from "./src/screens/Radiancia"

const Tab = createBottomTabNavigator()

export default function App() {
    return (
        <NavigationIndependentTree>
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={{
                        headerShown: false,
                        tabBarStyle: {
                            backgroundColor: '#000000',
                            borderTopWidth: 1,
                            borderTopColor: '#1A1A1A',
                            paddingBottom: 5,
                            height: 60
                        },
                        tabBarActiveTintColor: '#F5F5F5',
                        tabBarInactiveTintColor: '#404040',
                        tabBarLabelStyle: { fontSize: 11, letterSpacing: 1, marginBottom: 5 }
                    }}
                >
                    <Tab.Screen 
                        name="Nascimento" 
                        component={Nascimento} 
                        options={{
                            tabBarIcon: ({ color, size }) => (
                                <MaterialCommunityIcons name="skull-outline" color={color} size={size} />
                            )
                        }}
                    />
                    <Tab.Screen 
                        name="Chegada" 
                        component={Chegada} 
                        options={{
                            tabBarIcon: ({ color, size }) => (
                                <MaterialCommunityIcons name="map-marker-path" color={color} size={size} />
                            )
                        }}
                    />
                    <Tab.Screen 
                        name="Aventura" 
                        component={Aventura} 
                        options={{
                            tabBarIcon: ({ color, size }) => (
                                <MaterialCommunityIcons name="sword" color={color} size={size} />
                            )
                        }}
                    />
                    <Tab.Screen 
                        name="Radiância" 
                        component={Radiancia} 
                        options={{
                            tabBarIcon: ({ color, size }) => (
                                <MaterialCommunityIcons name="white-balance-sunny" color={color} size={size} />
                            )
                        }}
                    />
                </Tab.Navigator>
            </NavigationContainer>
        </NavigationIndependentTree>
    )
}
