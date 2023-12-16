<template>
  <div :id="uppyUniqueId" />
</template>
<script setup lang="ts">
import _uniqueId from 'lodash/uniqueId'
import Uppy from '@uppy/core'
import Dashboard from '@uppy/dashboard'
import XhrUpload from '@uppy/xhr-upload'
import DropTarget from '@uppy/drop-target'
import Polish from '@uppy/locales/lib/pl_PL'
import '@uppy/core/dist/style.min.css'
import '@uppy/dashboard/dist/style.min.css'
import '@uppy/drop-target/dist/style.css'
import { useAuth, useApiUrl } from '#imports'
const props = defineProps({
  mediaType: {
    type: String,
    default: null
  },
  mediaId: {
    type: Number,
    default: null
  },
  mediaDisk: {
    type: String,
    default: null
  }
})

const uppy = ref()

const uppyUniqueId = _uniqueId('uppy-dashboard-')

onMounted(() => {
  uppy.value = new Uppy({
    locale: Polish
  })
  uppy.value.use(Dashboard, { inline: true, target: `#${uppyUniqueId}` })
    .use(DropTarget, { target: document.body })
    .use(XhrUpload, {
      endpoint: `${useApiUrl()}accounting/upload/documents`,
      headers: {
        Authorization: `Bearer ${useAuth().accessToken.value}`
      },
      fieldName: 'file'
    })

  uppy.value.on('file-added', (file : any) => {
    uppy.value.setFileMeta(file.id, {
      mediaType: props.mediaType,
      mediaId: props.mediaId,
      mediaDisk: props.mediaDisk
    })
  })
})
</script>
<style scoped>

</style>
