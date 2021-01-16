import React from 'react'
import { Dimensions, Text, TouchableOpacity, StyleSheet } from 'react-native'

const LoginButton = (props) => {
    return (

        <TouchableOpacity style={styles.container}
            onPress={props.pressed}
        >

            <Text style={styles.text}>
                {props.buttonText}
            </Text>

        </TouchableOpacity>


    )
}







const styles = StyleSheet.create({
    container: {
        height: Dimensions.get('window').height / 16,
        width: Dimensions.get('window').width / 1.1,
        backgroundColor: '#f2f2f2',
        justifyContent: 'center',
        alignSelf: 'center',
        padding: 10,
        borderRadius: Dimensions.get('window').width / 16,
        backgroundColor: 'rgba(243, 156, 18, 0.8)',
        marginVertical: 10
    },
    text: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 22,
        color: 'white'

    }

});

export { LoginButton }