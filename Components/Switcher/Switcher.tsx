import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, ButtonGroup } from 'react-native-elements'

const style = StyleSheet.create({
    activeButton: {
        backgroundColor: "white",
        fontWeight: "bold",
    },
    inactiveButton: {
        backgroundColor: "red",
    }
})

// TODO: Check the prop's type
const Switcher = (props: any) => {
    const buttons = ['A contacter', 'En attente']

    return (
        <View>
            <ButtonGroup
                onPress={props.setSwitcherIndex}
                selectedIndex={props.switcherIndex}
                buttons={buttons}
                containerStyle={{
                    backgroundColor: '#f5bf65',
                    borderRadius: '17px',
                    borderColor: '#fff',
                    borderWidth: '5px',
                }}
                textStyle={{ color: 'black' }}
                selectedButtonStyle={{ backgroundColor: 'white' }}
                selectedTextStyle={{ color: 'black', fontWeight: 'bold' }}

            />
        </View>
    )
}

export default Switcher