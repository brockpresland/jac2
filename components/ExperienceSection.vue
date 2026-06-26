<template>
  <section class="section">
    <div class="container">
      <div class="section-heading narrow reveal">
        <p class="eyebrow">Experience</p>
        <h2>Owning client work, support and delivery.</h2>
      </div>
      <div class="timeline">
        <article v-for="role in experience" :key="role.company" class="timeline-item reveal">
          <div>
            <h3>{{ role.company }}</h3>
            <p class="dates">{{ role.dates }}</p>
            <p>{{ role.summary }}</p>
          </div>
          <ul>
            <li v-for="point in role.points" :key="point">{{ point }}</li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { experience } from '~/data/portfolio'
</script>
