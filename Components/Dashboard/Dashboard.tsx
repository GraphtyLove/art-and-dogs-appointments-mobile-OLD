import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

// Components:
import PageTitle from '../PageTitle/PageTitle'
import Switcher from '../Switcher/Switcher'
import AppointmentList from '../Appointment/AppointmentList'




// Style: 
const style = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
    },
})

const componentName = () => {
    // States:
    // Switch between todo (1) and waiting (2) appointments
    const [switcherIndex, setSwitcherIndex] = useState(1)

    return (
        <View style={style.container}>
            <PageTitle title='Mes rendez-vous' />
            <View>
                <View>
                    <Switcher switcherIndex={switcherIndex} setSwitcherIndex={setSwitcherIndex} />
                </View>
            </View>
            <View>
                <AppointmentList switcherIndex={switcherIndex} />
            </View>

        </View>
    )
}

export default componentName