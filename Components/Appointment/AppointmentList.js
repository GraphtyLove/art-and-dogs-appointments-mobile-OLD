import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native'
import firestore from '@react-native-firebase/firestore'

// Components:
import AppointmentItem from './AppointmentItem.js'


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
        fontSize: 20,
    }
})

const AppointmentList = props => {
    // States:
    const [appointmentList, setAppointmentList] = useState([])
    const [loading, setLoading] = useState(true)

    // Appointment lists
    const appointmentStatusTodo = appointmentList.filter(appointment => appointment.status === 'todo')
    const appointmentStatusWaiting = appointmentList.filter(appointment => appointment.status === 'waiting')

    useEffect(() => {
        console.log('EFFECT')
        const subscriber = firestore().collection('appointments').onSnapshot(querySnapshot => {
            const appointments = []

            querySnapshot.forEach( documentSnapshot => {
                appointments.push({
                    ...documentSnapshot.data(),
                    key: documentSnapshot.id,
                })
            })
            setAppointmentList(appointments)
            setLoading(false)
        })
        return () => subscriber
    }, [])

    return (
        <View style={style.container}>
            {loading && <Text>Chargement des rendez-vous...</Text>}

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
                && <Text style={style.EmptyMessage}>Pas de demande de rendez-vous! 👏🏽</Text>}

            {appointmentStatusWaiting.length === 0 && props.switcherIndex === 1
                && <Text style={style.EmptyMessage}>Pas de rendez-vous en attente! 👏🏽</Text>}
        </View>
    )
}

export default AppointmentList