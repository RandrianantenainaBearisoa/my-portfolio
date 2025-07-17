<script lang="ts" setup>
import allSkills from './allSkills.json';
import { skillsLayout } from '@/components/layouts';

</script>

<template>
  <div>
    <skills-layout legend="Soft skills">
      <div class="simple-list">
        <template v-for="(skill, index) in allSkills.soft_skills" :key="`softskill_${index}`">
          <span>
            #{{ skill.replace(/ /g, '_') }}
          </span>
        </template>
      </div>
    </skills-layout>
  </div>
</template>

<script lang="ts">
export default {
  name: "soft-skills",
};
</script>

<style scoped lang="scss">
.simple-list {
  display: flex;
  flex-wrap: wrap;

  span {
    padding: 2px 5px;
    margin: 3px;
    text-wrap: nowrap;
    font-weight: 900;
  }
}
</style>
