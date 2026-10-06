<template>
  <section id="education" class="section">
    <div class="container">
      <div class="section-heading narrow reveal">
        <p class="eyebrow">Education</p>
        <h2>Building deeper expertise in security and AI.</h2>
      </div>
      <div class="education-grid">
        <article v-for="item in education" :key="item.qualification" class="education-card reveal">
          <p class="education-dates">{{ item.dates }}</p>
          <h3>{{ item.qualification }}</h3>
          <p class="education-institution">{{ item.institution }}</p>
          <p>{{ item.summary }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { education } from '~/data/portfolio'
</script>
