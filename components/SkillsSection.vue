<template>
  <section id="skills" class="section muted">
    <div class="container">
      <div class="section-heading narrow reveal">
        <p class="eyebrow">Technical skills</p>
        <h2>Comfortable across the website stack.</h2>
      </div>
      <div class="skill-grid">
        <article v-for="group in skillGroups" :key="group.title" class="card reveal">
          <h3>{{ group.title }}</h3>
          <div class="tag-list">
            <span v-for="item in group.items" :key="item">{{ item }}</span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { skillGroups } from '~/data/portfolio'
</script>
