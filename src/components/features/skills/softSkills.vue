<script lang="ts" setup>
import allSkills from './allSkills.json';
import { skillsLayout } from '@/components/layouts';

</script>

<template>
  <div>
    <skills-layout legend="Soft skills">
    soft-skills
    </skills-layout>
  </div>
</template>

<script lang="ts">
export default {
  name: "soft-skills",
};
</script>
