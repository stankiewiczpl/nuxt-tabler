<script setup lang="ts">
import { IconLogin2, IconKey } from '@tabler/icons-vue'
import LayoutNotifications from '~//components/layout/notifications.vue'
import ThemeSwitcher from '~//components/layout/ThemeSwitcher.vue'
const auth = useAuth()
const user = auth.session.value
</script>

<template>
  <header class="navbar navbar-expand-md d-print-none">
    <div class="container-xl">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbar-menu"
        aria-controls="navbar-menu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>
      <h1 class="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3">
        <nuxt-link to="/">
          <img src="/static/logo.svg" width="110" height="32" alt="Tabler" class="navbar-brand-image">
        </nuxt-link>
      </h1>
      <div class="navbar-nav flex-row order-md-last">
        <div v-if="!auth.authenticated.value" class="nav-item d-none d-md-flex me-3">
          <div class="btn-list">
            <nuxt-link :to="{ name: 'auth-login'}" class="btn">
              <IconKey class="icon me-2" />
              {{ $t('Sign in') }}
            </nuxt-link>
            <nuxt-link :to="{ name: 'auth-register'}" class="btn">
              <IconLogin2 class="icon me-2" />
              {{ $t('Sign up') }}
            </nuxt-link>
          </div>
        </div>
        <ThemeSwitcher />
        <LayoutNotifications v-if="auth.authenticated.value" />
        <div v-if="auth.authenticated.value" class="nav-item dropdown">
          <a href="#" class="nav-link d-flex lh-1 text-reset p-0" data-bs-toggle="dropdown" aria-label="Open user menu">
            <span class="avatar avatar-sm" :style="`background-image: url(${user.avatar})`" />
            <div class="d-none d-xl-block ps-2">
              <div>{{ user.name }}</div>
            </div>
          </a>
          <div class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
            <nuxt-link :to="{ name: 'account-profile'}" class="dropdown-item">
              Profile
            </nuxt-link>
            <div class="dropdown-divider" />
            <a href="#" class="dropdown-item" @click.prevent="auth.signOut()">Logout</a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>

</style>
