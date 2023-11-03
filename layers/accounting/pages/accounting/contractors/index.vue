<script setup lang="ts">
import { IconPlus } from '@tabler/icons-vue'
const items: any[] = [
  { id: 1, player: 'Stephen Curry', team: 'GSW', number: 30, position: 'G', indicator: { height: '6-2', weight: 185 }, lastAttended: 'Davidson', country: 'USA' },
  { id: 2, player: 'Lebron James', team: 'LAL', number: 6, position: 'F', indicator: { height: '6-9', weight: 250 }, lastAttended: 'St. Vincent-St. Mary HS (OH)', country: 'USA' },
  { id: 3, player: 'Kevin Durant', team: 'BKN', number: 7, position: 'F', indicator: { height: '6-10', weight: 240 }, lastAttended: 'Texas-Austin', country: 'USA' },
  { id: 4, player: 'Giannis Antetokounmpo', team: 'MIL', number: 34, position: 'F', indicator: { height: '6-11', weight: 242 }, lastAttended: 'Filathlitikos', country: 'Greece' }
]
</script>

<template>
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-header d-flex justify-content-between">
          <h3 class="card-title">
            Contractors
          </h3>
          <button class="btn btn-icon btn-primary">
            <IconPlus class="icon" :size="20" />
          </button>
        </div>
        <div class="card-body border-bottom py-3">
          <div class="d-flex">
            <div class="text-secondary">
              Show
              <div class="mx-2 d-inline-block">
                <input type="text" class="form-control form-control-sm" value="8" size="3" aria-label="Invoices count">
              </div>
              entries
            </div>
            <div class="ms-auto text-secondary">
              Search:
              <div class="ms-2 d-inline-block">
                <input type="text" class="form-control form-control-sm" aria-label="Search invoice">
              </div>
            </div>
          </div>
        </div>
        <div class="table-responsive">
          <table class="table card-table table-vcenter text-nowrap datatable">
            <thead>
              <tr>
                <th class="w-1">
                  <input class="form-check-input m-0 align-middle" type="checkbox" aria-label="Select all invoices">
                </th>
                <th class="w-1">
                  No. <!-- Download SVG icon from http://tabler-icons.io/i/chevron-up -->
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-sm icon-thick"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 15l6 -6l6 6" /></svg>
                </th>
                <th>Invoice Subject</th>
                <th>Client</th>
                <th>VAT No.</th>
                <th>Created</th>
                <th>Status</th>
                <th>Price</th>
                <th />
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in items" :key="item.id">
                <td><input class="form-check-input m-0 align-middle" type="checkbox" aria-label="Select invoice"></td>
                <td><span class="text-secondary">001401</span></td>
                <td><a href="invoice.html" class="text-reset" tabindex="-1">Design Works</a></td>
                <td>
                  <span class="flag flag-xs flag-country-us me-2" />
                  Carlson Limited
                </td>
                <td>
                  87956621
                </td>
                <td>
                  15 Dec 2017
                </td>
                <td>
                  <span class="badge bg-success me-1" /> Paid
                </td>
                <td>$887</td>
                <td class="text-end">
                  <span class="dropdown">
                    <button class="btn dropdown-toggle align-text-top" data-bs-boundary="viewport" data-bs-toggle="dropdown">Actions</button>
                    <div class="dropdown-menu dropdown-menu-end">
                      <a class="dropdown-item" href="#">
                        Action
                      </a>
                      <a class="dropdown-item" href="#">
                        Another action
                      </a>
                    </div>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="card-footer d-flex align-items-center">
          <p class="m-0 text-secondary">
            Showing <span>1</span> to <span>8</span> of <span>16</span> entries
          </p>
          <ul class="pagination m-0 ms-auto">
            <li class="page-item disabled">
              <a class="page-link" href="#" tabindex="-1" aria-disabled="true">
                <!-- Download SVG icon from http://tabler-icons.io/i/chevron-left -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M15 6l-6 6l6 6" /></svg>
                prev
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">1</a>
            </li>
            <li class="page-item active">
              <a class="page-link" href="#">2</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">3</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">4</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">5</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                next <!-- Download SVG icon from http://tabler-icons.io/i/chevron-right -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 6l6 6l-6 6" /></svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
