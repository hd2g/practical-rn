import React, { useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

interface Props {
  name: string
  initialEnthusiasmLevel?: number
}

const Hello = ({ name, initialEnthusiasmLevel }: Props) => {
  const [enthusiasmLevel, setEnthusiasmLevel] = useState<number>(initialEnthusiasmLevel ?? 1)
  const getExclamationMarks = (numChars: number) => Array(numChars + 1).join('!')

  const onDecrement = () => {
    setEnthusiasmLevel(x => Math.max(1, x - 1))
  }
  const onIncrement = () => {
    setEnthusiasmLevel(x => x + 1)
  }

  return (
    <View style={styles.root}>
      <Text style={styles.greeting}>
        Hello{' '}
        {name + getExclamationMarks(enthusiasmLevel)}
      </Text>

      <View style={styles.buttons}>
        <Button title='decrement' onPress={onDecrement} color='red' />
        <Button title='increment' onPress={onIncrement} color='blue' />
      </View>
    </View>
  )
}

export default Hello

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    fontSize: 20,
  },
  greeting: {
    color: 'gray',
    fontWeight: 'bold',
    fontSize: 30,
  },
})
