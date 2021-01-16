import React from 'react'
import { View, Image, Dimensions, Text, StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';





const ImageSwiper = (props) => {


    const renderItem = ({ item }) =>
        <View style={styles.renderContainer}>

            <Image

                style={

                    props.styleHomePage ? styles.imageStyleHomePage : styles.imageStyleGridViewPage

                } source={{ uri: item }} resizeMode='cover' />

        </View>






    return (

        <View style={props.styleHomePage ? styles.containerHome : styles.containerGrid}>
            {
                props.styleHomePage ?
                    <View style={styles.homePageHeaderContainer}>
                        <Text style={styles.headerTextStyle}>{props.name}</Text>
                    </View>
                    : null}

            <View style={props.styleHomePage ? null : styles.gridViewFlatlistContainer}   >


                <FlatList
                    data={props.data}
                    renderItem={renderItem}
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(_, index) => index.toString()}


                />

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    containerHome: {
        flex: 1,
        marginBottom: 20
    },
    containerGrid: {
        flex: 1,

    },
    imageStyleHomePage: {
        width: Dimensions.get('window').width / 1,
        aspectRatio: 1
    },
    imageStyleGridViewPage: {
        width: Dimensions.get('window').width / 2.2,
        height: Dimensions.get('window').height / 2.2
    },
    gridViewFlatlistContainer: {
        width: Dimensions.get('window').width / 2.2, height: Dimensions.get('window').height / 2.2,
        overflow: 'hidden',
        borderRadius: 50,
        marginVertical: 10

    },
    renderContainer: {
        flex: 1
    },
    homePageHeaderContainer: {
        height: 40,
        width: Dimensions.get('window').width / 1,
        justifyContent: 'center',
        borderTopColor: 'rgba(218, 223, 225, 1)',
        borderTopWidth: 1
    },
    headerTextStyle: {
        fontSize: 18,
        marginLeft: 20,
        fontWeight: 'bold'
    }

});
export { ImageSwiper }
