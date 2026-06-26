<template>
  <section id="contact" class="section contact-section">
    <div class="container contact-panel reveal">
      <div>
        <p class="eyebrow">Contact</p>
        <h2>Available for web developer roles focused on reliable business websites.</h2>
      </div>
      <div class="contact-links">
        <a :href="`mailto:${profile.email}`">{{ profile.email }}</a>
        <a :href="`tel:${profile.phone}`" rel="noreferrer">{{ profile.phone }}</a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { profile } from '~/data/portfolio'
</script>
