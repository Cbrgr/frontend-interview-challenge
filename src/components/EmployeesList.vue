<template>
  <div
    class="flex gap-20 px-24 h-40 items-center"
    v-for="employee in employeeList"
  >
    <div class="flex-1 flex items-center gap-10">
      <div class="size-24 rounded-lg overflow-hidden">
        <img
          class="object-cover"
          :src="employee.profilePictureUrl"
          onerror="this.onerror=null;this.src='https://avatars.githubusercontent.com/u/61430766?s=48&v=4'"
        />
      </div>
      <p class="font-medium text-charcoal">{{ employee.name }}</p>
    </div>
    <div class="flex-1 flex items-center justify-end">
      <p class="font-medium text-charcoal">{{ employee.status }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { watchEffect } from "vue";
import { getEmployeeData } from "../services";
import { Filter } from "../types";
import { ref } from "vue";

interface Props {
  filter: Filter;
}
const { filter } = defineProps<Props>();

const employeeList = ref<any>(undefined);
const employeeData = await getEmployeeData();

watchEffect(() => {
  employeeList.value = employeeData.filter(
    (employee) => filter === "ALL" || employee.status === filter
  );
});
</script>
