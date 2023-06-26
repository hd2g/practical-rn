import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'

export default function Baner() {
  return (
    <View style={styles.container}>
      <Text style={styles.subject}>Conduit</Text>
      <Text style={styles.description}>A place to share your knowledge.</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#32CD32',
    maxHeight: '16%',
    borderTopWidth: 4,
    borderTopColor: '#3CB371',
    borderBottomWidth: 4,
    borderBottomColor: '#3CB371',
  },
  subject: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
  },
  description: {
    color: 'white',
  },
})
