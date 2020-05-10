import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

// Style:
const style = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderRadius: 3,
        width: '90%',
        height: 500,
        justifyContent: 'space-around',
        marginBottom: 30,
    },
    headerContainer: {
        flex: 2,
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
        flex: 10,
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
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
    },
    infoRowTitle: {
        width: '50%',
    },
    infoRowTitleText: {
        fontSize: 10,
    },
    infoRowContentText: {
        fontSize: 10,
    },
    infoRowContentTextBold: {
        fontSize: 10,
        fontWeight: 'bold',
    },
    infoRowContent: {
        width: '50%',
    }

})


const AppointmentItem = (props: any) => {
    return (
        <View style={style.container}>

            <View style={style.headerContainer}>
                <Text style={style.infoRowContentText}> {props.appointment.date} </Text>
                <Text style={style.infoRowContentText}> Status: O </Text>
            </View>

            <View style={style.mainContainer}>
                <View style={style.infoRow}>
                    <View style={style.infoRowTitle}>
                        <Text style={style.infoRowTitleText}>Client</Text>
                    </View>
                    <View style={style.infoRowContent}>
                        <Text style={style.infoRowContentTextBold}>{props.appointment.firstName} {props.appointment.lastName}</Text>
                        <Text style={style.infoRowContentText}>{props.appointment.phone}</Text>
                    </View>
                </View>
                <View style={style.infoRow}>
                    <View style={style.infoRowTitle}>
                        <Text style={style.infoRowTitleText}>Chien</Text>
                    </View>
                    <View style={style.infoRowContent}>
                        <Text style={style.infoRowContentTextBold}>{props.appointment.dogName}</Text>
                        <Text style={style.infoRowContentText}>{props.appointment.dogBreed}</Text>
                    </View>
                </View>
                <View style={style.infoRow}>
                    <View style={style.infoRowTitle}>
                        <Text style={style.infoRowTitleText}>Remarque du client</Text>
                    </View>
                    <View style={style.infoRowContent}>
                        <Text style={style.infoRowContentText}>{props.appointment.remarque}</Text>
                    </View>
                </View>
                <View style={style.infoRow}>
                    <View style={style.infoRowTitle}>
                        <Text style={style.infoRowTitleText}>Note personnelle</Text>
                    </View>
                    <View style={style.infoRowContent}>
                        <Text style={style.infoRowContentText}>{props.appointment.note} OK</Text>
                    </View>
                </View >
                <View style={style.infoRow}>
                    <View style={style.infoRowTitle}>
                        <Text style={style.infoRowTitleText}>Rendez-vous</Text>
                    </View>
                    <View style={style.infoRowContent}>
                        {/* TODO: add a calendar input here */}
                        <Text style={style.infoRowContentText}>CALENDAR INPUT HERE</Text>
                    </View>
                </View>
            </View>

            <View style={style.footerContainer}>
                <Text>Button list. Not implemented yet.</Text>
            </View>

        </View>
    )
}

export default AppointmentItem