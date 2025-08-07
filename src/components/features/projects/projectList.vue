<script lang="ts" setup>
import type { projectType } from '@/static/interfaces/projectType';
import { projectCard } from '@/components/ui/cards';
import i18n from '@/plugins/i18n';
</script>

<template>
  <div class="project-list-container">
    <h1 v-text="projectList.title"></h1>
    <div class="project-list">
      <template v-for="(projet, index) in projectList.list" :key="`project_card_'${index}`">
        <project-card :project="projet" />
      </template>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "project-list",
  props: {
    listLabel: {
      type: String,
      required: true,
    },
  },
  computed: {
    projectList() {
      const cle = this.listLabel as keyof projectType;
      let List = i18n.global.messages.en.projects;
      if (i18n.global.locale === "fr")
        List = i18n.global.messages.fr.projects;
      return List[cle];
    },
  },
};
</script>

<style scoped lang="scss">
.project-list-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 100%;
  border: solid 1px #ffffff;
  border-radius: 10px;
  background: linear-gradient(180deg, #add8e600 0%, #ffffff00 100%);
  transition: 1s;

  h1 {
    width: 100%;
    text-align: center;
    color: #ffffff;
    transition: 1s;
  }

  .project-list {
    width: 100%;
    max-height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    scrollbar-width: thin;
    scrollbar-color: #add8e67c #add8e600;
    transition: 1s;
  }
}
</style>
