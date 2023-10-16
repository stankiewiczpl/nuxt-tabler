export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/color-mode',
    '@vee-validate/nuxt',
    '@nuxtjs/i18n'
  ],
  runtimeConfig: {
    apiUrl: process.env.NUXT_API_URL,
    public: {
      apiUrl: process.env.NUXT_API_URL
    }
  },
  css: ['~/assets/styles/main.scss'],
  colorMode: {
    preference: 'system',
    fallback: 'light',
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: 'theme-',
    classSuffix: '',
    storageKey: 'color-mode',
    dataValue: 'bs-theme'
  },
  veeValidate: {
    // disable or enable auto imports
    autoImports: true,
    // Use different names for components
    componentNames: {
      Form: 'VForm',
      Field: 'VField',
      FieldArray: 'VFieldArray',
      ErrorMessage: 'VErrorMessage'
    }
  },
  i18n: {
    vueI18n: '~/config/i18n.config.ts'
  }
})
