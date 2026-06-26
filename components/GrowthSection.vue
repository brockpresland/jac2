<template>
  <section class="section muted">
    <div class="container">
      <div class="section-heading narrow reveal">
        <p class="eyebrow">Looking ahead</p>
        <h2>Growing into deeper technical responsibility.</h2>
      </div>
      <div class="growth-grid">
        <article v-for="area in growthAreas" :key="area.title" class="numbered reveal">
          <h3>{{ area.title }}</h3>
          <p>{{ area.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { growthAreas } from '~/data/portfolio'
</script>
