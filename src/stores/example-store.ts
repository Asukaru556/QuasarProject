import { defineStore } from 'pinia';
import type { ICategory } from 'components/models';
import { ref } from 'vue';
import type { Ref } from 'vue';

export const useCategoriesStore = defineStore('category', () => {
  const categories: Ref<ICategory[]> = ref([
    {
      id: 1,
      title: 'Category name',
      description: 'Category description',
    },
    {
      id: 2,
      title: 'Category name2',
      description: 'Category description2',
    },
    {
      id: 3,
      title: 'Category name3',
      description: 'Category description3',
    },
  ]);

  return { categories };
});
