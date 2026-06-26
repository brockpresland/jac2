<template>
  <section class="section">
    <div class="container">
      <div class="section-heading narrow reveal">
        <p class="eyebrow">Strong fit</p>
        <h2>Built for the work established teams need done well.</h2>
      </div>
      <div class="fit-grid">
        <article v-for="card in fitCards" :key="card.title" class="card reveal">
          <h3>{{ card.title }}</h3>
          <p>{{ card.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { fitCards } from '~/data/portfolio'
</script>
