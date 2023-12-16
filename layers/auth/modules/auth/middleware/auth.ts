import { defineNuxtRouteMiddleware, navigateTo } from 'nuxt/app'
export default defineNuxtRouteMiddleware(() => {
  if (useAuth().authenticated.value) { return }
  return navigateTo('/auth/login')
})
