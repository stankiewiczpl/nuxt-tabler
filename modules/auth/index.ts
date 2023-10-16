import { createResolver, defineNuxtModule, addImports } from 'nuxt/kit'
import { addPlugin } from '@nuxt/kit'

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
  }
})
