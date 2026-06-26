<template>
  <section id="resume" class="section">
    <div class="container resume-layout">
      <div class="section-heading reveal">
        <p class="eyebrow">Resume</p>
        <h2>A clear snapshot for hiring teams.</h2>
        <a class="button primary" :href="profile.resume" download>Download Resume</a>
      </div>
      <div class="resume-card reveal">
        <section>
          <h3>Professional Summary</h3>
          <p>Full-stack web developer focused on reliable websites, business systems and practical problem solving.</p>
        </section>
        <section>
          <h3>Skills</h3>
          <p>WordPress, Laravel, PHP, JavaScript, Vue, Nuxt, MySQL, HTML, CSS, SCSS, hosting, DNS and integrations.</p>
        </section>
        <section>
          <h3>Education & Certifications</h3>
          <p>Formal cybersecurity education and certifications, applied alongside secure development practices.</p>
        </section>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { profile } from '~/data/portfolio'
</script>
