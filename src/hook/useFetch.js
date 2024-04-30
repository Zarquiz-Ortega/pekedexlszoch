import { useState } from "react"
import axios from 'axios'

const useFetch = () => {

    const [apiData, setApiData] = useState()
    const [isLoading, setIsLOading] = useState(true)

    const getApi = url => {
        axios.get(url)
            .then(res => setApiData(res.data))
            .catch(err => console.log(err))
            .finally(() =>  setIsLOading(false))
    }

    const getType = url => {
        axios.get(url)
            .then(res => setApiData({
                results: res.data.pokemon.map(poke => poke.pokemon),
            }))
            .catch(err => console.log(err))
            .finally(() =>  setIsLOading(false))
    }

    return [apiData, getApi, getType, isLoading]

}

export default useFetch