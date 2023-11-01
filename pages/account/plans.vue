<script setup lang="ts">
definePageMeta({
  middleware: [
    'auth'
  ]
})
</script>

<template>
  <div class="col-12 col-md-9 d-flex flex-column">
    <div class="card-body">
      <div class="row row-cards">
        <div class="col-sm-6 col-lg-4">
          <div class="card card-md">
            <div class="card-body text-center">
              <div class="text-uppercase text-secondary font-weight-medium">Free</div>
              <div class="display-5 fw-bold my-3">$0</div>
              <ul class="list-unstyled lh-lg">
                <li><strong>3</strong> Users</li>
                <li>
                  <!-- Download SVG icon from http://tabler-icons.io/i/check -->
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon me-1 text-success" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M5 12l5 5l10 -10"></path></svg>
                  Sharing Tools
                </li>
                <li>
                  <!-- Download SVG icon from http://tabler-icons.io/i/x -->
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon me-1 text-danger" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M18 6l-12 12"></path><path d="M6 6l12 12"></path></svg>
                  Design Tools
                </li>
                <li>
                  <!-- Download SVG icon from http://tabler-icons.io/i/x -->
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon me-1 text-danger" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M18 6l-12 12"></path><path d="M6 6l12 12"></path></svg>
                  Private Messages
                </li>
                <li>
                  <!-- Download SVG icon from http://tabler-icons.io/i/x -->
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon me-1 text-danger" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M18 6l-12 12"></path><path d="M6 6l12 12"></path></svg>
                  Twitter API
                </li>
              </ul>
              <div class="text-center mt-4">
                <a href="#" class="btn w-100">Choose plan</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-4">
          <div class="card card-md">
            <div class="ribbon ribbon-top ribbon-bookmark bg-green">
              <!-- Download SVG icon from http://tabler-icons.io/i/star -->
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-filled" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path></svg>
            </div>
            <div class="card-body text-center">
              <div class="text-uppercase text-secondary font-weight-medium">Premium</div>
              <div class="display-5 fw-bold my-3">$49</div>
              <ul class="list-unstyled lh-lg">
                <li><strong>10</strong> Users</li>
                <li>
                  <!-- Download SVG icon from http://tabler-icons.io/i/check -->
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon me-1 text-success" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M5 12l5 5l10 -10"></path></svg>
                  Sharing Tools
                </li>
                <li>
                  <!-- Download SVG icon from http://tabler-icons.io/i/check -->
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon me-1 text-success" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M5 12l5 5l10 -10"></path></svg>
                  Design Tools
                </li>
                <li>
                  <!-- Download SVG icon from http://tabler-icons.io/i/x -->
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon me-1 text-danger" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M18 6l-12 12"></path><path d="M6 6l12 12"></path></svg>
                  Private Messages
                </li>
                <li>
                  <!-- Download SVG icon from http://tabler-icons.io/i/x -->
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon me-1 text-danger" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M18 6l-12 12"></path><path d="M6 6l12 12"></path></svg>
                  Twitter API
                </li>
              </ul>
              <div class="text-center mt-4">
                <a href="#" class="btn btn-green w-100">Choose plan</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-4">
          <div class="card card-md">
            <div class="card-body text-center">
              <div class="text-uppercase text-secondary font-weight-medium">Enterprise</div>
              <div class="display-5 fw-bold my-3">$99</div>
              <ul class="list-unstyled lh-lg">
                <li><strong>100</strong> Users</li>
                <li>
                  <!-- Download SVG icon from http://tabler-icons.io/i/check -->
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon me-1 text-success" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M5 12l5 5l10 -10"></path></svg>
                  Sharing Tools
                </li>
                <li>
                  <!-- Download SVG icon from http://tabler-icons.io/i/check -->
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon me-1 text-success" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M5 12l5 5l10 -10"></path></svg>
                  Design Tools
                </li>
                <li>
                  <!-- Download SVG icon from http://tabler-icons.io/i/check -->
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon me-1 text-success" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M5 12l5 5l10 -10"></path></svg>
                  Private Messages
                </li>
                <li>
                  <!-- Download SVG icon from http://tabler-icons.io/i/x -->
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon me-1 text-danger" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M18 6l-12 12"></path><path d="M6 6l12 12"></path></svg>
                  Twitter API
                </li>
              </ul>
              <div class="text-center mt-4">
                <a href="#" class="btn w-100">Choose plan</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12">
          <div class="card card-md">
            <div class="card-body">
              <div class="row align-items-center">
                <div class="col">
                  <h2 class="h3">Enterprise-ready. Reach out for a custom quote.</h2>
                  <p class="m-0 text-secondary">Tabler is designed to work great for large enterprises. Take a look at our feature comparison.</p>
                </div>
                <div class="col-auto">
                  <a href="#" class="btn">
                    Book a demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
