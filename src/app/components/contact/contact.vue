<script setup lang="ts">
import data from '@/app/components/contact/data/contacts.json';
import GitHubIcon from '@/app/components/icons/github-icon.vue';
import LinkedinIcon from '@/app/components/icons/linkedin-icon.vue';
import GmailIcon from '@/app/components/icons/gmail-icon.vue';
import WhatsappIcon from '@/app/components/icons/whatsapp-icon.vue';
</script>

<template>
  <template v-if="for_footer">
    <div class="footer-content">
      <div class="footer-text">
        <p>© 2025 Randrianantenaina Bearisoa. All rights reserved.</p>
      </div>
      <div class="contact-me">
        <div class="contact-links">
          <ButtonLink buttonType="copy" :toCopy="contacts.gmail.link" :iconMode="3">
            <GmailIcon />
            <span class="contact-label">
              {{ contacts.gmail.link }}
            </span>
          </ButtonLink>
          <ButtonLink buttonType="copy" :toCopy="contacts.whatsapp.link" :iconMode="3">
            <WhatsappIcon />
            <span class="contact-label">
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
    </div>
  </template>
  <template v-else>
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
</template>

<script lang="ts">
export default {
  name: "Contact-Page",

  props: {
    for_footer: {
      type: Boolean,
      default: false,
    },
  },

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
    padding: 2px 5px;
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

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;

  .footer-text {
    color: var(--button-color-02);
  }

  .contact-me {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    .contact-links {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;

      .contact-label {
        font-size: 12px;
        color: var(--button-color-01);
        background-color: var(--button-color-02);
        border-radius: 5px;
        padding: 2px;
      }
    }

    .links-container {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
    }
  }
}

@media screen and (max-width: 600px) {
  .footer-content {
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;

    .footer-text {
      color: var(--button-color-02);
    }

    .contact-me {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;

      .contact-links {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;

        .contact-label {
          display: none;
        }
      }

      .links-container {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
      }
    }
  }
}

@media screen and (max-width: 900px) {
  .footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;

    .footer-text {
      color: var(--button-color-02);
    }

    .contact-me {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;

      .contact-links {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;

        .contact-label {
          display: none;
        }
      }

      .links-container {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
      }
    }
  }
}
</style>
