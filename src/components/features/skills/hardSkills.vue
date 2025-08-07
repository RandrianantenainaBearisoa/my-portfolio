<script lang="ts" setup>
import { markRaw } from 'vue';
import { skillsLayout } from '@/components/layouts';
import type { HardSkillsCategory } from '@/static/interfaces/hardSkillType';
import { htmlIcon, cssIcon, javascriptIcon, typescriptIcon, vuejsIcon, bootstrapIcon, tailwindIcon, sassIcon, phpIcon, laravelIcon, simcyIcon, sqlIcon, mysqlIcon, sqliteIcon, gitIcon, githubIcon, gitlabIcon, npmIcon, viteIcon, postmanIcon, vscodeIcon } from '@/components/ui/icons';
import i18n from "@/plugins/i18n";
</script>

<template>
  <div>
    <skills-layout :legend="i18n.global.t('labels.skill.hard')">
      <template v-for="(cle, index) in keys" :key="index">
        <dl>
          <dt>
            {{ cle.replace(/_/g, " ") }}:
          </dt>
          <dd>
            <template v-for="(item, index) in getSkillsByCategory(cle)" :key="`item_${index}`">
              <span class="list-enum">
                <span class="stack-icon">
                  <component :is="getIcon(item.icon)" size="15px" />
                </span>
                <span class="placeholder">
                </span>
                {{ item.name }}
              </span>
            </template>
          </dd>
        </dl>
      </template>
    </skills-layout>
  </div>
</template>

<script lang="ts">
export default {
  name: "hard-skills",
  data() {
    return {
      iconComponents: {
        html: markRaw(htmlIcon),
        css: markRaw(cssIcon),
        javascript: markRaw(javascriptIcon),
        typescript: markRaw(typescriptIcon),
        vue: markRaw(vuejsIcon),
        bootstrap: markRaw(bootstrapIcon),
        tailwind: markRaw(tailwindIcon),
        scss: markRaw(sassIcon),
        php: markRaw(phpIcon),
        laravel: markRaw(laravelIcon),
        simcy: markRaw(simcyIcon),
        sql: markRaw(sqlIcon),
        mysql: markRaw(mysqlIcon),
        sqlite: markRaw(sqliteIcon),
        git: markRaw(gitIcon),
        github: markRaw(githubIcon),
        gitlab: markRaw(gitlabIcon),
        npm: markRaw(npmIcon),
        vite: markRaw(viteIcon),
        postman: markRaw(postmanIcon),
        vscode: markRaw(vscodeIcon)
      }
    };
  },
  methods: {
    getSkillsByCategory(categoryName: string) {
      return [...this.hardSkills[categoryName]];
    },
    getIcon(icon_name: string) {
      return this.iconComponents[icon_name as keyof typeof this.iconComponents];
    },
  },
  computed: {
    hardSkills() {
      if (i18n.global.locale === "fr")
        return i18n.global.messages.fr.skills.hard_skills as HardSkillsCategory;
      return i18n.global.messages.en.skills.hard_skills as HardSkillsCategory;
    },
    keys() {
      return Object.keys(this.hardSkills);
    },
  }
};
</script>

<style lang="scss" scoped>
dt {
  font-size: medium;
  font-weight: 500;
  text-decoration: underline;
}

dd {
  font-size: smaller;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  .list-enum {
    border: solid 1px;
    padding: 2px 5px;
    margin: 5px 5px 0px;
    border-radius: 20px;
    position: relative;
    display: flex;
    gap: 5px;
    align-items: center;
    transition: 1s;

    &:hover {
      background-color: #ffffff;
      color: #4b749fed;
      transition: 1s;
      cursor: default;
    }

    .placeholder {
      width: 16px;
      height: 16px;
    }

    .stack-icon {
      border: solid 1px;
      border-radius: 500px;
      background-color: #ffffff;
      display: flex;
      padding: 3px;
      align-items: center;
      position: absolute;
      left: -5%;
    }

  }
}
</style>
