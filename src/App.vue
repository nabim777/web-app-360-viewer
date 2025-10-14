<template>
  <div id="presentation-viewer-main" class="presentation-viewer oc-flex">
    <div class="photosphere" ref="photosphereContainer"></div>
    <div class="slides">
      <section :data-markdown="url" :data-separator="dataSeparator"
               :data-separator-vertical="dataSeparatorVertical"></section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import PhotoSphereViewer from 'photosphere-viewer'
import 'photosphere-viewer/dist/photosphere-viewer.css'

const dataSeparator = '\r?\n---\r?\n'
const dataSeparatorVertical = '\r?\n--\r?\n'

defineProps({
  url: {
    type: String,
    required: true
  },
})

const photosphereContainer = ref<HTMLElement | null>(null)

onMounted(() => {
  if (photosphereContainer.value) {
    new PhotoSphereViewer({
      container: photosphereContainer.value,
      panorama: url,
      navbar: [
        'autorotate',
        'zoom',
        'fullscreen'
      ],
      plugins: [
        PhotoSphereViewer.AutoRotatePlugin(),
        PhotoSphereViewer.FullscreenPlugin(),
        PhotoSphereViewer.MarkersPlugin(),
        PhotoSphereViewer.MinimapPlugin({
          width: 150,
          height: 75,
          position: 'bottom-right',
          collapsed: false
        }),
        PhotoSphereViewer.ZoomPlugin({
          maxZoomLvl: 5
        })
      ]
    })
  }
})
</script>

<style scoped lang="scss">
.photosphere {
  width: 100%;
  height: 100%;
}
</style>