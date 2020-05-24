import React, { useState } from 'react';
import { StyleSheet, ScrollView, Button } from 'react-native';
import Dashboard from './Components/Dashboard/Dashboard.js'


// Notifs
import { LocalNotification } from './services/LocalPushController'
import RemotePushController from './services/RemotePushController'

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
})

export default function App() {
    return (
        <ScrollView contentContainerStyle={styles.container} style={{ flex: 1, backgroundColor: '#FEBE51', }}>
            <Dashboard />
            <RemotePushController />
        </ScrollView>
    );
}


