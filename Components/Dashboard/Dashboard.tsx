import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

// Components:
import Switcher from '../Switcher/Switcher'

// Constants:
const API_PATH = "http://51.210.8.134/"

const componentName = () => {
    // States:
    const [appointmentList, setAppointmentList] = useState(null)
    const [apiError, setApiError] = useState('')
    // Switch between todo (1) and waiting (2) appointments
    const [switcherIndex, setSwitcherIndex] = useState(1)

    // API fetch:
    const sendUserToApi = () => {
        fetch(API_PATH + "appointment-admin", {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({
                userName: 'deesse',
                password: '18046161'
            }),
        })
            .then(result => result.json())
            .then(resultJson => {
                console.log('result', resultJson)
                setAppointmentList(resultJson)
            })
            .catch(() => setApiError("Erreur interne du serveur. Veuillez réessayer plus tard."))
    }


    return (
        <View>
            <View>
                <Text>Dashboard Art and Dogs</Text>
            </View>
            <View>
                <View>
                    <Switcher switcherIndex={switcherIndex} setSwitcherIndex={setSwitcherIndex} />
                </View>
            </View>
            <View>
                <Text>Appointment list here. Nop yet implemented.</Text>
            </View>

        </View>
    )
}

export default componentName