<script setup lang="ts">
import { markRaw } from 'vue';
import { userIcon, simcyIcon, livewireIcon, tailwindIcon, laravelIcon, mysqlIcon, vuejsIcon, bootstrapIcon } from '../icons';
import { typeTwoButton } from '../buttons';
</script>

<template>
  <div>
    <!-- Actors and Functions -->
    <fieldset>
      <legend>
        Actors and Functions
      </legend>
      <div class="part-1">
        <type-two-button :url="project.entity.link">
          <div class="pseudo-button">
            Host: <span class="upper-size">{{ project.entity.name }}</span>
          </div>
        </type-two-button>
        <type-two-button>
          <div class="pseudo-button">
            Team members: <span class="upper-size">{{ project.team }}</span>
          </div>
        </type-two-button>
        <type-two-button>
          <div class="pseudo-button">
            Roles:
            <div class="content-wrapper">
              <template v-for="(role, index) in project.role_and_responsibilities.roles" :key="`role_${index}`">
                <span class="list-enum">{{ role }}</span>
              </template>
            </div>
          </div>
        </type-two-button>
        <type-two-button>
          <div class="pseudo-button">
            Tasks:
            <div class="content-wrapper">
              <template v-for="(task, index) in project.role_and_responsibilities.key_tasks" :key="`task_${index}`">
                <span class="list-enum">{{ task }}</span>
              </template>
            </div>
          </div>
        </type-two-button>
      </div>
    </fieldset>

    <!-- project context -->
    <fieldset>
      <legend>
        Project context
      </legend>
      <div class="part-2">
        <dl>
          <dt>Project type</dt>
          <dd>{{ project.project_context.project_type }}</dd>
        </dl>
        <template v-if="project.project_context.overall_objective !== ''">
          <dl>
            <dt>Overall objective</dt>
            <dd>
              {{ project.project_context.overall_objective }}
            </dd>
          </dl>
        </template>
        <template v-if="project.initial_problem_challenge !== ''">
          <dl>
            <dt>Initial problem challenge</dt>
            <dd>{{ project.initial_problem_challenge }}</dd>
          </dl>
        </template>
      </div>
    </fieldset>

    <!-- approach and process -->
    <fieldset>
      <legend>Approach and process</legend>
      <div class="part-3">
        <template v-if="[...project.approach_and_process.methodology].length > 0">
          <type-two-button>
            <div class="pseudo-button">
              Methodology:
              <div class="content-wrapper">
                <template v-for="(method, index) in project.approach_and_process.methodology" :key="`method_${index}`">
                  <span class="list-enum">{{ method }}</span>
                </template>
              </div>
            </div>
          </type-two-button>
        </template>
        <type-two-button>
          <div class="pseudo-button">
            Tech stack:
            <div class="content-wrapper">
              <template v-for="(stack, index) in project.approach_and_process.technos" :key="`stack_${index}`">
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
        </type-two-button>
        <template v-if="[...project.key_concepts].length > 0">
          <type-two-button>
            <div class="pseudo-button">
              Key concepts:
              <div class="content-wrapper">
                <template v-for="(concept, index) in project.key_concepts" :key="`concept_${index}`">
                  <span class="list-enum">{{ concept }}</span>
                </template>
              </div>
            </div>
          </type-two-button>
        </template>
      </div>
    </fieldset>
  </div>
</template>

<script lang="ts">
export default {
  name: "project-modal",
  props: {
    project: {
      type: Object,
      required: true,
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
    };
  },
  methods: {
    getIcon(icon_name: string) {
      return this.iconComponents[icon_name as keyof typeof this.iconComponents];
    },
  },
};
</script>

<style scoped lang="scss">
fieldset {
  border-color: #ffffff6e;
  border-radius: 20px;

  &>legend {
    background-color: #ffffff;
    padding: 0px 10px;
    font-size: small;
    font-weight: bold;
  }
}

.part-1,
.part-3 {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  .pseudo-button {
    min-height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    .content-wrapper {
      display: flex;
      flex-wrap: wrap;
      text-align: center;
    }

    .upper-size {
      font-size: large;
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

.part-2 {
  dt {
    font-size: small;
    font-weight: bold;
    text-decoration: underline;
  }
}

</style>
