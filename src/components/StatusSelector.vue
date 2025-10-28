<template>
  <label
    class="text-sb-13 relative inline-flex items-center p-6 pl-12 shadow-regular-1 rounded-10"
  >
    <p>{{ activeFilterLabel }}</p>
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
</template>

<script setup lang="ts">
import { ref } from "vue";
import { FilterItem, FilterList } from "../types";

const emit = defineEmits(["onChange"]);
const activeFilterLabel = ref<string>("All employees");

const defaultFilterItem: FilterItem = { value: "ALL", label: "All employees" };
const filterList: FilterList = [
  { value: "ALL", label: "All employees" },
  { value: "ACTIVE", label: "Active employees" },
  { value: "DEACTIVATED", label: "Deactivated employees" }
];

const onChange = (event: Event) => {
  const target = event.target as HTMLSelectElement;
  const activeFilter =
    filterList.find((filterItem) => filterItem.value === target.value) ||
    defaultFilterItem;

  activeFilterLabel.value = activeFilter.label;
  emit("onChange", activeFilter.value);
};
</script>
