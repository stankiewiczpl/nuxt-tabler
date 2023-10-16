import { computed, ComputedRef, readonly, watch } from 'vue'
import { produce } from 'immer'
import type { User } from '~/types/User'
export const useAuth = () => {
  const accessTokenCookie = useCookie('access_token', {
    maxAge: 30 * 24 * 60 * 60 * 1000
  })
  const accessToken = useState('auth:access_token', () => accessTokenCookie.value)

  const session = useState('auth:session', () => null)
  const status = useState('auth:status', () => false)
  const user: ComputedRef<null> = computed(() => session.value ?? null)

  const isLoggedIn = () => {
    return status.value
  }
  const updateSession = (u: ((draft: null) => void | null | undefined) | null) => {
    session.value = typeof u === 'function' ? produce(session.value, u) : u
    status.value = true
  }

  const signIn = async (payload: any) => {
    accessTokenCookie.value = payload.access_token
    accessToken.value = payload.access_token
    const { data, error } = await useApi('auth/user', {
      method: 'GET'
    })
    if (data.value) {
      updateSession(data.value)
    }
    return new Promise((resolve) => {
      resolve(data.value)
    })
  }
  const signOut = async (routeName :string = 'auth-login') => {
    await useApi('auth/logout', {
      method: 'POST'
    })
    accessTokenCookie.value = null
    updateSession(null)
    status.value = false
    accessToken.value = null
    await useRouter().push({ name: routeName })
  }
  return {
    accessToken,
    isLoggedIn,
    session: readonly(session),
    user,
    updateSession,
    signIn,
    signOut
  }
}
