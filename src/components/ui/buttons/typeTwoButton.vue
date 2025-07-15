<template>
  <template v-if="url !== ''">
    <a :href="url" target="_blank">
      <slot>
      </slot>
    </a>
  </template>
  <template v-else>
    <div>
      <slot>
      </slot>
    </div>
  </template>
</template>

<script lang="ts">
export default {
  name: "type-two-button",
  props: {
    url: {
      type: String,
      default: "",
    },
  }
};
</script>

<style scoped>
a, div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
  font-family: inherit;
  font-size: smaller;
  font-weight: 500;
  letter-spacing: 0.4px;
  color: #7e97b8;
  background-color: #e0e8ef;
  border-style: solid;
  border-width: 2px 2px 2px 2px;
  border-color: rgba(255, 255, 255, 0.333);
  border-radius: 10px;
  padding: 5px 10px;
  margin: 10px 2px;
  transform: translate(0px, 0px) rotate(0deg);
  transition: 0.2s;
  box-shadow: -4px -2px 16px 0px #ffffff, 4px 2px 16px 0px #5f9de77a;
}

button:hover {
  color: #516d91;
  background-color: #E5EDF5;
  box-shadow: -2px -1px 8px 0px #ffffff, 2px 1px 8px 0px #5f9de77a;
}

button:active {
  box-shadow: none;
}
</style>
