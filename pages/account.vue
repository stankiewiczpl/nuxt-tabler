<template>
  <div class="container-xl">
    <div class="card">
      <div class="row g-0">
        <div class="col-12 col-md-3 border-end">
          <div class="card-body">
            <div class="list-group list-group-transparent">
              <nuxt-link to="/account/profile" class="list-group-item list-group-item-action d-flex align-items-center">
                {{ $t('My Account') }}
              </nuxt-link>
              <nuxt-link to="/account/notifications" class="list-group-item list-group-item-action d-flex align-items-center">
                {{ $t('My Notifications') }}
              </nuxt-link>
              <nuxt-link href="/account/plans" class="list-group-item list-group-item-action d-flex align-items-center">
                {{ $t('Plans') }}
              </nuxt-link>
              <nuxt-link to="/account/billing" class="list-group-item list-group-item-action d-flex align-items-center">
                {{ $t('Billing & Invoices') }}
              </nuxt-link>
            </div>
          </div>
        </div>
        <NuxtPage :page-key="route => route.fullPath" />
      </div>
    </div>
  </div>
</template>
