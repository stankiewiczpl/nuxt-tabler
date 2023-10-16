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
          Login to your account
        </h2>
        <VForm
          ref="registerForm"
          :initial-values="credentials"
          autocomplete="off"
          novalidate=""
          @submit="onSubmit"
        >
          <div class="mb-3">
            <VField v-slot="{ field, errors }" name="name">
              <label class="form-label">Name</label>
              <input
                v-bind="field"
                type="text"
                class="form-control"
                placeholder="Enter your name"
                autocomplete="name"
                :class="{'is-invalid': !!errors.length }"
              >
              <VErrorMessage class="invalid-feedback" name="email" />
            </VField>
          </div>
          <div class="mb-3">
            <VField v-slot="{ field, errors }" name="email">
              <label class="form-label">Email address</label>
              <input
                v-bind="field"
                type="email"
                class="form-control"
                placeholder="your@email.com"
                autocomplete="email"
                :class="{'is-invalid': !!errors.length }"
              >
              <VErrorMessage class="invalid-feedback" name="email" />
            </VField>
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
          <div class="mb-3">
            <VField v-slot="{ field, errors }" type="checkbox" name="terms_of_use" :value="true">
              <div class="form-check">
                <input type="checkbox" class="form-check-input" v-bind="field" :value="true" :class="{'is-invalid': !!errors.length }">
                <span class="form-check-label">Agree the <a href="#" tabindex="-1">terms and policy</a>.</span>
                <VErrorMessage class="invalid-feedback" name="terms_of_use" />
              </div>
            </VField>
          </div>
          <div class="form-footer">
            <button type="submit" class="btn btn-primary w-100">
              Sign in
            </button>
          </div>
        </VForm>
      </div>
      <div class="hr-text">
        or
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col">
            <a href="#" class="btn w-100">
              <IconBrandFacebook class="icon text-facebook" />
              Login with Facebook
            </a>
          </div>
          <div class="col">
            <a href="#" class="btn w-100">
              <IconBrandGoogle class="icon text-google" />
              Login with Google
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center text-secondary mt-3">
      Don't have account yet? <nuxt-link :to="{ name: 'auth-login' }">
        Zaloguj się
      </nuxt-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { IconBrandFacebook, IconBrandGoogle } from '@tabler/icons-vue'
import { useApi } from '#imports'
definePageMeta({
  layout: 'auth'
})
const credentials = reactive({
  name: 'John Doe',
  email: 'stankiewicz.opole@gmail.com',
  password: 'Secret_!',
  password_confirmation: 'Secret_!',
  terms_of_use: false
})
const registerForm = ref(null)
async function onSubmit (payload: any) {
  const { data, error } = await useApi('auth/register', {
    body: payload,
    method: 'POST'
  })
  if (error.value) {
    registerForm?.value?.setErrors(error.value?.data.errors)
  }
}
</script>
