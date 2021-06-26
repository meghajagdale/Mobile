export const fetchJokes = async (page = 1) => {
    const response = await fetch(
        `https://icanhazdadjoke.com/search?page=${page}`,
        {
            method: 'GET',
            headers: {
                Accept: 'application/json'
            }
        }
    )
    const json = await response.json()
    return json.results
}
