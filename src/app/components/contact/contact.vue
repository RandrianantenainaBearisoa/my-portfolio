<script setup lang="ts">
import data from '@/app/components/contact/data/contacts.json';
</script>

<template>
  <div class="contact-list">
    <template v-for="(contact, index) in contacts" :key="index">
      <div class="contact-container">
        <div class="box-icon">
          <box-icon :name='contact.icon' type='logo' color="var(--background-color)"></box-icon>
        </div>
        <p>
          {{ contact.link }}
        </p>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
export default {
  name: "Contact-Page",

  data() {
    return {
      links: data.links,
      contacts: data.contacts,
    };
  },

  computed: {
    // 
  },

  mounted() {
    // 
  },

  methods: {
    // 
  },
};
</script>

<style scoped lang="scss">
.contact-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 10px;

  .contact-container {
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid 1px var(--text-color);

    .box-icon {
      border-right: solid 1px var(--text-color);
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1px;
      background-color: var(--text-color);
    }

    p {
      padding: 1px;
      margin: 1px;
    }
  }

}
</style>