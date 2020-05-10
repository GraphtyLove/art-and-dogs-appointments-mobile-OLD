import React from 'react'
import { StyleSheet, View } from 'react-native'
import { ButtonGroup } from 'react-native-elements'

// Style:
const style = StyleSheet.create({
    container: {
        marginBottom: 50,
        width: '60%',
    },
})

const Switcher = props => {
    const buttons = ['A contacter', 'En attente']

    return (
        <View style={style.container}>
            <ButtonGroup
                onPress={props.setSwitcherIndex}
                selectedIndex={props.switcherIndex}
                buttons={buttons}
                containerStyle={{
                    backgroundColor: '#f5bf65',
                    borderRadius: 17,
                    borderColor: '#fff',
                    borderWidth: 5,
                }}
                textStyle={{ color: 'black' }}
                selectedButtonStyle={{ backgroundColor: 'white' }}
                selectedTextStyle={{ color: 'black', fontWeight: 'bold' }}

            />
        </View>
    )
}

export default Switcher