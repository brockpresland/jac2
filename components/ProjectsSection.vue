<template>
  <section id="projects" class="section muted">
    <div class="container">
      <div class="section-heading narrow reveal">
        <p class="eyebrow">Selected projects</p>
        <h2>Laravel applications and WordPress websites.</h2>
      </div>
      <div class="project-showcase">
        <section v-for="group in projectGroups" :key="group.title" class="project-group reveal">
          <div class="project-group-heading">
            <p class="eyebrow">{{ group.title }}</p>
            <p>{{ group.intro }}</p>
          </div>
          <div class="project-grid" :class="{ 'project-grid-featured': group.projects.length === 2 }">
            <article v-for="project in group.projects" :key="project.title" class="project-card">
              <p class="project-type">{{ project.type }}</p>
              <h3>{{ project.title }}</h3>
              <p>{{ project.summary }}</p>
              <div class="tag-list">
                <span v-for="point in project.points" :key="point">{{ point }}</span>
              </div>
              <a class="project-link" :href="project.url" target="_blank" rel="noreferrer">
                View project
                <span aria-hidden="true">↗</span>
              </a>
            </article>
          </div>
        </section>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { projectGroups } from '~/data/portfolio'
</script>
