import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import Dashboard from './Components/Dashboard/Dashboard.js'
import Test from './Components/Test.js'

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
        </ScrollView>
    );
}


