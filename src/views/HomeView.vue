<script setup>
import BottomBar from '@/components/BottomBar.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

</script>

<template>
  <main>
    <div class="w-full mt-12">
      <div class="flex items-center justify-between p-3">
        <div>Categories</div>
      </div>
      <div class="flex items-center justify-between p-3">
        <div>Parties</div>
        <div class="text-blue-500 cursor-pointer">See all</div>
      </div>
    </div>
    <BottomBar />
  </main>
</template>
