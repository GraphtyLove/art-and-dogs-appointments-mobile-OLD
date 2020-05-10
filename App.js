import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import Dashboard from './Components/Dashboard/Dashboard.js'
import Test from './Components/Test.js'

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FEBE51',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
})

export default function App() {
    return (
        <ScrollView contentContainerStyle={styles.container} style={{ flex: 1 }}>
            <Dashboard />
        </ScrollView>
    );
}


