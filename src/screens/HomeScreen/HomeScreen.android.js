import React from 'react'
import { View,Dimensions,StyleSheet,StatusBar,FlatList,Text} from 'react-native'
import Card from './Card'
import Slider from './Slider'
import CustomInput from '../../components/CustomInput'
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

export default function ({ }) {
    return (
        <View style={styles.container}>
            {/* <Header logo={Logo} /> */}
            <CustomInput style={styles.input}
             placeholder="Tìm kiếm android" 
             />
            <Slider/>
            <StatusBar barStyle="dark-content" />
            <Text style={styles.styleText}>San pham noi bat</Text>
            <FlatList data={voucher}
                renderItem={({ item }) => {
                    return <Card info={item} />
                }}
                numColumns={2}
                keyExtractor={(voucher) => voucher.id.toString()} />
        </View>
    )
}
const deviceWith = Math.round(Dimensions.get('window').width);
const styles = StyleSheet.create({
    container: {
        flex: 1,
        fontSize: 24,
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: `#ffffff`,
        width: deviceWith - 25
    },
    styleText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
        alignItems: 'flex-start',
        alignSelf:'flex-start'

    },
    styleSlider: {
        marginTop: 10
    }
})

