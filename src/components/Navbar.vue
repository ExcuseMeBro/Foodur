<script setup>
import ChevronIcon from '@/components/icons/ChevronIcon.vue';
import PlusIcon from '@/components/icons/PlusIcon.vue';
import SearchIcon from '@/components/icons/SearchIcon.vue';
import { useModalStore } from '@/stores/modal.store';
import { useRouter } from "vue-router";

const router = useRouter()

const goHome = () => router.push('/dashboard')

const checkRoute = () => {
  return router.currentRoute.value?.path.includes('/dashboard')
}

const openModal = () => {
  if (router.currentRoute.value?.path.includes('/categories')) {
    useModalStore().openAddCategoryModal()
  } else {
    useModalStore().openAddSubCategoryModal()
  }
}

</script>
<template>
  <div class="fixed top-0 z-50 flex items-center justify-between w-full h-12 p-3 bg-white shadow">
    <div v-if="checkRoute()" class="flex items-center font-bold">
      <img src="/logo.svg" class="w-5 mr-2" />
      <p class="text-red-600"><span class="text-green-600">Food</span>ur</p>
    </div>
    <div v-else @click="goHome()" class="flex items-center">
      <ChevronIcon class="rotate-180 w-7 h-7" /> back
    </div>
    <div class="flex items-center">
      <SearchIcon class="w-6 h-6 cursor-pointer" />
      <PlusIcon v-if="!checkRoute()" @click="openModal()" class="w-6 h-6 ml-3 cursor-pointer" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>