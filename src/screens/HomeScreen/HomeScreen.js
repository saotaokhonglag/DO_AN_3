import React from 'react'
import { View, Text, StyleSheet, StatusBar, FlatList, TouchableOpacity, TouchableOpacityBase} from 'react-native'
import Header from './Header'
import Card from './Card'


const voucher = [
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
    },
    {
        name: 'Tour tham quan Mộc Châu',
        price: '588,622',
        location: 'Mộc Châu',
        image: require('../../../assets/images/MocChau.jpg'),
        id: 3
    },
    {
        name: 'Tour tham quan Phú Quốc',
        price: '588,622',
        location: 'Phú Quốc',
        image: require('../../../assets/images/PhuQuoc.jpg'),
        id: 4
    },
    {
        name: 'Tour tham quan Sa Pa',
        price: '588,622',
        location: 'SaPa',
        image: require('../../../assets/images/SaPa.jpg'),
        id: 5
    }
]

const HomeScreen = () => {
    return (
        <View style={styles.container}>

            <StatusBar barStyle="dark-content" />
            <FlatList data={voucher}
            renderItem={({item})=>{
                return <Card info={item}/>
            }}
            
            keyExtractor={(voucher)=> voucher.id.toString()}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        fontSize: 24,
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: `#ffffff`
    }
})
export default HomeScreen;
