import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const AppointmentItem = (props: any) => {
    return (
        <View>
            <Text>{props.appointment.firstName}</Text>
        </View>
    )
}

export default AppointmentItem