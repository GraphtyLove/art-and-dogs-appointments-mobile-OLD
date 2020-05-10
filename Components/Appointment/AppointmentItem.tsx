import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

// Style:
const style = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderRadius: 3,
        width: '60%',
        justifyContent: 'space-around',
    },
    headerContainer: {
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f7f7f7',
        borderBottomColor: 'rgba(0, 0, 0, .125)',
        paddingHorizontal: '1.25rem',
        justifyContent: 'space-between',
    },
    bold: {
        fontWeight: 'bold',
    },
    mainContainer: {
        flex: 10,
        alignContent: 'center',
        paddingHorizontal: '1.25rem',
        paddingVertical: 10,
    },
    infoRow: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: 20,
    },
    footerContainer: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',

        backgroundColor: 'red',
    }
})


const AppointmentItem = (props: any) => {
    return (
        <View style={style.container}>

            <View style={style.headerContainer}>
                <Text style={style.bold}> {props.appointment.date} </Text>
                <Text style={style.bold}> Status: O </Text>
            </View>

            <View style={style.mainContainer}>
                <View style={style.infoRow}>
                    <Text>{props.appointment.firstName} {props.appointment.lastName}</Text>
                </View>
                <View style={style.infoRow}>
                    <Text>{props.appointment.phone}</Text>
                </View>
                <View style={style.infoRow}>
                    <Text>{props.appointment.dogName}</Text>
                </View>
                <View style={style.infoRow}>
                    <Text>{props.appointment.dogBreed}</Text>
                </View>
                <View style={style.infoRow}>
                    <Text>{props.appointment.remarque}</Text>
                </View>
                <View>
                    <Text>{props.appointment.note}</Text>
                </View>
            </View>

            <View style={style.footerContainer}>
                <Text>Button list. Not implemented yet.</Text>
            </View>

        </View>
    )
}

export default AppointmentItem