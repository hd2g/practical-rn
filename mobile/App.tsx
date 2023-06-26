import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import { Button, Provider as ReactNativePaperProvider } from 'react-native-paper'
import Header from './components/molecules/Header'
import Baner from './components/molecules/Baner'
import Menus from './components/molecules/Menus'
import GlobalFeed from './components/molecules/GlobalFeed'
import Feeds from './components/molecules/Feeds'
import Feed, { Props as FeedProp } from './components/molecules/Feed'

export default function App() {
  const feeds: FeedProp[] = [
    {
      subject: 'foo',
      description: 'foo foo foo',
    },
    {
      subject: 'bar',
      description: 'bar bar bar',
    },
    {
      subject: 'baz',
      description: 'baz baz baz',
    },
  ]

  return (
    <ReactNativePaperProvider>
      <View style={styles.container}>
        <Header />
        <Baner />
        <Menus>
          <GlobalFeed />
        </Menus>
        <Feeds>
          {feeds.map(({ subject, description }) => {
            return (
              <Feed
                key={subject}
                subject={subject}
                description={description}
              />
            )
          })}
        </Feeds>
        <StatusBar style="auto" />
      </View>
    </ReactNativePaperProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
