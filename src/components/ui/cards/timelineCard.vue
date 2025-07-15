<script lang="ts" setup>
import { siteIcon, placeIcon } from '../icons';
import { typeTwoButton } from '../buttons';
</script>

<template>
  <div class="card-container">
    <div class="date">
      {{ item.date }}
    </div>
    <div class="event-name">
      {{ item.step }}
    </div>
    <div class="topics">
      {{ item.topics }}
    </div>
    <div class="place">
      <template v-if="(item.place.link === '')">
        <type-two-button url="">
            <place-icon />
          {{ item.place.name }}
        </type-two-button>
      </template>
      <template v-else>
        <div class="more">
          <type-two-button :url="item.place.link">
              <site-icon />
            {{ item.place.name }}
          </type-two-button>
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "timeline-card",
  props: {
    item: {
      type: Object,
      required: true
    }
  },
};
</script>

<style lang="scss" scoped>
.card-container {
  margin: 10px 0px;
  text-align: center;

  color: #4d5f77;
  background-color: #e0e8ef;
  border-style: solid;
  border-width: 2px 2px 2px 2px;
  border-color: #ffffff55;
  border-radius: 10px;
  padding: 16px 10px;

  .date {
    color: rgba(0, 0, 0, 0.651);
    font-size: small;
  }

  .event-name {
    font-size: large;
    font-weight: 600;
  }

  .topics {
    font-weight: 300;
    font-size: medium;
  }
}
</style>
