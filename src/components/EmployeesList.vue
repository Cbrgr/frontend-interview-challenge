<template>
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
</template>

<script setup lang="ts">
import { getEmployeeData } from "../services";
const employees = await getEmployeeData();
console.log(employees);
</script>
