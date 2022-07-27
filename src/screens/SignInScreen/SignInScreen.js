import React, { useState } from 'react'
import { Text, View, Image, StyleSheet, useWindowDimensions, ScrollView, Platform, SafeAreaView } from 'react-native'
import Logo from '../../../assets/images/Logo_1.png'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import SocialSignInButton from '../../components/SocialSignInButton/SocialSignInButton'
import { useNavigation } from '@react-navigation/native'
import { login, useAuth, get_DATA } from '../../../firebase'
import { COLORS } from '../../constants/theme'
import {signInWithEmailAndPassword, getAuth} from 'firebase/auth'

// import { db } from '../../firebase/firebaes-config'
// import { ref, set, push, onValue } from "firebase/database";

const SignInScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { height } = useWindowDimensions();
    const navigation = useNavigation();

    const auth = getAuth();
    const currentUser = useAuth();

    async function onSignInPressed() {
        if(email !='' && password !=''){
            try {
                signInWithEmailAndPassword(auth, email, password);
                navigation.navigate('MainTabs')
               
            } catch (error) {
                alert(error);
            }
        }
       
        //     const user = ref(db, "NH/");
        //   //lay du lieu vào data
        //     onValue(user, (snapshot) => {
        //       const data = snapshot.val();
        //       alert(data.name);
        //     });

    }
    const onForgotPasswordPressed = () => {

        navigation.navigate('ForgotPassword')
    }
    const onSignupPressed = () => {
        navigation.navigate('SignUpScreen')
    }

    return (
        <SafeAreaView
            style={styles.root}>
            {/* Header */}
            <Image source={Logo} style={[styles.logo, { height: height * 0.3 }]} resizeMode="contain" />

            {/* Email */}
            <CustomInput
                placeholder="Username/Email"
                value={email}
                setvalue={setEmail}
            />
            {/* Password */}

            <CustomInput 
             placeholder="Password" 
             value={password} 
             setvalue={setPassword}
             secureTextEntry={true}
             />
            {/* Submitbutton */}
            <CustomButton text="Sign In" onPress={onSignInPressed}/>

            {/* Footer */}
            <CustomButton 
             text="Forgot password" 
             onPress={onForgotPasswordPressed}
             type="TERTIARY"
             />
            <SocialSignInButton/>
             <CustomButton 
             text="Don't have an account? Create one" 
             onPress={onSignupPressed}
             type="TERTIARY"
             />

        </SafeAreaView>

    );
};

const styles = StyleSheet.create({
    root: {
        backgroundColor: COLORS.white,
        flex: 1,
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        ...Platform.select({
            ios: {
                width: '70%',
                maxWidth: 300,
                maxHeight: 200,
            },
            android: {
                width: '50%',
                maxWidth: 300,
                maxHeight: 200,
            },
            default: {
                // other platforms, web for example
                width: '100%',

            }
        })
    },

});

export default SignInScreen