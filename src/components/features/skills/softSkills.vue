<script lang="ts" setup>
import { skillsLayout } from '@/components/layouts';
import i18n from "@/plugins/i18n";
</script>

<template>
  <div>
    <skills-layout :legend="i18n.global.t('labels.skill.soft')">
      <div class="simple-list">
        <template v-for="(skill, index) in softSkills" :key="`softskill_${index}`">
          <span>
            #{{ skill.replace(/[ ']/g, '_') }}
          </span>
        </template>
      </div>
    </skills-layout>
  </div>
</template>

<script lang="ts">
export default {
  name: "soft-skills",
  computed: {
    softSkills() {
      if (i18n.global.locale === "fr")
        return i18n.global.messages.fr.skills.soft_skills;
      return i18n.global.messages.en.skills.soft_skills;
    },
  }
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
