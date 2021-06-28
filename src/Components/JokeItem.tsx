import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Joke} from '../types/Types';

interface Props {
  joke: Joke;
}

const JokeItem = ({joke}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{joke.joke}</Text>
    </View>
  );
};

export default JokeItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
});
