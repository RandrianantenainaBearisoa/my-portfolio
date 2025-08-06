<script lang="ts" setup>
import { lightButton } from "@/components/ui/buttons";
import { linkedinIcon, eMailIcon, whatsappIcon, githubIcon } from "@/components/ui/icons";
import { personalData } from "../data";
import i18n from "@/plugins/i18n";
</script>

<template>
  <div class="contact-list">
    <div class="home-contact">
      <div>
        <p>
          {{ i18n.global.t("labels.contact.contact_me") }}
        </p>
      </div>
      <div class="direct-contact">
        <light-button usedClass="whatsapp" :url="personalData.whatsapp.link">
          <whatsapp-icon />
          <span>
            {{ personalData.whatsapp.label }}
          </span>
        </light-button>
        <light-button usedClass="mail" :url="personalData.gmail.link">
          <e-mail-icon />
          <span>
            {{ personalData.gmail.label }}
          </span>
        </light-button>
      </div>
    </div>
    <div class="social-media-container">
      <p>
        {{ i18n.global.t("labels.contact.join_me") }}
      </p>
      <div class="social-media">
        <light-button usedClass="icon-only linkedin" :url="personalData.linkedin.link" :newTab="true">
          <linkedin-icon />
        </light-button>
        <light-button usedClass="icon-only github" :url="personalData.github.link" :newTab="true">
          <github-icon fill="currentColor" />
        </light-button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contact-list {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.home-contact {
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;

  .direct-contact {
    width: 80%;
    display: flex;
    margin: auto;
    gap: 10px;
    justify-content: center;

    @media (max-width: 700px) {
      flex-direction: column;

      .link-container {
        width: 100%;
        justify-content: center !important;
      }
    }

    @media (min-width: 700px) and (max-width: 768px) {
      flex-direction: row;

      .link-container {
        width: 100%;
        justify-content: center !important;
      }
    }

    @media (min-width: 769px) and (max-width: 950px) {
      flex-direction: column;

      .link-container {
        width: 100%;
        justify-content: center !important;
      }
    }
  }
}

.social-media-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .social-media {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;
  }
}
</style>
