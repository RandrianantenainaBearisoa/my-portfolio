<script setup lang="ts">
import { markRaw } from 'vue';
import { userIcon, simcyIcon, livewireIcon, tailwindIcon, laravelIcon, mysqlIcon, vuejsIcon, bootstrapIcon, gitIcon, githubIcon, gitlabIcon } from '@/components/ui/icons';
import experiences from './experiences.json';
import type { experienceHost } from '@/static/interfaces/experienceHost';
import type { ExperienceData } from '@/static/interfaces/experienceData';
import { typeTwoButton } from '@/components/ui/buttons';
import i18n from "@/plugins/i18n";
</script>

<template>
  <div>
    <div class="expe-index">
      <h1>
        {{ index }}
      </h1>
    </div>
    <fieldset>
      <legend>
        {{ i18n.global.t("labels.experience.experience_detail") }}
      </legend>
      <div class="part-1">
        <div>
          <type-two-button>
            <div class="pseudo-button">
              {{ i18n.global.t("labels.experience.experience_type") }}: <span class="upper-size">{{ experience.experience_type }}</span>
            </div>
          </type-two-button>
          <type-two-button>
            <div class="pseudo-button">
              {{ i18n.global.t("labels.experience.role") }}: <span class="upper-size">{{ experience.role }}</span>
            </div>
          </type-two-button>
        </div>
        <type-two-button>
          <div class="pseudo-button in-column">
            <span class="upper-size">{{ experience.start_date }}</span>
            {{ i18n.global.t("labels.experience.to") }} <span class="upper-size">{{ experience.end_date }}</span>
          </div>
        </type-two-button>
        <template v-if="experience.entity">
          <type-two-button :url="experience.entity.link">
            <div class="pseudo-button">
              {{ i18n.global.t("labels.experience.host") }}: <span class="upper-size">{{ experience.entity.name }}</span>
            </div>
          </type-two-button>
        </template>
      </div>
    </fieldset>

    <fieldset>
      <legend>{{ i18n.global.t("labels.experience.enhanced_skills") }}</legend>
      <div class="part-3">
        <div class="sub-title">
          {{ i18n.global.t("labels.experience.soft") }}
        </div>
        <template v-if="experience.enhanced_skills && [...experience.enhanced_skills.soft].length > 0">
          <div class="pseudo-button">
            <div class="content-wrapper">
              <template v-for="(softS, index) in experience.enhanced_skills.soft" :key="`softS_${index}`">
                <span class="list-enum">{{ softS }}</span>
              </template>
            </div>
          </div>
        </template>
        <div class="sub-title">
          {{ i18n.global.t("labels.experience.hard") }}
        </div>
        <template v-if="experience.enhanced_skills && [...experience.enhanced_skills.hard].length > 0">
          <div class="pseudo-button">
            <div class="content-wrapper">
              <template v-for="(hardS, index) in experience.enhanced_skills.hard" :key="`hardS_${index}`">
                <span class="list-enum">{{ hardS }}</span>
              </template>
            </div>
          </div>
        </template>
        <template v-if="experience.technos">
          <div class="pseudo-button">
            <div class="content-wrapper">
              <template v-for="(stack, index) in experience.technos" :key="`stack_${index}`">
                <span class="list-enum">
                  <span class="stack-icon">
                    <component :is="getIcon(stack.icon)" size="15px" />
                  </span>
                  <span class="placeholder">
                  </span>
                  {{ stack.name }}
                </span>
              </template>
            </div>
          </div>
        </template>
      </div>
    </fieldset>

    <fieldset>
      <legend>
        {{ i18n.global.t("labels.experience.accomplishments") }}
      </legend>
      <div class="part-2">
        <template v-if="experience.contribution">
          <dl>
            <dt>{{ i18n.global.t("labels.experience.contribution") }}</dt>
            <dd>{{ experience.contribution }}</dd>
          </dl>
        </template>
        <template v-if="experience.notable_achievements">
          <dl>
            <dt>{{ i18n.global.t("labels.experience.achievements") }}</dt>
            <dd>
              <ul>
                <template v-for="(ach, index) in experience.notable_achievements" :key="`ach_${index}`">
                  <li>{{ ach }}</li>
                </template>
              </ul>
            </dd>
          </dl>
        </template>
      </div>
    </fieldset>

  </div>
</template>

<script lang="ts">
export default {
  name: "expe-item",
  props: {
    hostName: {
      type: String,
      required: true
    },
    index: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      experience: {} as ExperienceData,
      iconComponents: {
        user: markRaw(userIcon),
        simcy: markRaw(simcyIcon),
        livewire: markRaw(livewireIcon),
        tailwind: markRaw(tailwindIcon),
        laravel: markRaw(laravelIcon),
        mysql: markRaw(mysqlIcon),
        vue: markRaw(vuejsIcon),
        bootstrap: markRaw(bootstrapIcon),
        git: markRaw(gitIcon),
        github: markRaw(githubIcon),
        gitlab: markRaw(gitlabIcon),
      },
    };
  },
  methods: {
    getIcon(icon_name: string) {
      return this.iconComponents[icon_name as keyof typeof this.iconComponents];
    },
  },
  mounted() {
    const cle = this.hostName as keyof experienceHost;
    this.experience = { ...experiences[cle] };
  },
};
</script>

<style scoped>
.expe-index {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    border: solid 1px #ffffff;
    border-radius: 100px;
    width: 50px;
    height: 50px;
  }
}

.part-1,
.part-3 {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  .pseudo-button {
    min-height: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-size: smaller;

    &.in-column {
      flex-direction: column;
      gap: 0px;
    }

    .content-wrapper {
      display: flex;
      flex-wrap: wrap;
      text-align: center;
    }

    .upper-size {
      font-size: small;
      font-weight: 600;
    }

    .list-enum {
      border: solid 1px;
      padding: 2px 5px;
      margin: 5px 5px 0px;
      border-radius: 20px;
      position: relative;
      display: flex;
      gap: 5px;
      align-items: center;

      .placeholder {
        width: 16px;
        height: 16px;
      }

      .stack-icon {
        border: solid 1px;
        border-radius: 500px;
        background-color: #ffffff;
        display: flex;
        padding: 5px;
        align-items: center;
        position: absolute;
        left: -5%;
      }

    }
  }
}

.part-3 {
  justify-content: start !important;

  .sub-title {
    width: 100%;
    font-size: smaller;
    font-weight: bold;
    text-decoration: underline;
  }
}

.part-2 {
  font-size: smaller;

  dt {
    font-size: small;
    font-weight: bold;
    text-decoration: underline;
  }

  dd {
    margin-inline-start: 0px !important;
    text-align: justify;
  }
}
</style>
