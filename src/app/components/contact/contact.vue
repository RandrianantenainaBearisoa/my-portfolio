<script setup lang="ts">
import data from '@/app/components/contact/data/contacts.json';
import GitHubIcon from '@/app/components/icons/github-icon.vue';
import LinkedinIcon from '@/app/components/icons/linkedin-icon.vue';
import GmailIcon from '@/app/components/icons/gmail-icon.vue';
import WhatsappIcon from '@/app/components/icons/whatsapp-icon.vue';
</script>

<template>
  <div class="contact-page">
    <div class="contacts-container">
      <ButtonLink buttonType="copy" :toCopy="contacts.gmail.link" :iconMode="3">
        <GmailIcon />
        <span class="contact-label bold-font">
          {{ contacts.gmail.link }}
        </span>
      </ButtonLink>
      <ButtonLink buttonType="copy" :toCopy="contacts.whatsapp.link" :iconMode="3">
        <WhatsappIcon />
        <span class="contact-label bold-font">
          {{ contacts.whatsapp.link }}
        </span>
      </ButtonLink>
    </div>
    <div class="links-container">
      <ButtonLink buttonType="external" :to="links.github.link" :iconMode="2">
        <GitHubIcon />
      </ButtonLink>
      <ButtonLink buttonType="external" :to="links.linkedin.link" :iconMode="2">
        <LinkedinIcon />
      </ButtonLink>
    </div>
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
.contact-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin: 20px 0px;
  gap: 20px;

  .contact-label {
    font-size: 12px;
    color: var(--button-color-01);
    background-color: var(--button-color-02);
    border-radius: 5px;
  }

  .links-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 100%;
    height: 100%;
  }

  .contacts-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    gap: 5px;
  }

}
</style>
