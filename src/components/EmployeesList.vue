<template>
  <div class="flex flex-col gap-8">
    <div class="flex gap-20 px-24 h-40 items-center">
      <div class="flex-1 text-steel text-md-14">
        <p>Name</p>
      </div>
      <div class="flex-1 flex justify-end text-steel text-md-14">
        <p>Status</p>
      </div>
    </div>
    <EmployeeCard
      v-for="employee in employeeList"
      v-bind:employee="employee"
      :key="employee.id"
    />
  </div>
</template>

<script setup lang="ts">
import { watchEffect } from "vue";
import { getEmployeeData } from "../services";
import { EmployeesList, Filter } from "../types";
import { ref } from "vue";
import EmployeeCard from "./EmployeeCard.vue";

interface Props {
  filter: Filter;
}
const { filter } = defineProps<Props>();

const employeeData = await getEmployeeData();
const employeeList = ref<EmployeesList>([]);

watchEffect(() => {
  employeeList.value = employeeData.filter(
    (employee) => filter === "ALL" || employee.status === filter
  );
});
</script>
