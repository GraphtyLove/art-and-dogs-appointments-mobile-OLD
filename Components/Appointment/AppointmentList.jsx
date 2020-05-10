import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'

// Components:
import AppointmentItem from './AppointmentItem'

// Constants:
const API_PATH = "http://51.210.8.134/"

// Style:
const style = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
    },
    errorMessage: {
        color: 'red',
        fontWeight: 'bold',
    },
    EmptyMessage: {
        fontWeight: 'bold',
        fontSize: 22,
    }
})

const AppointmentList = (props: any) => {
    // States:
    const [appointmentList, setAppointmentList] = useState([])
    const [apiError, setApiError] = useState('')

    // Appointment lists
    const appointmentStatusTodo = appointmentList.filter((appointment: any) => appointment.status === 'todo')
    const appointmentStatusWaiting = appointmentList.filter((appointment: any) => appointment.status === 'waiting')

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

    useEffect(() => {
        sendUserToApi()
    }, [])

    return (
        <View style={style.container}>


            {appointmentStatusWaiting.length > 0
                && props.switcherIndex === 1
                && appointmentStatusWaiting.map(appointment => <AppointmentItem
                    key={appointment.id}
                    appointment={appointment}
                />)
            }

            {appointmentStatusTodo.length > 0
                && props.switcherIndex === 0
                && appointmentStatusTodo.map(appointment => <AppointmentItem
                    key={appointment.id}
                    appointment={appointment}
                />)
            }


            {appointmentStatusTodo.length === 0 && props.switcherIndex === 0
                && <Text style={style.EmptyMessage}>Pas de rendez-vous en attente! 👏🏽</Text>}

            {appointmentStatusWaiting.length === 0 && props.switcherIndex === 1
                && <Text style={style.EmptyMessage}>Pas de demande de rendez-vous! 👏🏽</Text>}

            {apiError.length > 0
                && <Text style={style.errorMessage}>L'application ne peut charger la liste de rendez-vous.
                Êtes-vous connecté à internet?</Text>}
        </View>
    )
}

export default AppointmentList