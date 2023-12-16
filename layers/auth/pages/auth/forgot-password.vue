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
          {{ $t('Forgot Password') }}
        </h2>
        <VForm
          ref="formValidator"
          autocomplete="off"
          novalidate=""
          @submit="onSubmit"
        >
          <div class="mb-3">
            <VField
              v-slot="{ field, errors }"
              v-model="credentials.email"
              name="email"
              type="email"
            >
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
          <div class="form-footer">
            <button type="submit" class="btn btn-primary w-100" :disabled="!credentials.email">
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
import { useToast } from 'vue-toastification'
import { useApi } from '#imports'
definePageMeta({
  layout: 'auth',
  middleware: [
    'guest'
  ]
})
const email = ref(null)
const credentials = reactive({
  email: null
})
const formValidator = ref(null)

async function onSubmit (values: any) {
  console.log(values)
  const { data, error } = await useApi('auth/forgot-password', {
    body: values,
    method: 'POST'
  })

  if (error.value) {
    if (error.value.data.message) {
      useToast().warning(error.value.data.message, {
        timeout: 20000
      })
    } else {
      useToast().warning('W formularzu wystąpił błąd.', {
        timeout: 20000
      })
    }

    formValidator?.value?.setErrors(error.value?.data.errors)
  } else {
    useToast().success('Link do zmiany hasła został wysłany.', {
      timeout: 20000
    })
    email.value = null
  }
}

</script>
