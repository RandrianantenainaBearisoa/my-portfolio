<template>
  <div class="flex justify-center">
    <type-two-button @click="visible = true" style="cursor: pointer">
      <slot></slot>
    </type-two-button>
    <PrimevueDialog
      v-model:visible="visible"
      maximizable
      modal
      :header="modal_title"
      :style="{ width: '50rem', height: '40rem' }"
    >
      <video width="100%" height="95%" controls>
        <source :src="video_path" type="video/mp4" />
        Error
      </video>
    </PrimevueDialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { typeTwoButton } from '../buttons'

const visible = ref(false)
interface Props {
  video_path: string
  modal_title: string
}
const props = defineProps<Props>()
</script>
