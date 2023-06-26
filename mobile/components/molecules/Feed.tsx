import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Text } from 'react-native-paper'

export interface Props {
  subject: string
  description: string
}

export default function Feed({ subject, description }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.subjectContainer}>
        <Text style={styles.subject}>{subject}</Text>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>{description}</Text>
      </View>
      <View style={styles.visitArticleContainer}>
        <Text style={styles.visitArticle}>Read more...</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    marginHorizontal: 10,
  },
  subjectContainer: {
    alignItems: 'flex-start',
  },
  subject: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  descriptionContainer: {
    alignItems: 'flex-start',
  },
  description: {
    color: 'gray',
  },
  visitArticleContainer: {
    marginVertical: 12,
  },
  visitArticle: {
    color: 'gray',
    fontSize: 10,
  },
})
