import { createResolver, defineNuxtModule, addImports, addRouteMiddleware } from 'nuxt/kit'
import kit, { addPlugin } from '@nuxt/kit'

const NAME = 'nuxt-jwt'
const configKey = 'nuxtJwt'
export default defineNuxtModule({
  meta: {
    name: NAME,
    configKey
  },
  setup () {
    const { resolve } = createResolver(import.meta.url)
    addImports([{ name: 'useAuth', from: resolve('./composables/useAuth') }])
    addPlugin(resolve('./plugins/plugin'))
    addRouteMiddleware({ name: 'auth', path: resolve('./middleware/auth') })
    addRouteMiddleware({ name: 'guest', path: resolve('./middleware/guest') })
  }
})
