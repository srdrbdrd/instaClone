import React, { useState } from 'react'
import { SafeAreaView, View, Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView, Alert, StyleSheet } from 'react-native'
import { Input, LoginButton } from '../components'
import { CommonActions } from '@react-navigation/native'
import * as Keychain from 'react-native-keychain'
const Login = (props) => {

    const [name, setName] = useState("")
    const [pass, setPass] = useState("")


    const storeNamePass = async () => {
        await Keychain.setGenericPassword(name, pass) //Generate Keychian for secure store
    }



    function login() {
        storeNamePass()
        if (name && pass !== "") {
            props.navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [

                        {
                            name: 'HomePage',

                        }
                    ],
                })
            )
        } else {
            Alert.alert("Please fill login information")
        }

    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : null}
            style={styles.keyboardeAvoidingStyle}
        >
            <SafeAreaView style={{ flex: 1 }}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.container} >
                        <Input textInputHeader="Name" textInputPlaceHolder="Enter your name" changeOnText={name => setName(name)} />
                        <Input textInputHeader="Password" textInputPlaceHolder="Enter your password" password changeOnText={pass => setPass(pass)} />
                        <LoginButton buttonText="Login"
                            pressed={login} />
                    </View>
                </TouchableWithoutFeedback>
            </SafeAreaView>
        </KeyboardAvoidingView>

    )

}

const styles = StyleSheet.create({
    keyboardeAvoidingStyle: {
        flex: 1
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },

});

export { Login }