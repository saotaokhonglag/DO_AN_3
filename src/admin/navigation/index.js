import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CustomerScreen from '../screens/Customer/CustomerScreen';
import ProductScreen from '../screens/Product/ProductScreen';


const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Customer" component={CustomerScreen} />
                <Stack.Screen name="SignIn" component={ProductScreen} />
                
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation