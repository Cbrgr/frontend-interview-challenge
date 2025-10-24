<template>
  <div class="flex gap-20 px-24 h-40 items-center text-md-14">
    <div class="flex-1 flex items-center gap-10">
      <div class="size-24 rounded-lg overflow-hidden">
        <img
          class="object-cover"
          :src="employee.profilePictureUrl"
          onerror="this.onerror=null;this.src='https://avatars.githubusercontent.com/u/61430766?s=48&v=4'"
        />
      </div>
      <p class="text-charcoal">{{ employee.name }}</p>
    </div>
    <div class="flex-1 flex items-center justify-end">
      <p :class="[isActive ? 'text-green' : 'text-steel', 'capitalize']">
        {{ employee.status.toLowerCase() }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Employee } from "../types";

interface Props {
  employee: Employee;
}
const { employee } = defineProps<Props>();

const isActive = employee.status === "ACTIVE";
</script>
