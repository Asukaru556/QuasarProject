<template>
  <div class="row justify-between">
    <div class="text-h6">Модели</div>
    <q-btn color="primary">
      <q-icon @click="$router.push(`models/add`)" left size="3em" name="add_circle_outline" />
      <div>Добавить модель</div>
    </q-btn>
  </div>
  <div class="q-py-md">
    <div
      v-for="model in models"
      :key="model.id"
      class="row items-center q-py-md q-px-sm cursor-pointer cat-block"
    >
      <div class="text-grey-8">#{{ model.id }}</div>
      <div @click="$router.push(`categories/${model.id}`)" class="col q-px-md">
        {{ model.title }}
      </div>
      <div>
        <q-btn @click="onDelete(model.id)" unelevated round size="xs" color="dark" icon="close" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useModelsStore } from 'stores/example-store';
import { storeToRefs } from 'pinia';

const { models } = storeToRefs(useModelsStore());

function onDelete(id: number) {
  console.log('Delete', id);
}
</script>

<style scoped>
.cat-block {
  border-bottom: 1px #ccc solid;
}
.cat-block:hover {
  background: #efeded;
}
</style>
