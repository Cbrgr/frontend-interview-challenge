<template>
  <div class="flex flex-col gap-8">
    <div class="flex gap-20 px-24 h-40 items-center">
      <div class="flex-1">
        <p>Name</p>
      </div>
      <div class="flex-1 flex justify-end">
        <p>Status</p>
      </div>
    </div>
    <div
      class="flex gap-20 px-24 h-40 items-center"
      v-for="employee in employees"
    >
      <div class="flex-1">
        <p>{{ employee.name }}</p>
      </div>
      <div class="flex-1 flex justify-end">
        <p>{{ employee.status }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getEmployeeData } from "../services";
const employees = await getEmployeeData();
console.log(employees);
</script>
