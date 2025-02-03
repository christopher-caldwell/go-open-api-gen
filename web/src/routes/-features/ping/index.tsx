import { FC } from 'react'
import { useFetchPing } from './hooks/useFetchPing'

export const FetchPing: FC = () => {
  const { data, isLoading, error } = useFetchPing()

  if (isLoading) {
    return <p>Loading..</p>
  }

  if (error) {
    return <p style={{ color: 'red' }}>Error: {error.message}</p>
  }

  if (!data) {
    return <p>No data</p>
  }

  return (
    <div>
      <h2>
        Response from <code>/ping</code>:
      </h2>
      <p>{data.ping}</p>
    </div>
  )
}
