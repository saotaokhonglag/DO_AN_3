import React, { useState } from 'react'
import { View, Text, KeyboardAvoidingView, ScrollView } from 'react-native'
import { COLORS } from '../../constants/theme'
import CustomInput from '../../components/CustomInput'
import { getFirestore, collection, addDoc } from "firebase/firestore";
import CustomButton from '../../components/CustomButton';

const AddVoucher = ({ navigation, route }) => {
    const [currentVoucherId, setcurrentVoucherId] = useState('')
    const [curentVoucherTitle, setcurentVoucherTitle] = useState('')
 
    const [price, setprice] = useState('')
    const [status, setstatus] = useState('')
    const db = getFirestore();

    const handleAddVoucher = () => {
        try {
            const docRef = addDoc(collection(db, "user3"), {
                first: "Ada",
                last: "Lovelace",
                born: 1815
            });
            alert("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
    return (
        <KeyboardAvoidingView style={{
            flex: 1
        }}>
            <ScrollView style={{
                flex: 1,
                backgroundColor: COLORS.white,
            }}>
                <View style={{ padding: 20 }}>
                    <Text style={{ fontSize: 20, textAlign: 'center', color: COLORS.black }}>
                        Add Voucher
                    </Text>
                    <CustomInput
                        placeholder="Title"
                        value={curentVoucherTitle}
                        setvalue={setcurentVoucherTitle} />

                    <CustomButton
                        text="AddVoucher"
                        onPress={handleAddVoucher}
                        type="PRIMARY"
                    />
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default AddVoucher
