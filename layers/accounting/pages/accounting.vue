<template>
  <div class="container-xl">
    <div class="row">
      <div class="col">
        <div class="card">
          <div class="card-header">
            <ul class="nav nav-tabs card-header-tabs" data-bs-toggle="tabs" role="tablist">
              <li class="nav-item" role="presentation">
                <nuxt-link class="nav-link" exact-active-class="active" to="/accounting">
                  Faktury
                </nuxt-link>
              </li>
              <li class="nav-item" role="presentation">
                <nuxt-link class="nav-link" exact-active-class="active" to="/accounting/files">
                  Pliki
                </nuxt-link>
              </li>
              <li class="nav-item" role="presentation">
                <nuxt-link class="nav-link" exact-active-class="active" to="/accounting/contractors">
                  Kontrahenci
                </nuxt-link>
              </li>
            </ul>
          </div>
          <div class="card-body">
            <div class="tab-content">
              <NuxtPage :page-key="route => route.fullPath" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>
