import axios from 'axios'
import useSWR from 'swr'

const api = axios.create({
  baseURL: 'http://localhost:3001',
})

export function useReadFetch(url: string) {
  const { data, error } = useSWR(url, async (url) => {
    const { data } = await api.get(url)
    return data
  })

  return { data, error }
}
