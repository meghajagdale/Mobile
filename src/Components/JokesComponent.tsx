import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const JokesComponent = ({
    jokeDescription: { title },
}) => {
    return (
        <View style={styles.item}>
                <Text style={styles.title}>{title}</Text>
        </View>
    )
}

export default JokesComponent
const styles = StyleSheet.create({
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 14,
    },
  });

