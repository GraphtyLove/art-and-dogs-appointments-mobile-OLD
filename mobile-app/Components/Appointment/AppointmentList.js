import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
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

    // const handleNotifications = () => LocalNotification()

    useEffect(() => {
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
            {loading 
                && <View>
                    <Text style={{ marginBottom: 20 }}>Chargement des rendez-vous...</Text>
                    <ActivityIndicator size='large' color='white' />
                </View>
                }

            {appointmentStatusWaiting.length > 0
                && props.switcherIndex === 1
                && appointmentStatusWaiting.map(appointment => <AppointmentItem
                    key={appointment.key}
                    appointment={appointment}
                />)
            }

            {appointmentStatusTodo.length > 0
                && props.switcherIndex === 0
                && appointmentStatusTodo.map(appointment => <AppointmentItem
                    key={appointment.key}
                    appointment={appointment}
                />)
            }


            {!loading && appointmentStatusTodo.length === 0 && props.switcherIndex === 0
                && <Text style={style.EmptyMessage}>Pas de demande de rendez-vous! 👏🏽</Text>}

            {!loading && appointmentStatusWaiting.length === 0 && props.switcherIndex === 1
                && <Text style={style.EmptyMessage}>Pas de rendez-vous en attente! 👏🏽</Text>}
        </View>
    )
}

export default AppointmentList