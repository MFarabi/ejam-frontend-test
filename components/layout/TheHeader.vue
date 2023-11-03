<script lang="ts" setup>
import { icons } from '@/utils/layout/theme-icon';

const items = [
  {
    title: '30-DAY SATISFACTION GUARANTEE',
    icon: icons['checkmark-starburst-16-regular'],
  },
  {
    title: 'Free delivery on orders over $40.00',
    icon: icons['truck-light'],
  },
  {
    title: '50.000+ HAPPY CUSTOMERS',
    icon: icons['heart-outline'],
  },
  {
    title: '100% Money Back Guarantee',
    icon: icons['arrow-sync-checkmark-20-regular'],
  },
];
</script>

<template>
  <header>
    <VContainer>
      <VRow justify="space-between" align="center" no-gutters class="h-full">
        <VSheet
          v-for="(item, index) in items"
          :key="index"
          class="bg-transparent"
          tag="p"
        >
          <Icon :name="item.icon" size="22" class="mr-2" />
          {{ item.title }}
        </VSheet>
      </VRow>
    </VContainer>
  </header>
</template>
