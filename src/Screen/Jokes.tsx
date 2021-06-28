import React, {useCallback, useEffect, useReducer} from 'react';
import {START_FETCHING, END_FECTCHING, LOAD_MORE} from '../Action/JokesAction';
import {
  StyleSheet,
  FlatList,
  SafeAreaView,
  View,
  ActivityIndicator,
} from 'react-native';
import JokeCell from '../Components/JokeItem';
import {fetchJokes} from '../Service/JokeService';

export interface Joke {
  id: string;
  joke: string;
}

const initialState = {
  jokes: [] as Joke[],
  page: 1,
  loading: false,
};

export interface intialStateType {
  jokes: Array<Joke>;
  page: number;
  loading: boolean;
}
export interface actionType {
  type: string;
  payload?: Array<Joke>;
}

const reducer = (state: intialStateType, action: actionType) => {
  switch (action.type) {
    case START_FETCHING:
      return {...state, loading: true};
    case END_FECTCHING:
      return {
        ...state,
        loading: false,
        jokes: state.jokes.concat(action.payload),
      };
    case LOAD_MORE:
      return {
        ...state,
        page: state.page + 1,
      };
    default:
      throw new Error();
  }
};

const Jokes = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

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
  const handleLoadMore=()=>{
    if(!state.loading){
      dispatch({type: LOAD_MORE});
    }
  }

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
