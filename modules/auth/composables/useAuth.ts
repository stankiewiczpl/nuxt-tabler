import { computed, ComputedRef, readonly, watch } from 'vue'
import { produce } from 'immer'
import type { User } from '~/types/User'
export const useAuth = () => {
  const accessTokenCookie = useCookie('access_token', {
    maxAge: 30 * 24 * 60 * 60 * 1000
  })
  const accessToken = useState('auth:access_token', () => accessTokenCookie.value)
  const authenticated = useState('auth:authenticated', () => false)

  const session = useState('auth:session', () => null)
  const user: ComputedRef<null> = computed(() => session.value ?? null)
  const updateSession = (u: ((draft: null) => void | null | undefined) | null) => {
    session.value = typeof u === 'function' ? produce(session.value, u) : u
    authenticated.value = u !== null
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
    accessToken.value = null
    await useRouter().push({ name: routeName })
  }
  return {
    authenticated,
    accessToken,
    session: readonly(session),
    user,
    updateSession,
    signIn,
    signOut
  }
}
