<template>
  <div class="header-shell">
    <div class="scroll-progress" aria-hidden="true" />
    <header class="site-header">
      <NuxtLink class="brand" to="/" aria-label="Brock Presland home">
        <span class="brand-mark">BP</span>
        <span>
          <strong>{{ profile.name }}</strong>
          <small>{{ profile.role }}</small>
        </span>
      </NuxtLink>
      <nav aria-label="Primary navigation">
        <a v-for="item in navItems" :key="item.href" :href="item.href">{{ item.label }}</a>
      </nav>
    </header>
  </div>
</template>

<script setup lang="ts">
import { navItems, profile } from '~/data/portfolio'
</script>
