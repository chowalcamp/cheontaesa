import axios from 'axios'
import { BASE_URL } from '../../config'

export const getNewsDetail = async (id: number) => {
    const response = await axios.get(`${BASE_URL}/news/${id}`)
    return response.data
  }