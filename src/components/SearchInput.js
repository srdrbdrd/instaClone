import React from 'react'
import { View, TextInput, Dimensions, Image, StyleSheet } from 'react-native'


const SearchInput = (props) => {
    return (
        <View style={
            styles.container
        }>
            <Image
                style={styles.image}
                resizeMode='contain'
                source={require('../icons/searchIcon.png')}
            />
            <TextInput style={
                styles.textInput
            }
                placeholder={props.textInputPlaceHolder}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                onFocus={props.onFocus}


            />




        </View>



    )
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width / 1,
        backgroundColor: '#f2f2f2',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',

    },
    image: {
        flex: 0.05,
        marginLeft: 15

    },
    textInput: {
        flex: 1,
        fontWeight: 'bold',
        marginHorizontal: 10,
        fontSize: 16
    },
});

export { SearchInput }