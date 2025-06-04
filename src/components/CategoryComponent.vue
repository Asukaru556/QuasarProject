<template>
  <div class="text-h6">Редактирование категории</div>

  <q-form v-if="form" @submit="onSubmit" @reset="onReset" class="q-gutter-md q-mt-md">
    <q-input
      filled
      v-model="form.title"
      label="Название"
      hint="Название категории"
      :rules="[
        (val) => (val && val.length > 0) || 'Поле являетсяся обязательным!',
        (val) => (val && val.length < 256) || 'Должно быть не больше 256 символов!',
      ]"
    />
    <q-input
      filled
      v-model="form.description"
      label="Описание"
      hint="Описание категории"
      type="textarea"
    />

    <div>
      <q-btn label="Update" type="submit" color="primary" />
      <q-btn label="Delete" color="red" class="q-ml-sm" @click="onDelete" />
      <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
    </div>
  </q-form>
  <div v-else>Данная категория не найдена</div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import type { ICategory } from 'components/models';
import { useCategoriesStore } from 'stores/example-store';
import { storeToRefs } from 'pinia';
import { useRoute } from 'vue-router';

const form = ref<ICategory | undefined>(undefined);

const { categories } = storeToRefs(useCategoriesStore());
const route = useRoute();
onMounted(() => {
  form.value = categories.value.find((x) => x.id === Number(route.params.id));
});

function onSubmit() {
  console.log('Onsubmit');
}

function onDelete() {
  console.log('onDelete');
}

function onReset() {
  console.log('OnReset');
}
</script>

<style scoped></style>
