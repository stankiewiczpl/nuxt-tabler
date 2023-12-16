<template>
  <ul class="pagination">
    <li
      class="pagination-item"
    >
      <button
        type="button"
        :disabled="isInFirstPage"
        aria-label="Go to first page"
        @click="onClickFirstPage"
      >
        First
      </button>
    </li>

    <li
      class="pagination-item"
    >
      <button
        type="button"
        :disabled="isInFirstPage"
        aria-label="Go to previous page"
        @click="onClickPreviousPage"
      >
        Previous
      </button>
    </li>

    <li v-for="page in pages" class="pagination-item">
      <button
        type="button"
        :disabled="page.isDisabled"
        :class="{ active: isPageActive(page.name) }"
        :aria-label="`Go to page number ${page.name}`"
        @click="onClickPage(page.name)"
      >
        {{ page.name }}
      </button>
    </li>

    <li class="pagination-item">
      <button
        type="button"
        :disabled="isInLastPage"
        aria-label="Go to next page"
        @click="onClickNextPage"
      >
        Next
      </button>
    </li>

    <li class="pagination-item">
      <button
        type="button"
        :disabled="isInLastPage"
        aria-label="Go to last page"
        @click="onClickLastPage"
      >
        Last
      </button>
    </li>
  </ul>
</template>
<script lang="ts">
export default {
  name: 'Pagination',
  props: {
    maxVisibleButtons: {
      type: Number,
      required: false,
      default: 3
    },

    totalPages: {
      type: Number,
      required: true
    },

    total: {
      type: Number,
      required: true
    },

    perPage: {
      type: Number,
      required: true
    },

    currentPage: {
      type: Number,
      required: true
    }
  },
  computed: {
    startPage ():any {
      if (this.currentPage === 1) {
        return 1
      }

      if (this.currentPage === this.totalPages) {
        return this.totalPages - this.maxVisibleButtons + 1
      }

      return this.currentPage - 1
    },
    endPage (): any {
      return Math.min(
        this.startPage + this.maxVisibleButtons - 1,
        this.totalPages)
    },
    pages (): any {
      const range = []

      for (let i = this.startPage; i <= this.endPage; i += 1) {
        if (window.CP.shouldStopExecution(0)) { break }
        range.push({
          name: i,
          isDisabled: i === this.currentPage
        })
      }window.CP.exitedLoop(0)

      return range
    },
    isInFirstPage () :any {
      return this.currentPage === 1
    },
    isInLastPage () : any {
      return this.currentPage === this.totalPages
    }
  },
  methods: {
    onClickFirstPage () {
      this.$emit('pagechanged', 1)
    },
    onClickPreviousPage () {
      this.$emit('pagechanged', this.currentPage - 1)
    },
    onClickPage (page) {
      this.$emit('pagechanged', page)
    },
    onClickNextPage () {
      this.$emit('pagechanged', this.currentPage + 1)
    },
    onClickLastPage () {
      this.$emit('pagechanged', this.totalPages)
    },
    isPageActive (page) {
      return this.currentPage === page
    }
  }
}
</script>

<style scoped>

</style>
