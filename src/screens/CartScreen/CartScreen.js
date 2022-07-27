import React from "react";
import { View, Text, FlatList, StyleSheet, Image, Button } from 'react-native'
import { Layout } from "react-native-rapi-ui";
import CusCart from "./CusCart";


const cart = [
    {
        name: 'Tour tham quan Đà Nẵng',
        price: '588,622',
        location: 'Đà Nẵng',
        image: require('../../../assets/images/DaNang.jpg'),
        id: 1
    },
    {
        name: 'Tour tham quan Hà Giang',
        price: '588,622',
        location: 'Hà Giang',
        image: require('../../../assets/images/HaGiang.jpg'),
        id: 2
    }
]
export default function ({ }) {
    return (
        <Layout>
            <View>
                <FlatList data={cart}
                    renderItem={({ item }) => {
                        return <CusCart info={item} />
                    }}

                    keyExtractor={(cart) => cart.id.toString()} />
                <View style={{
                    flexDirection: 'row',
                    alignItems:'center',
                    alignSelf:'center',
                    marginTop:10
                }}>
                    <Text style={{marginRight:10, fontWeight:'bold',fontSize:18}}>Tổng tiền: 100.000</Text>
                    <Button title="Thanh toán" style={{ height: 50, with: 100, marginLeft:30}} color={'orange'} />
                </View>
            </View>
        </Layout>
    )
}
const styles = StyleSheet.create({
    cardContainer: {
        width: 180,
        backgroundColor: `#f5f5f5`,
        height: 180,
        borderRadius: 10,
        shadowColor: `#000000`,
        shadowOffset: {
            width: 5,
            height: 5
        },
        shadowRadius: 5,
        shadowOpacity: 0.75,
        elevation: 9,
        marginTop: 10,
        marginEnd: 10
    },
    imageStyle: {
        height: 100,
        width: 180,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
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
    stylePay: {
        width: 180,
        backgroundColor: `#f5f5f5`,
        height: 180,
        borderRadius: 10,
        elevation: 9,
        marginTop: 10,
        marginEnd: 10
    }



})