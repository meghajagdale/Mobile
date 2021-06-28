import React, {useCallback, useEffect, useReducer} from 'react';
import {JokeReducer} from '../reducer/JokeReducer';
import {Joke} from '../types/Types';
import {START_FETCHING, END_FECTCHING, LOAD_MORE} from '../action/JokesAction';
import {
  StyleSheet,
  FlatList,
  SafeAreaView,
  View,
  ActivityIndicator,
} from 'react-native';
import JokeCell from '../components/JokeItem';
import {fetchJokes} from '../service/JokeService';

const initialState = {
  jokes: [] as Joke[],
  page: 1,
  loading: false,
};

const Jokes = () => {
  const [state, dispatch] = useReducer(JokeReducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      dispatch({type: START_FETCHING});
      const response = await fetchJokes(state.page);
      dispatch({type: END_FECTCHING, payload: response});
    };
    fetchData();
  }, [state.page]);

  const keyExtractor = (joke: Joke, index: number) => `${joke.id}${index}`;

  const renderItem = useCallback(
    ({item}: {item: Joke}) => <JokeCell joke={item} />,
    [],
  );
  const handleLoadMore = () => {
    if (!state.loading) {
      dispatch({type: LOAD_MORE});
    }
  };

  return (
    <SafeAreaView style={styles.flex}>
      <View style={styles.flex}>
        <FlatList<Joke>
          style={styles.flex}
          data={state.jokes}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          onEndReachedThreshold={0}
          onEndReached={handleLoadMore}
        />
        {state.loading && (
          <View style={styles.overlay}>
            <ActivityIndicator color="white" size="large" />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Jokes;

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});
