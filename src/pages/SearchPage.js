import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import { VideoContainer, ImageSwiper } from '../components'
import urldata from '../utils/urldata.json'



const SearchPage = (props) => {


    const renderItem = ({ item }) => (
        item.id == 0 ? <VideoContainer uri={item.url} /> :
            <ImageSwiper data={item.url} />
    );

    return (
        <View style={styles.container}>


            <FlatList
                data={urldata}
                renderItem={renderItem}
                keyExtractor={(_, index) => index.toString()}
                showsVerticalScrollIndicator={false}
                numColumns={2}
                
                windowSize={1}



            />


        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'white'
    },

});

export { SearchPage }