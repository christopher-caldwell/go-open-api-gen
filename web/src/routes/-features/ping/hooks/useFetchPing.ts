import { useQuery } from '@tanstack/react-query'
import { fetchPing } from '../api'

export const useFetchPing = () => {
  const query = useQuery({ queryKey: ['todos'], queryFn: fetchPing })

  return query
}
