<template>
  <div>
    <SiteHeader />
    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <FitSection />
      <GrowthSection />
      <ResumeSection />
      <ContactSection />
    </main>
    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Brock Presland | Reliable Full-stack Web Developer',
  description: 'Portfolio for Brock Presland, a full-stack web developer focused on reliable marketing websites, WordPress, Laravel, Nuxt and business systems.'
})
</script>
