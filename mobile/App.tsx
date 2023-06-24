import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import Hello from './Hello'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <Hello name='Expo' initialEnthusiasmLevel={10} />
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
