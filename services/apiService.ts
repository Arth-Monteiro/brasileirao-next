import { useReadFetch } from './httpService'

export function useApiGetYearData(year: string, summary = false) {
  const { data, error } = useReadFetch(`/${year}`)

  return {
    data: summary && data ? data[data.length - 1] : data,
    isLoading: !error && !data,
    isError: error,
  }
}
