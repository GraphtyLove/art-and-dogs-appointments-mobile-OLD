import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Icon, Button } from 'react-native-elements'
import DateTimePicker from '@react-native-community/datetimepicker';
import SendSMS from 'react-native-sms'
import firestore from '@react-native-firebase/firestore'

// Style:
const style = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderRadius: 3,
        width: '90%',
        height: 280,
        justifyContent: 'space-around',
        marginBottom: 30,
    },
    headerContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f7f7f7',
        borderBottomColor: 'rgba(0, 0, 0, .125)',
        paddingHorizontal: 10,
        justifyContent: 'space-between',
    },
    bold: {
        fontWeight: 'bold',
    },
    mainContainer: {
        flex: 5,
        alignContent: 'center',
        paddingHorizontal: 12,
        paddingVertical: 10,
    },
    infoRow: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: 20,
    },
    footerContainer: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    infoRowTitle: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        width: '50%',
    },
    infoRowTitleText: {
        fontSize: 8,
        marginLeft: 5,
    },
    infoRowContentText: {
        fontSize: 10,
    },
    remarqueText: {
        fontSize: 8,
        textAlign: 'justify',
    },
    infoRowContentTextBold: {
        fontSize: 10,
        fontWeight: 'bold',
    },
    infoRowContent: {
        width: '50%',
        justifyContent: 'center',
    },
    infoRowContentDate: {
        width: '50%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    titleWarp: {
        flexDirection: 'row',
        alignItems: 'center',
    }

})

let sms_string = ''

