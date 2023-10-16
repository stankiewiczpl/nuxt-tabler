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
          ref="loginForm"
          :initial-values="credentials"
          autocomplete="off"
          novalidate=""
          @submit="onSubmit"
        >
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
            </VField>
            <VErrorMessage class="invalid-feedback" name="email" />
          </div>
          <div class="mb-2">
            <VField v-slot="{ field, errors }" name="password">
              <label class="form-label">
                Password
                <span class="form-label-description">
                  <a href="#">I forgot password</a>
                </span>
              </label>
              <div class="input-group input-group-flat">
                <input
                  v-bind="field"
                  name="password"
                  type="password"
                  class="form-control"
                  placeholder="Your password"
                  autocomplete="current-password"
                  :class="{'is-invalid': !!errors.length }"
                >
                <span class="input-group-text" :class="{'border-danger': !!errors.length }">
                  <a href="#" class="link-secondary" data-bs-toggle="tooltip" aria-label="Show password" data-bs-original-title="Show password">
                    <IconEye :size="24" :stroke-width="2" class="icon" />
                  </a>
                </span>
                <VErrorMessage class="invalid-feedback" name="password" />
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
      Don't have account yet? <nuxt-link :to="{ name: 'auth-register'}">
        Rejestracja
      </nuxt-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { IconBrandFacebook, IconBrandGoogle, IconEye } from '@tabler/icons-vue'
import { useApi } from '~/composables/useApi'
const router = useRouter()
definePageMeta({
  layout: 'auth',
  middleware: [
    'guest'
  ]
})
const credentials = reactive({
  email: null,
  password: null
})
const loginForm = ref(null)
async function onSubmit (values: any) {
  const { data, error } = await useApi('auth/login', {
    body: values,
    method: 'POST'
  })

  if (error.value) {
    loginForm?.value?.setErrors(error.value?.data.errors)
  }

  if (data.value) {
    useAuth().signIn(data.value).then(() => {
      router.push({ path: '/' })
    })
  }
}

</script>
