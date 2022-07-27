import React, {useState} from 'react'
import { Text, View, Image, StyleSheet, useWindowDimensions, ScrollView, Platform } from 'react-native'


const ProductScreen = () =>{
    

    return(
        <View>
            <Text>Day la customer</Text>
        </View>

    )
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding:20,
    },
    logo: {
        ...Platform.select({
            ios: {
                width: '70%',
                maxWidth: 300,
                maxHeight: 200,
                backgroundColor: 'red'
            },
            android: {
                width: '50%',
                maxWidth: 300,
                maxHeight: 200,
                backgroundColor: 'green'
            },
            default: {
              // other platforms, web for example
                width: '100%',
                
                backgroundColor: 'blue'
            }
          })
    },
    
});

export default ProductScreen