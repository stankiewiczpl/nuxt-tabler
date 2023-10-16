<script setup lang="ts">
import { IconMoon, IconSun } from '@tabler/icons-vue'
import LayoutNotifications from '~/components/layout/notifications.vue'
const auth = useAuth()
</script>

<template>
  <div class="d-none d-md-flex">
    <a
      href="#"
      class="nav-link px-0 hide-dark"
      data-bs-toggle="tooltip"
      data-bs-placement="bottom"
      :data-bs-original-title="$t('Enable dark mode')"
      @click.prevent="$colorMode.preference = 'dark'"
    >
      <IconMoon class="icon" />
    </a>
    <a
      href="#"
      class="nav-link px-0 hide-light"
      data-bs-toggle="tooltip"
      data-bs-placement="bottom"
      :data-bs-original-title="$t('Enable light mode')"
      @click.prevent="$colorMode.preference = 'light'"
    >
      <IconSun class="icon" />
    </a>
  </div>
</template>

<style scoped>

</style>
