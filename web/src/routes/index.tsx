import { FC } from 'react'
import { createFileRoute } from '@tanstack/react-router'

import { DefaultErrorDisplay } from '@/components'
import { FetchPing } from './-features/ping'

const HomePage: FC = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <FetchPing />
    </div>
  )
}

export const Route = createFileRoute('/')({
  // loader: ({ context: { queryClient }, params: { uuid } }) => {
  //   return queryClient.ensureQueryData(getQueryOptions(uuid))
  // },
  errorComponent: DefaultErrorDisplay,
  component: HomePage,
})