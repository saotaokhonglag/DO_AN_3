import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { themeColor, useTheme } from "react-native-rapi-ui";
import TabBarIcon from "../components/TabBarIcon";
import TabBarText from "../components/TabBarText";
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen/ForgotPasswordScreen';

import HomeScreen from '../screens/HomeScreen/HomeScreen.android';
import AccountScreen from '../screens/AccountScreen/AccountScreen';
import CartScreen from '../screens/CartScreen/CartScreen';
import VoucherScreen from '../screens/VoucherScreen/VoucherScreen';
import SignInScreen from '../screens/SignInScreen/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen/SignUpScreen';
import DetailsAcc from '../screens/AccountScreen/DetailsAcc';
import Edit from '../screens/AccountScreen/Edit';
import AddVoucher from '../screens/Admin/AddVoucher'

const MainStack = createStackNavigator();
const Main = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <MainStack.Screen name="MainTabs" component={MainTabs} />
      <MainStack.Screen name="SignInScreen" component={SignInScreen} />
      <MainStack.Screen name="SignUpScreen" component={SignUpScreen} />
      <MainStack.Screen name="ForgotPassWordScreen" component={ForgotPasswordScreen} />
      <MainStack.Screen name="DetailAccount" component={DetailsAcc} />
      <MainStack.Screen name="Edit" component={Edit} />
      <MainStack.Screen name ="AddVoucher" component={AddVoucher}/>
    </MainStack.Navigator>
  );
};

const Tabs = createBottomTabNavigator();
const MainTabs = () => {
  const { isDarkmode } = useTheme();
  return (
    <Tabs.Navigator
      tabBarOptions={{
        style: {
          borderTopWidth: 1,
          borderTopColor: isDarkmode ? themeColor.dark100 : "#c0c0c0",
          backgroundColor: isDarkmode ? themeColor.dark200 : "#ffffff",
        },
      }}
    >
      {/* these icons using Ionicons */}
      <Tabs.Screen
        name="AddVoucher"
        component={AddVoucher}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarText focused={focused} title="Home" />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon={"md-home"} />
          ),
        }}
      />
      <Tabs.Screen
        name="Voucher"
        component={VoucherScreen}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarText focused={focused} title="Voucher" />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon={"file-tray-full-outline"} />
          ),
        }}
      />
      <Tabs.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarText focused={focused} title="Cart" />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon={"cart-outline"} />
          ),
        }}
      />
      <Tabs.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarText focused={focused} title="Account" />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon={"person"} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};




export default function () {
  return (
    <NavigationContainer>
      <Main ></Main>
      
    </NavigationContainer>
  );
};

