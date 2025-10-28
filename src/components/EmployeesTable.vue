<template>
  <div class="w-[1280px] mx-auto pt-24">
    <div class="w-full flex flex-col gap-16">
      <div class="px-24">
        <StatusSelector @onChange="onChange" />
      </div>
      <Suspense>
        <EmployeesList :filter="activeFilterValue" />
        <template #fallback><EmployeesListSkeleton /></template>
      </Suspense>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import EmployeesList from "./EmployeesList.vue";
import EmployeesListSkeleton from "./EmployeesListSkeleton.vue";
import { Filter } from "../types";
import StatusSelector from "./StatusSelector.vue";

const activeFilterValue = ref<Filter>("ALL");

const onChange = (value: Filter) => {
  activeFilterValue.value = value;
};
</script>
