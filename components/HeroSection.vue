<template>
  <section class="hero section">
    <div class="hero-orbit" aria-hidden="true">
      <span />
      <span />
      <span />
    </div>
    <div class="container hero-grid">
      <div class="hero-copy reveal">
        <p class="eyebrow">Full-stack web developer</p>
        <h1>Building reliable websites that businesses depend on.</h1>
        <p class="lede">
          I'm a full-stack web developer with over a decade of experience building,
          maintaining and improving websites and business systems for real business needs.
        </p>
        <div class="button-row">
          <a class="button primary" href="#projects">View Projects</a>
          <a class="button secondary" :href="profile.resume" download>Download Resume</a>
          <a class="button ghost" href="#contact">Contact</a>
        </div>
      </div>
      <aside class="hero-panel reveal" aria-label="Developer focus areas">
        <div class="panel-glow" aria-hidden="true" />
        <div>
          <span class="metric">10&plus;</span>
          <p>Years of full stack web development experience.</p>
        </div>
        <div class="signal-stack" aria-hidden="true">
          <span>Uptime</span>
          <span>SEO</span>
          <span>Security</span>
        </div>
        <ul>
          <li>WordPress and Laravel development</li>
          <li>Full websites and landing pages</li>
          <li>Performance, SEO and accessibility</li>
          <li>Hosting, DNS, maintenance and deployment</li>
        </ul>
      </aside>
    </div>
  </section>
</template>

<script setup lang="ts">
import { profile } from '~/data/portfolio'
</script>
