import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Dashboard from './Components/Dashboard/Dashboard'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEBE51',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
})

export default function App() {
  return (
    <View style={styles.container}>
      <Dashboard />
    </View>
  );
}


