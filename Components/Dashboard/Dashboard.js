import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

// Components:
import PageTitle from '../PageTitle/PageTitle.js'
import Switcher from '../Switcher/Switcher.js'
import AppointmentList from '../Appointment/AppointmentList.js'




// Style: 
const style = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '95%',
        minHeight: '100%',
    },
})

const componentName = () => {
    // States:
    // Switch between todo (1) and waiting (2) appointments
    const [switcherIndex, setSwitcherIndex] = useState(0)

    return (
        <View style={style.container}>

            <PageTitle title='Mes rendez-vous' />

            <Switcher
                switcherIndex={switcherIndex}
                setSwitcherIndex={setSwitcherIndex}
            />

            <AppointmentList switcherIndex={switcherIndex} />

        </View>
    )
}

export default componentName