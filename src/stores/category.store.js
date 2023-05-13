import { defineStore } from 'pinia'

export const useCategoryStore = defineStore('category', {
  state: () => ({
    categories: [],
    subCategories: [],
    selectedCategoryId: '',
    selectedCategory: null,
  }),
  actions: {
    openAddCategoryModal() {
      this.isOpenAddCategoryModal = true
    },
    closeAddCategoryModal() {
      this.isOpenAddCategoryModal = false
    },
    setSelectedCategoryId(data) {
      this.selectedCategoryId = data
    },
    setSelectedCategory(data) {
      this.selectedCategory = data
    },
    clearStore() {
      this.isOpenAddCategoryModal = false
      this.categories = []
      this.subCategories = []
      this.selectedCategoryId = ''
      this.selectedCategory = null
    },
  },
})

