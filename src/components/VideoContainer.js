import React from 'react'
import { View, StyleSheet, Dimensions, Text } from 'react-native'
import Video from 'react-native-video';


const VideoContainer = (props) => {
    return (
        <View style={styles.parentContainer}>
            <View style={props.styleHomePage ? styles.containerHomePage : styles.containerGridViewPage}>
                {
                    props.styleHomePage ?
                        <View style={styles.headerContainerHomePage}>
                            <Text style={styles.headerText}>{props.name}</Text>
                        </View>
                        : null}
                <Video source={{ uri: props.uri }}
                    resizeMode="cover"
                    
                    style={props.styleHomePage ? styles.homePageVideo : styles.gridPageVideo
                    } />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    parentContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerHomePage: {
        width: Dimensions.get('window').width / 1,
        height: Dimensions.get('window').height * 0.7,
        overflow: 'hidden',
        marginBottom: 20
    },
    headerContainerHomePage: {
        height: 40,
        width: Dimensions.get('window').width / 1,
        justifyContent: 'center',
        borderTopColor: 'rgba(218, 223, 225, 1)',
        borderTopWidth: 1
    },
    headerText: {
        fontSize: 18,
        marginLeft: 20,
        fontWeight: 'bold'
    },
    homePageVideo: {
        position: 'absolute',
        top: 40,
        right: 0,
        bottom: 0,
        left: 0,
    },
    containerGridViewPage: {
        width: Dimensions.get('window').width / 2.2, height: Dimensions.get('window').height / 2.2,
        overflow: 'hidden',
        borderRadius: 50,
        marginVertical: 10
    },
    gridPageVideo: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
    }
});

export { VideoContainer }