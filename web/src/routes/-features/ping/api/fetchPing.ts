import { client } from '@/api/client'

export const fetchPing = async () => {
  const { data, error } = await client.GET('/ping')
  if (error) {
    throw new Error(error)
  }
  return data
}
