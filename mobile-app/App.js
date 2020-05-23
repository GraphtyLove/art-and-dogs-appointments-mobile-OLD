import React from 'react';
import { StyleSheet, ScrollView, Button } from 'react-native';
import Dashboard from './Components/Dashboard/Dashboard.js'
import { LocalNotification } from './services/LocalPushController'

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
})

export default function App() {
    return (
        <ScrollView contentContainerStyle={styles.container} style={{ flex: 1, backgroundColor: '#FEBE51', }}>
            {/* <Dashboard /> */}
            <Button onPress={() => LocalNotification()} title="press to notif" />
        </ScrollView>
    );
}


