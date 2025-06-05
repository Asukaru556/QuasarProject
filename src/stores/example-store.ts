import { defineStore } from 'pinia';
import type { ICategory } from 'components/models';
import { ref } from 'vue';
import type { Ref } from 'vue';
import type { IModel } from 'components/models';

export const useCategoriesStore = defineStore('category', () => {
  const categories: Ref<ICategory[]> = ref([
    {
      id: 1,
      title: 'Первая категория',
      description: 'Описание первой категории',
    },
    {
      id: 2,
      title: 'Вторая категория',
      description: 'Описание второй категории',
    },
    {
      id: 3,
      title: 'Третья категория',
      description: 'Описание третьей категории',
    },
  ]);

  return { categories };
});

export const useModelsStore = defineStore('model', () => {
  const models: Ref<IModel[]> = ref([
    {
      id: 1,
      title: 'Первая модель',
      description: 'Описание первой модели',
    },
    {
      id: 2,
      title: 'Вторая модель',
      description: 'Описание второй модели',
    },
    {
      id: 3,
      title: 'Третья модель',
      description: 'Описание третьей модели',
    },
  ]);

  return { models };
});
