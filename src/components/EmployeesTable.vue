<template>
  <div class="w-[1280px] mx-auto pt-24 font-inter">
    <div class="w-full flex flex-col gap-16">
      <div class="px-24">
        <select @change="onChange($event)">
          <option v-for="{ value, label } in filterList" :value="value">
            {{ label }}
          </option>
        </select>
      </div>
      <div class="flex flex-col gap-8">
        <div class="flex gap-20 px-24 h-40 items-center">
          <div class="flex-1 font-medium text-steel">
            <p>Name</p>
          </div>
          <div class="flex-1 flex justify-end font-medium text-steel">
            <p>Status</p>
          </div>
        </div>
        <Suspense>
          <EmployeesList :filter="activeFilter" />
          <template #fallback><EmployeesListSkeleton /></template>
        </Suspense>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import EmployeesList from "./EmployeesList.vue";
import EmployeesListSkeleton from "./EmployeesListSkeleton.vue";
import { Filter, FilterList } from "../types";

const filterList: FilterList = [
  { value: "ALL", label: "All employees" },
  { value: "ACTIVE", label: "Active employees" },
  { value: "DEACTIVATED", label: "Deactivated employees" }
];

const activeFilter = ref<Filter>("ALL");

const onChange = (event: Event) => {
  const target = event.target as HTMLSelectElement;
  activeFilter.value = target.value as Filter;
};
</script>
