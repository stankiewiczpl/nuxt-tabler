import bootstrap from 'bootstrap/dist/js/bootstrap.bundle'
export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.provide('bootstrap', bootstrap)
    let tooltipelements = document.querySelectorAll("[data-bs-toggle='tooltip']");
    tooltipelements.forEach((el) => {
        new bootstrap.Tooltip(el);
    });
})
