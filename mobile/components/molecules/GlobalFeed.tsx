import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Text } from 'react-native-paper'

export default function GlobalFeed() {
  return (
    <Button>
      <Text style={styles.text}>
        Global Feed
      </Text>
    </Button>
  )
}

const styles = StyleSheet.create({
  text: {
    color: 'green',
  },
})
