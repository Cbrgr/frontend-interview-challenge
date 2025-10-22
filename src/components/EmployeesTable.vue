<template>
  <div class="w-[1280px] mx-auto pt-24">
    <div class="w-full flex flex-col gap-16">
      <div class="px-24">
        <select>
          <option>Active employees</option>
        </select>
      </div>
      <div class="flex flex-col gap-8">
        <div class="flex gap-20 px-24 h-40 items-center">
          <div class="flex-1">
            <p>Name</p>
          </div>
          <div class="flex-1 flex justify-end">
            <p>Status</p>
          </div>
        </div>
        <div class="flex gap-20 px-24 h-40 items-center">
          <div class="flex-1">
            <p>Michael J. Samuelson</p>
          </div>
          <div class="flex-1 flex justify-end">
            <p>Active</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
