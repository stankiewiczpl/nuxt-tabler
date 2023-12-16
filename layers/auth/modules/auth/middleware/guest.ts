import { defineNuxtRouteMiddleware, navigateTo } from 'nuxt/app'
import { useAuth } from '../composables/useAuth'

export default defineNuxtRouteMiddleware(() => {
  if (useAuth().authenticated.value) { return navigateTo('/') }
})
