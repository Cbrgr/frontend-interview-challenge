<template>
  <div class="w-[1280px] mx-auto pt-24">
    <div class="w-full flex flex-col gap-16">
      <div class="px-24">
        <label
          class="text-sb-13 relative inline-flex items-center p-6 pl-12 shadow-regular-1 rounded-10"
        >
          <p>{{ activeFilter.label }}</p>
          <img src="../assets/icons/chevron_down.svg" />
          <select
            @change="onChange($event)"
            class="appearance-none opacity-0 absolute left-0 top-0 size-full p-8"
          >
            <option v-for="{ value, label } in filterList" :value="value">
              {{ label }}
            </option>
          </select>
        </label>
      </div>
      <Suspense>
        <EmployeesList :filter="activeFilter.value" />
        <template #fallback><EmployeesListSkeleton /></template>
      </Suspense>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import EmployeesList from "./EmployeesList.vue";
import EmployeesListSkeleton from "./EmployeesListSkeleton.vue";
import { FilterItem, FilterList } from "../types";

const defaultFilterItem: FilterItem = { value: "ALL", label: "All employees" };

const filterList: FilterList = [
  { value: "ALL", label: "All employees" },
  { value: "ACTIVE", label: "Active employees" },
  { value: "DEACTIVATED", label: "Deactivated employees" }
];

const activeFilter = ref<FilterItem>(defaultFilterItem);

const onChange = (event: Event) => {
  const target = event.target as HTMLSelectElement;
  activeFilter.value =
    filterList.find((filterItem) => filterItem.value === target.value) ||
    defaultFilterItem;
};
</script>
