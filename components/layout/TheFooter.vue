<script lang="ts" setup>
import { icons } from '@/utils/layout/theme-icon';
</script>

<template>
  <footer>
    <VContainer>
      <VRow justify="space-around" align="center" no-gutters>
        <VRow no-gutters justify="start" align="center" class="wcontent">
          Copyright (c) 2023
          <VDivider
            vertical
            class="mx-4 border-white"
            :length="32"
            :thickness="1"
          />
          Clarifionsupport@clarifion.com
        </VRow>

        <VRow no-gutters justify="end" align="center">
          <Icon :name="icons['lock-outline']" size="22" class="mr-4" />
          Secure 256-bit SSL encryption.
        </VRow>
      </VRow>
    </VContainer>
  </footer>
</template>

<style scoped>
hr {
  border-color: white;
  opacity: 1;
  height: 24px;
}
</style>
