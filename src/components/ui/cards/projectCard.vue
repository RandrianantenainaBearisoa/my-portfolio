<script setup lang="ts">
import { markRaw } from 'vue';
import { userIcon, simcyIcon, livewireIcon, tailwindIcon, laravelIcon, mysqlIcon, vuejsIcon, bootstrapIcon } from '../icons';
import projectModal from './projectModal.vue';
</script>

<template>
  <div class="card-container" @click="onMoreInfo">
    <div class="project-ui">
      <h5 v-text="project.project_title"></h5>

      <hr>

      <p v-text="project.role_and_responsibilities.roles[0]"></p>

      <hr>

      <template v-if="([...project.key_concepts].length > 0)">
        <template v-for="(concept, index) in [...project.key_concepts]" :key="`concept_${index}`">
          <p v-text="concept">
          </p>
        </template>
      </template>

      <template v-else>
        <template v-for="(task, index) in [...project.role_and_responsibilities.key_tasks]" :key="`task_${index}`">
          <p v-text="task">
          </p>
        </template>
      </template>

      <hr>

      <div class="icon-list">
        <template v-for="(techno, index) in project.approach_and_process.technos" :key="index">
          <div class="tooltip">
            <div class="icon-container">
              <component :is="getIcon(techno.icon)" size="15px" />
              <span class="tooltiptext" v-text="techno.name"></span>
            </div>
          </div>
        </template>
      </div>
    </div>

    <PrimevueDialog v-model:visible="isVisible" modal :header="project.project_title" :style="{ width: '50rem' }"
      :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
      <project-modal :project="project" />
    </PrimevueDialog>

  </div>
</template>

<script lang="ts">
export default {
  name: "project-card",
  props: {
    project: {
      type: Object,
      required: true
    },
  },
  data() {
    return {
      iconComponents: {
        user: markRaw(userIcon),
        simcy: markRaw(simcyIcon),
        livewire: markRaw(livewireIcon),
        tailwind: markRaw(tailwindIcon),
        laravel: markRaw(laravelIcon),
        mysql: markRaw(mysqlIcon),
        vue: markRaw(vuejsIcon),
        bootstrap: markRaw(bootstrapIcon)
      },
      isVisible: false,
    };
  },
  methods: {
    getIcon(icon_name: string) {
      return this.iconComponents[icon_name as keyof typeof this.iconComponents];
    },
    onMoreInfo() {
      this.isVisible = true;
    },
  },
};
</script>

<style scoped lang="scss">
.card-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: start;

  .project-ui {
    width: 150px;
    min-height: 180px;
    border: solid 1px #ffffff;
    border-radius: 10px;
    margin: 10px auto;
    padding: 10px 2px;
    text-align: center;
    background: #ffffff41;
    border-radius: 10px;
    color: #ffffff;
    transition: 0.2s;

    &:hover {
      cursor: pointer;
      color: #4d5f77;
      background-color: #e0e8ef;
      border-style: solid;
      border-width: 2px 2px 2px 2px;
      border-color: rgba(255, 255, 255, 0.333);
      transform: translate(0px, 0px) rotate(0deg);
      transition: 0.2s;
      box-shadow: -4px -2px 10px 0px #ffffff, 4px 2px 10px 0px #5f9de77a;
    }

    hr {
      width: 50%;
    }

    h5 {
      margin: 0;
      padding-bottom: 5px;
      font-size: medium;
    }

    p {
      font-size: small;
      margin: 5px;
      padding: 1px;
      border: solid 1px #4d5f77;
      border-radius: 5px;
    }

    .icon-list {
      display: flex;
      justify-content: center;
      gap: 1px;

      .icon-container {
        // display: inline;
        width: 24px;
        height: 24px;
        background-color: #ffffff;
        border-radius: 500px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

  }

  .tooltip {
    position: relative;
    display: inline-block;
  }

  .tooltip .tooltiptext {
    visibility: hidden;
    width: 120px;
    background-color: #555;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    position: absolute;
    z-index: 1;
    top: 125%;
    left: 50%;
    margin-left: -60px;
    opacity: 0;
    transition: opacity 0.3s;
  }

  .tooltip .tooltiptext::after {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #555 transparent transparent transparent;
    rotate: 180deg;
  }

  .tooltip:hover .tooltiptext {
    visibility: visible;
    opacity: 1;
  }

}
</style>
