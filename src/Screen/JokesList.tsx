import React, { Component,useEffect } from 'react'
import { FlatList,SafeAreaView,StatusBar  } from 'react-native'
import { connect } from 'react-redux'
import JokesItem from '../Components/JokesComponent'
import { FETCH_JOKES } from '../store/ActionType'

type JokesInterface = {
    jokes:JokesList
  };

class JokesList extends Component<JokesInterface>{
    useEffect(() => {
        dispatch({ type: FETCH_JOKES })
    }, [dispatch])
    const keyExtractor = contact => contact.id.value.toString()
    const renderItem = ({ item }) => <JokesItem {...item} />
    render(): JSX.Element{
        return(
            <SafeAreaView style={styles.container}>
            <FlatList
            data={jokes}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
        />
        </SafeAreaView>
        );

    }

} 
const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },

  });
const mapStateToProps = ({ contactReducer }) => ({ ...contactReducer })
export default connect(mapStateToProps)(JokesList)





