import React from "react";
import { View, Text, StyleSheet, Image, Dimensions, ScrollView, TouchableOpacity } from "react-native";
import IconLabel from "./Icon";
import {useAuth} from '../../../firebase'

import { useNavigation } from '@react-navigation/native'



const iconColor = '#008000';
const VoucherCard = ({ info }) => {

    const currentUser = useAuth();

    const navigation = useNavigation();

    
    const { name, image, location, price } = info;
    return (
        <TouchableOpacity onPress={() => {
            if (currentUser==null) {
                navigation.navigate('SignIn')
            } else {
                alert('idUser: '+currentUser.uid + '\n' + 'email: ' + currentUser.email);
            }
          }}>
            <ScrollView>
            <View style={styles.cardContainer}>
                <Image style={styles.imageStyle} source={image} />
                <Text style={{ marginLeft: 10 }}>{info.name}</Text>
                <Text style={styles.priceStyle}>{info.price}</Text>
                
                <IconLabel />
            </View>
            </ScrollView>
        </TouchableOpacity>


    )
};

const radius = 10;
const deviceWith = Math.round(Dimensions.get('window').width);

const styles = StyleSheet.create({
    cardContainer: {
        width: 180,
        backgroundColor: `#f5f5f5`,
        height: 180,
        borderRadius: radius,
        shadowColor: `#000000`,
        shadowOffset: {
            width: 5,
            height: 5
        },
        shadowRadius: 5,
        shadowOpacity: 0.75,
        elevation: 9,
        marginTop: 10,
        marginEnd:10
    },
    imageStyle: {
        height: 100,
        width: 180,
        borderTopLeftRadius: radius,
        borderTopRightRadius: radius,
        opacity: 0.9
    },
    titleStyle: {
        fontSize: 10,
        fontWeight: '400'
    },

    priceStyle: {
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 10

    },
    iconLabelStyle: {
        flexDirection: 'row',
        marginTop: 10
    },



})

export default VoucherCard;