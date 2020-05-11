import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Icon, Button } from 'react-native-elements'
import SendSMS from 'react-native-sms'

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
    titleWarp: {
        flexDirection: 'row',
        alignItems: 'center',
    }

})

const API_URL = "http://51.210.8.134/"

const AppointmentItem = props => {
    // Constants
    const STATUS = props.appointment.status === 'todo' ? 'EN ATTENTE' : 'A CONTACTER'


    const appointmentDay = '12'
    const appointmentMonth = '02'
    const appointmentHour = '12'
    const appointmentMinute = '16'

    let SMS_STRING = `Salon Art and Dogs bonjour, je vous contacte suite à votre demande 
                        de rendez - vous effectuée le ${ props.appointment.date}. Je peux 
                        vous proposer le: ${appointmentDay} /${appointmentMonth} à 
                        ${appointmentHour}h${appointmentMinute}. Merci de me confirmer ou 
                        non votre présence. Une bonne journée.`

    const appointmentDelete = appointmentId => {
        console.log('id: ', appointmentId)
        fetch(API_URL + "appointment-delete", {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({ id: appointmentId }),
        })
            .then(result => result.json())
            .then(resultJson => { resultJson.success && props.fetchAppointments() })
    }
    const appointmentStatusInvert = appointmentData => {
        appointmentData.id = appointmentData._id.$oid
        console.log('invert: ', appointmentData)
        fetch(API_URL + "appointment-status-invert", {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(appointmentData),
        })
            .then(result => result.json())
            .then(resultJson => { resultJson.success && props.fetchAppointments() })
            .catch(err => console.log(err))
    }
    const sendSms = () => {
        SendSMS.send({
            //Message body
            body: 'Message sent',
            //Recipients Number
            recipients: [props.appointment.phone],
            //An array of types that would trigger a "completed" response when using android
            successTypes: ['sent', 'queued']
        }, (completed, cancelled, error) => {
            if (completed) {
                console.log('SMS Sent Completed')
            } else if (cancelled) {
                console.log('SMS Sent Cancelled')
            } else if (error) {
                console.log('Some error occured')
            }
        });
    }

    return (
        <View style={style.container}>

            <View style={style.headerContainer}>
                <Text style={style.infoRowContentTextBold}> {props.appointment.date} </Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}><Text style={style.infoRowContentTextBold}> Status: </Text><Icon name={props.appointment.status === 'todo' ? 'snooze' : 'alarm-on'} /></View>
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
                        <Text style={style.infoRowContentText}>{props.appointment.phone}</Text>
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
                    <View style={style.infoRowContent}>
                        {/* TODO: add a calendar input here */}
                        <Text style={style.infoRowContentText}>CALENDAR INPUT HERE</Text>
                    </View>
                </View>
            </View>

            <View style={style.footerContainer}>
                <Button onPress={() => appointmentDelete(props.appointment._id.$oid)} buttonStyle={{ width: 100, backgroundColor: '#cb444a' }} titleStyle={{ fontSize: 10, fontWeight: 'bold' }} title='Supprimer' />
                <Button onPress={() => sendSms()} buttonStyle={{ width: 100 }} titleStyle={{ fontSize: 10, fontWeight: 'bold' }} title='SMS' />
                <Button onPress={() => appointmentStatusInvert(props.appointment)} buttonStyle={{ width: 100, backgroundColor: '#53a451' }} titleStyle={{ fontSize: 10, fontWeight: 'bold' }} title={STATUS} />
            </View>

        </View>
    )
}

export default AppointmentItem