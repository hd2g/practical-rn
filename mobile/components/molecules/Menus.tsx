import React, { ReactNode } from 'react'
import { StyleSheet, View } from 'react-native'
import { Divider } from 'react-native-paper'

interface Props {
  children: ReactNode
}

export default function Menus({ children }: Props) {
  return (
    <View style={styles.container}>
      {React.Children.map(children, child => {
        return (
          <View style={styles.menu}>
            {child}
          </View>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    marginHorizontal: 8,
    borderBottomColor: '#D3D3D3',
    borderBottomWidth: 1,
    maxHeight: 40,
  },
  menu: {
    borderBottomWidth: 1,
    borderBottomColor: 'green',
  },
})
