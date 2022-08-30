
const apiKey = 'DsN6lKkTzNSqezjmcQT28VmImmrU7sDL' 


export default function getGifs({keyword = 'goku'} = {}) {
    
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=g&lang=es`
    return fetch(apiURL)
        .then(res => res.json())
        .then(response => {
            const {data} = response
            const gifs = data.map(element => {
                const { images, title, id } = element
                const { url } = images.downsized_medium
                return { title, id, url }
            })
            return gifs
        })
}