<script lang="ts" setup>
import { timelineCard } from "@/components/ui/cards";
import { graduatedIcon, experienceIcon, brainIcon } from "../ui/icons";
</script>

<template>
  <div class="timeline-structure">
    <template v-for="(item, index) in events" :key="index">
      <div :class="`row ${(parseInt(index) % 2 == 0 ? 'left-row' : 'right-row')}`">
        <div class="separator">
          <div class="round-point">
            <template v-if="item.badge === 'experience'">
              <experience-icon size="15" />
            </template>
            <template v-else-if="item.badge ==='study'">
              <brain-icon size="15" />
            </template>
            <template v-else-if="item.badge ==='graduation'">
              <graduated-icon size="15" />
            </template>
            <template v-else>
            </template>
          </div>
        </div>
        <div class="row-item">
          <template v-if="item.isTable">
            <template v-for="(row, index) in item.table" :key="`table-row-${index}`">
              <timeline-card :item="row" />
            </template>
          </template>
          <template v-else>
            <timeline-card :item="item" />
          </template>
        </div>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
export default {
  name: "timeline-layout",
  props: {
    events: {
      type: Object,
      required: true,
    }
  },
};
</script>

<style lang="scss" scoped>
.timeline-structure {
  width: 100%;
  height: 100%;
  overflow: auto;
  scrollbar-width: thin;
  scrollbar-color: #add8e67c #add8e600;
  background-color: #243748e6;
  border: solid 1px #141f29e6;
  border-radius: 10px;
  position: relative;
  transition: 1s;

  &:hover {
    transform: scale(0.99);
    background-color: #24374875;
    border: solid 1px #ffffff;
    transition: 1s;
  }

  .row {
    width: 100%;
    height: fit-content;
    display: flex;
    position: relative;

    .separator {
      width: 5px;
      height: 100%;
      position: absolute;
      left: 50%;
      background-color: #add8e67c;

      .round-point {
        position: absolute;
        z-index: 50;
        width: 20px;
        height: 20px;
        border-radius: 10px;
        left: -130%;
        background-color: #ffffff;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #243748e6;
      }
    }

    &.left-row {
      justify-content: start;
      padding-left: 14px;
    }

    &.right-row {
      justify-content: end;
    }

    .row-item {
      width: 48%;
      height: 100%;
      display: flex;
      flex-direction: column;
      gap: 5px;
    }
  }
}
</style>
