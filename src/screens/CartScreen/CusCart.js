import React from "react";
import { View, Text, StyleSheet, Image, Dimensions, Button, TouchableOpacity } from "react-native";
import Checkbox from "react-native-rapi-ui/components/CheckBox/CheckBox";
import IconLabel from "../HomeScreen/Icon";
import { useAuth } from '../../../firebase'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'



const iconColor = '#008000';
const CusCart = ({ info }) => {

    const currentUser = useAuth();

    const navigation = useNavigation();
    const onSignInPressed = () => {
        if (currentUser == null) {
            navigation.navigate('SignIn')
        } else {
            alert('idUser: ' + currentUser.uid + '\n' + 'email: ' + currentUser.email);
        }
    }
    const [checkBox, setCheckbox] = React.useState(false);
    const { name, image, location, price } = info;
    return (

        <TouchableOpacity onPress={onSignInPressed}>
            <View style={{ flexDirection: 'row' }}>
                <View style={styles.cardContainer}>
                    <Checkbox  style={{alignItems:'center', alignSelf:'center'}}
                    value={checkBox} onValueChange={(val) => setCheckbox(val)}/>
                    <Image style={styles.imageStyle} source={image} />
                    <Text style={{ marginLeft: 30 }}>{info.name}</Text>
                    <Text style={styles.priceStyle}>{info.price}</Text>

                    <View style={styles.Iconcontainer}>
                        <Icon name="location-outline"
                            type="ionicon"
                            size={15}
                            style={styles.iconStyle}></Icon>
                        <Text style={styles.iconLabel}>Đà Nẵng</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>


    )
};

const radius = 10;
const deviceWith = Math.round(Dimensions.get('window').width);

const styles = StyleSheet.create({
    cardContainer: {
        width: 350,
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
        marginStart: 45,

    },
    imageStyle: {
        height: 100,
        width: 310,
        borderTopLeftRadius: radius,
        borderTopRightRadius: radius,
        opacity: 0.9,
        marginLeft: 30

    },
    titleStyle: {
        fontSize: 10,
        fontWeight: '400',
        marginLeft: 25
    },

    priceStyle: {
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 30

    },
    iconLabelStyle: {
        flexDirection: 'row',
        marginTop: 10
    },
    iconLabel: {
        fontSize: 13
    },
    Iconcontainer: {
        flexDirection: 'row',
        marginLeft: 30

    },
    iconStyle: {
        marginRight: 2
    }


})

export default CusCart;