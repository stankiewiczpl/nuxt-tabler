import type { UseFetchOptions } from 'nuxt/app'
import { defu } from 'defu'

export function useApi<T> (url: string, options: UseFetchOptions<T> = {}) {
  const accessToken = useState('auth:access_token', () => useCookie('access_token').value)
  const config = useRuntimeConfig()
  const defaults = {
    baseURL: config.public.apiUrl,
    headers: accessToken.value
      ? { Authorization: `Bearer ${accessToken.value}` }
      : {}
  }

  const params = defu(options, defaults)

  return useFetch(url, params)
}
