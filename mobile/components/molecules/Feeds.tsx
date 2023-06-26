import React, { ReactNode } from 'react'
import { StyleSheet, View } from 'react-native'

interface Props {
  children: ReactNode
}

export default function Feeds({ children }: Props) {
  return (
    <View style={styles.container}>
      {React.Children.map(children, child => {
        return (
          <View style={styles.feed}>
            {child}
          </View>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
  },
  feed: {
    borderBottomColor: '#D3D3D3',
    borderBottomWidth: 1,
  },
})
