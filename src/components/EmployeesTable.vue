<template>
  <div class="w-[1280px] mx-auto pt-24">
    <div class="w-full flex flex-col gap-16">
      <div class="px-24">
        <select>
          <option>Active employees</option>
        </select>
      </div>
      <Suspense>
        <EmployeesList />
        <template #fallback>Loading... </template>
      </Suspense>
    </div>
  </div>
</template>

<script setup lang="ts">
import EmployeesList from "./EmployeesList.vue";
</script>
