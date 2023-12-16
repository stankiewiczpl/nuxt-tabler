import bootstrap from 'bootstrap/dist/js/bootstrap.bundle'
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('bootstrap', bootstrap)
  const tooltipElements = document.querySelectorAll("[data-bs-toggle='tooltip']")
  tooltipElements.forEach((el) => {
    new bootstrap.Tooltip(el)
  })
})