const AppointmentItem = props => {
    // Constants
    const STATUS = props.appointment.status === 'todo' ? 'EN ATTENTE' : 'A CONTACTER'
    // States:
    const [dateTime, setDateTime] = useState(props.appointment.appointmentDateTime && new Date(props.appointment.appointmentDateTime.toDate()))
    const [dateTimePickerMode, setDateTimePickerMode] = useState('date')
    const [showDateTimePicker, setShowDateTimePicker] = useState(false)


    // * --- Output format --- *
    const formatPhone = phone => {
        if(phone && phone.length === 10 && phone[0] === '0'){
            phone = phone.split('')
            phone.splice(4, 0, ' ')
            phone.splice(7, 0, ' ')
            phone.splice(10, 0, ' ')
            phone = phone.join('')
        } else if (phone && phone.length === 12 && phone[0] === '+') {
                phone = phone.split('')
                phone.splice(3, 0, ' ')
                phone.splice(7, 0, ' ')
                phone.splice(10, 0, ' ')
                phone.splice(13, 0, ' ')
                phone = phone.join('')
        }
        return phone
    }

    // * --- DateTime picker --- *
    const dataTimePickerShow = () => {
        setDateTimePickerMode('date')
        setShowDateTimePicker(true)
    }
    const dateTimeOnChange = (event, selectedDate) => {
        // Get the date
        const currentDate = selectedDate || dateTime
        // Close the calendar/time
        setShowDateTimePicker(false)
        // Set the date/time in the state
        setDateTime(currentDate)
        // Format sms_string with the date and time
        if (dateTimePickerMode === 'time'){
            sms_string = `Salon Art and Dogs bonjour, je vous contacte suite à votre demande de rendez - vous effectuée le ${props.appointment.date}. Je peux vous proposer le: ${selectedDate.getDate()}/${selectedDate.getMonth()} à ${selectedDate.getHours()}h${selectedDate.getMinutes()}. Merci de me confirmer ou non votre présence. Une bonne journée.`
            setAppointmentDateTime(currentDate)
        }
        if (dateTimePickerMode === 'date') {
            setDateTimePickerMode('time')
            setShowDateTimePicker(true)
        }
    }

    // * --- Database functions --- *
    const appointmentDelete = () => {

        console.log('id: ', props.appointment)
        firestore().collection('appointments').doc(props.appointment.key).delete()
    }
    const appointmentStatusInvert = () => {
        let oppositeStatus = props.appointment.status === 'todo' ? 'waiting' : 'todo'
        firestore().collection('appointments').doc(props.appointment.key).update({ 'status': oppositeStatus})
    }
    const setAppointmentDateTime = (appointmentDate) => {
        dateTime && firestore().collection('appointments').doc(props.appointment.key).update({ 'appointmentDateTime': appointmentDate })
    }

    const sendSms = () => {
        console.log(dateTime)
        // SendSMS.send({
        //     //Message body
        //     body: 'Message sent',
        //     //Recipients Number
        //     recipients: [props.appointment.phone],
        //     //An array of types that would trigger a "completed" response when using android
        //     successTypes: ['sent', 'queued']
        // }, (completed, cancelled, error) => {
        //     if (completed) {
        //         console.log('SMS Sent Completed')
        //     } else if (cancelled) {
        //         console.log('SMS Sent Cancelled')
        //     } else if (error) {
        //         console.log('Some error occured')
        //     }
        // })
        console.log(sms_string)
    }

    return (
        <View style={style.container}>

            <View style={style.headerContainer}>
                <Text style={style.infoRowContentTextBold}> {props.appointment.date} </Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}><Text style={style.infoRowContentText}> Status: </Text><Icon name={props.appointment.status === 'todo' ? 'snooze' : 'alarm-on'} /></View>
            </View>

            <View style={style.mainContainer}>
                <View style={style.infoRow}>
                    <View style={style.infoRowTitle}>
                        <View style={style.titleWarp}>
                            <Icon name='person' />
                            <Text style={style.infoRowTitleText}>Client</Text>
                        </View>

                    </View>
                    <View style={style.infoRowContent}>
                        <Text style={style.infoRowContentTextBold}>{props.appointment.firstName} {props.appointment.lastName}</Text>
                        <Text style={style.infoRowContentText}>{formatPhone(props.appointment.phone)}</Text>
                    </View>
                </View>
                <View style={style.infoRow}>
                    <View style={style.infoRowTitle}>
                        <View style={style.titleWarp}>
                            <Icon name='pets' />
                            <Text style={style.infoRowTitleText}>Chien</Text>
                        </View>
                    </View>
                    <View style={style.infoRowContent}>
                        <Text style={style.infoRowContentTextBold}>{props.appointment.dogName}</Text>
                        <Text style={style.infoRowContentText}>{props.appointment.dogBreed}</Text>
                    </View>
                </View>
                <View style={style.infoRow}>
                    <View style={style.infoRowTitle}>
                        <View style={style.titleWarp}>
                            <Icon name='comment' />
                            <Text style={style.infoRowTitleText}>Remarque du client</Text>
                        </View>
                    </View>
                    <View style={style.infoRowContent}>
                        <Text style={style.remarqueText}>{props.appointment.remarque}</Text>
                    </View>
                </View>
                <View style={style.infoRow}>
                    <View style={style.infoRowTitle}>
                        <View style={style.titleWarp}>
                            <Icon name='today' />
                            <Text style={style.infoRowTitleText}>Rendez-vous</Text>
                        </View>
                    </View>
                    <View style={style.infoRowContentDate}>
                        <Button
                            onPress={() => dataTimePickerShow()}
                            titleStyle={{ fontSize: 12, color: '#000' }}
                            buttonStyle={{ height: 12, backgroundColor: 'rgba(0, 0, 0, 0.1)' }}
                            title={dateTime
                                ? `${dateTime.getDate().toString()}/${dateTime.getMonth().toString()} à ${dateTime.getHours().toString()}h${dateTime.getMinutes().toString()}`
                                : 'Choisir une date'}
                        />

                        {showDateTimePicker
                            && <DateTimePicker
                                value={dateTime ? dateTime : new Date()}
                                mode={dateTimePickerMode}
                                display={dateTimePickerMode === 'date' ? 'calendar' : 'clock'}
                                is24Hour
                                onChange={dateTimeOnChange}
                            />}

                    </View>
                </View>
            </View>

            <View style={style.footerContainer}>
                <Button onPress={() => appointmentDelete()} buttonStyle={{ width: 100, backgroundColor: '#cb444a' }} titleStyle={{ fontSize: 10, fontWeight: 'bold' }} title='Supprimer' />
                <Button onPress={() => sendSms()} buttonStyle={{ width: 100 }} titleStyle={{ fontSize: 10, fontWeight: 'bold' }} title='SMS' />
                <Button onPress={() => appointmentStatusInvert()} buttonStyle={{ width: 100, backgroundColor: '#53a451' }} titleStyle={{ fontSize: 10, fontWeight: 'bold' }} title={STATUS} />
            </View>

        </View>
    )
}

export default AppointmentItem