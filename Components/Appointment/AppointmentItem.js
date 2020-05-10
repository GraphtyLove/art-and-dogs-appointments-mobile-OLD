import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Icon } from 'react-native-elements'

// Style:
const style = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderRadius: 3,
        width: '90%',
        height: 380,
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
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
    },
    infoRowTitle: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        width: '50%',
    },
    infoRowTitleText: {
        fontSize: 10,
        marginLeft: 5,
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
        justifyContent: 'center',
    },
    titleWarp: {
        flexDirection: 'row',
        alignItems: 'center',
    }

})


const AppointmentItem = (props) => {
    return (
        <View style={style.container}>

            <View style={style.headerContainer}>
                <Text style={style.infoRowContentTextBold}> {props.appointment.date} </Text>
                <Text style={style.infoRowContentTextBold}> Status: O </Text>
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
                        <Text style={style.infoRowContentText}>{props.appointment.remarque}</Text>
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
                <Text>Button list. Not implemented yet.</Text>
            </View>

        </View>
    )
}

export default AppointmentItem