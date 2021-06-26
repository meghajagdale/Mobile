import React, { useCallback, useEffect, useState } from 'react'
import {
    StyleSheet,
    FlatList,
    SafeAreaView,
    View,
    ActivityIndicator
} from 'react-native'
import JokeCell from '../Components/JokeItem'
import { fetchJokes } from '../Service/JokeService'

export interface Joke {
    id: string
    joke: string
}

const Jokes = () => {
    const [jokes, setJokes] = useState<Array<Joke>>([])
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            const response = await fetchJokes(page)
            setJokes(jokes.concat(response))
            setLoading(false)
        }
        fetchData()
    }, [page])

    const keyExtractor = (joke: Joke, index: number) => `${joke.id}${index}`
    const renderItem = useCallback(
        ({ item }: { item: Joke }) => <JokeCell joke={item} />,
        []
    )
    const onMomentumScrollEnd = () => {
        setPage(page + 1)
    }

    return (
        <SafeAreaView style={styles.flex}>
            <View style={styles.flex}>
                <FlatList<Joke>
                    style={styles.flex}
                    data={jokes}
                    keyExtractor={keyExtractor}
                    renderItem={renderItem}
                    onEndReachedThreshold={0}
                    onMomentumScrollEnd={onMomentumScrollEnd}
                />
                {loading && (
                    <View style={styles.overlay}>
                        <ActivityIndicator color="white" size="large" />
                    </View>
                )}
            </View>
        </SafeAreaView>
    )
}

export default Jokes

const styles = StyleSheet.create({
    flex: {
        flex: 1
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)'
    }
})
