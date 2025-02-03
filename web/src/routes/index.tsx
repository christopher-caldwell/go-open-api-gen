import { FC } from 'react'

import { FetchPing } from './-features/ping'

export const HomePage: FC = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <FetchPing />
    </div>
  )
}
