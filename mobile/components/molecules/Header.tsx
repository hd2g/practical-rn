import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Title, Text, Button } from 'react-native-paper'

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Title style={styles.title}>Conduit</Title>
      </View>
      <View style={styles.rightContainer}>
        <Button style={styles.homeContainer}>
          <Text style={styles.homeText}>Home</Text>
        </Button>
        <Button style={styles.signInContainer}>
          <Text style={styles.signInText}>Sign in</Text>
        </Button>
        <Button style={styles.signOutContainer}>
          <Text style={styles.signOutText}>Sign out</Text>
        </Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    maxHeight: '6%',
    marginHorizontal: 8,
  },
  leftContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  title: {
    flex: 1,
    marginLeft: 10,
    color: 'green',
  },
  homeContainer: {
    alignItems: 'center',
  },
  homeText: {
    fontWeight: 'bold',
  },
  signInContainer: {
    alignItems: 'center',
  },
  signInText: {
    fontWeight: 'bold',
    color: 'gray',
    opacity: 0.7,
  },
  signOutContainer: {
    alignItems: 'center'
  },
  signOutText: {
    fontWeight: 'bold',
    color: 'gray',
    opacity: 0.7,
  },
})
