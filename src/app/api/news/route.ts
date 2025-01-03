import axios from 'axios'
import { BASE_URL } from '../config'

export const getNews = async () => {
    const response = await axios.get(`${BASE_URL}/news`)
    return response.data
}


