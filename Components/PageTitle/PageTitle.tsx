import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Divider } from 'react-native-elements'

const style = StyleSheet.create({
    container: {
        marginTop: 50,
        marginBottom: 50,
        alignItems: 'center',
    },
    titleText: {
        color: 'back',
        fontSize: 86,
        fontFamily: 'Baskervville',
        letterSpacing: 7,
    },
    divider: {
        backgroundColor: 'black',
        width: 70,
        height: 10,
        alignSelf: 'center'
    }
})


const PageTitle = (props: any) => {
    return (
        <View style={style.container}>
            <Text style={style.titleText}>{props.title}</Text>
            <Divider style={style.divider} />
        </View>
    )
}

export default PageTitle