<script lang="ts" setup>
import allSkills from './allSkills.json';
import { skillsLayout } from '@/components/layouts';
import { languageCard } from '@/components/ui/cards';
</script>

<template>
  <div class="lang-skill-container">
    <skills-layout legend="Languages">
      <div class="cards-container">
        <template v-for="(lang, index) in allSkills.languages" :key="`lang_${index}`">
          <div class="card">
            <language-card :language="lang" />
          </div>
        </template>
      </div>
    </skills-layout>
  </div>
</template>

<script lang="ts">
export default {
  name: "language-skills",
};
</script>

<style scoped lang="scss">
.lang-skill-container {
  width: 100%;
}

.cards-container {
  width: 100%;
  display: flex;
  justify-content: space-around;

  .card {
    width: 50%;
  }

  @media (max-width: 550px) {
    flex-direction: column;

    .card {
      width: 100%;
      margin: auto;
    }
  }
}
</style>
