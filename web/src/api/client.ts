import createClient from 'openapi-fetch'

import type { paths } from './types/schema'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL as string
if (typeof API_BASE_URL !== 'string') {
  throw new Error('VITE_API_BASE_URL is not defined')
}

export const client = createClient<paths>({ baseUrl: API_BASE_URL })
