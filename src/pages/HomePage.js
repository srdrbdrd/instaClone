import React, { useEffect, useState } from 'react'
import { View, FlatList, ActivityIndicator, StyleSheet } from 'react-native'
import { VideoContainer, ImageSwiper, SearchInput } from '../components'
import { CommonActions } from '@react-navigation/native'
import * as Keychain from 'react-native-keychain'
import urldata from '../utils/urldata.json'




const HomePage = (props) => {
    const [credentials, setCredentials] = useState()
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        getName()
    }, [])

    const getName = async () => {

        let credentials = await Keychain.getGenericPassword(); //Get username for post
        setCredentials(credentials)
        setLoading(false)

    }

    const renderItem = ({ item }) => (
        item.id == 0 ? <VideoContainer styleHomePage uri={item.url} name={credentials.username} /> :
            <ImageSwiper styleHomePage data={item.url} name={credentials.username} />
    );

    function searchNavigate() {
        props.navigation.dispatch(
            CommonActions.navigate({
                name: 'SearchPage',
            })
        )
    }


    return (

        loading ? <ActivityIndicator size="large" color="#FFA630" style={styles.actvityStyle} />
            :
            <View style={styles.container}>

                <SearchInput textInputPlaceHolder="   Search" onFocus={searchNavigate} />
                <FlatList
                    data={urldata}
                    renderItem={renderItem}
                    keyExtractor={(_, index) => index.toString()}
                    showsVerticalScrollIndicator={false}

                    removeClippedSubviews={true}
                    windowSize={1}



                />


            </View>
    )
}


const styles = StyleSheet.create({
    actvityStyle: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    container: {
        flex: 1,
        backgroundColor: 'white'
    },

});


export { HomePage }