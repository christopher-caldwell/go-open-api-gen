import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { HomePage } from './routes'

const queryClient = new QueryClient()

const rootElement = document.getElementById('root')
if (!rootElement) {
  throw new Error('No root element')
}
createRoot(rootElement).render(
  <StrictMode>
     <QueryClientProvider client={queryClient}>
        <HomePage />
     </QueryClientProvider>
  </StrictMode>,
)
