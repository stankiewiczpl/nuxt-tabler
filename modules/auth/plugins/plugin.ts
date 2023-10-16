import { defineNuxtPlugin } from '#app'
export default defineNuxtPlugin(async () => {
  if (process.server) {
    const accessToken = useCookie('access_token')
    if (accessToken.value) {
      const { data } = await useApi('auth/user', {
        method: 'GET'
      })
      if (data.value) {
        useAuth().updateSession(data.value)
      }
    }
  }
})
