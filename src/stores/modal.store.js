import { defineStore } from 'pinia'

export const useModalStore = defineStore('dropdown', {
  state: () => ({
    isOpenAddCategoryModal: false,
    isOpenAddSubCategoryModal: false,
  }),
  actions: {
    openAddCategoryModal() {
      this.isOpenAddCategoryModal = true
    },
    closeAddCategoryModal() {
      this.isOpenAddCategoryModal = false
    },
    openAddSubCategoryModal() {
      this.isOpenAddSubCategoryModal = true
    },
    closeAddSubCategoryModal() {
      this.isOpenAddSubCategoryModal = false
    },
    clearStore() {
      this.isOpenAddCategoryModal = false
      this.isOpenAddSubCategoryModal = false
    },
  },
})

