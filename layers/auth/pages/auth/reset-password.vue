<template>
  <div class="container container-tight py-4">
    <div class="text-center mb-4">
      <nuxt-link :to="{ name: 'index' }" class="navbar-brand navbar-brand-autodark">
        <img src="/static/logo.svg" width="110" height="32" alt="Tabler" class="navbar-brand-image">
      </nuxt-link>
    </div>

    <div class="card card-md">
      <div class="card-body">
        <h2 class="h2 text-center mb-4">
          {{ $t('Reset Password') }}
        </h2>
        <VForm
          ref="resetForm"
          :initial-values="credentials"
          autocomplete="off"
          novalidate=""
          @submit="onSubmit"
        >
          <div class="mb-3">
            <VField v-slot="{ field, errors }" name="email">
              <label class="form-label">{{ $t('Email address') }}</label>
              <input
                v-bind="field"
                type="email"
                class="form-control"
                placeholder="your@email.com"
                autocomplete="email"
                :class="{'is-invalid': !!errors.length }"
              >
            </VField>
            <VErrorMessage class="invalid-feedback" name="email" />
          </div>
          <div class="mb-3">
            <VField v-slot="{ field, errors }" name="password">
              <label class="form-label">Password</label>
              <input
                v-bind="field"
                type="password"
                class="form-control"
                placeholder="*************"
                autocomplete="password"
                :class="{'is-invalid': !!errors.length }"
              >
              <VErrorMessage class="invalid-feedback" name="password" />
            </VField>
          </div>
          <div class="mb-3">
            <VField v-slot="{ field, errors }" name="password_confirmation">
              <label class="form-label">Password confirmation</label>
              <input
                v-bind="field"
                type="password"
                class="form-control"
                placeholder="*************"
                autocomplete="password"
                :class="{'is-invalid': !!errors.length }"
              >
              <VErrorMessage class="invalid-feedback" name="password_confirmation" />
            </VField>
          </div>
          <div class="form-footer">
            <button type="submit" class="btn btn-primary w-100">
              {{ $t('Send') }}
            </button>
          </div>
        </VForm>
      </div>
    </div>
    <div class="text-center text-secondary mt-3">
      <nuxt-link :to="{ name: 'auth-login'}">
        {{ $t('Back to login page') }}
      </nuxt-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useApi } from '#imports'
const route = useRoute()
definePageMeta({
  layout: 'auth',
  middleware: [
    'guest'
  ]
})
const credentials = reactive({
  email: route.query.email,
  password: null,
  password_confirmation: null
})
const resetForm = ref(null)
async function onSubmit (values: any) {
  const { data, error } = await useApi('auth/reset-password', {
    body: {
      email: values.email,
      password: values.password,
      password_confirmation: values.password_confirmation,
      token: route.query.token
    },
    method: 'POST'
  })

  if (error.value) {
    resetForm?.value?.setErrors(error.value?.data.errors)
  }
  console.log(data.value)

  // if (data.value) {
  //   useAuth().signIn(data.value).then(() => {
  //     router.push({ path: '/' })
  //   })
  // }
}

</script>
