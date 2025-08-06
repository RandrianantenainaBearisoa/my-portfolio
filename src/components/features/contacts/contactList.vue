<script lang="ts" setup>
import { lightButton } from "@/components/ui/buttons";
import { linkedinIcon, eMailIcon, whatsappIcon, githubIcon } from "@/components/ui/icons";
</script>

<template>
  <div class="contact-list">
    <div class="home-contact">
      <div>
        <p>
          You can contact me with Whatsapp or Gmail.
        </p>
      </div>
      <div class="direct-contact">
        <light-button usedClass="whatsapp" url="https://wa.me/+261349491040">
          <whatsapp-icon />
          <span>
            +261 34 94 910 40
          </span>
        </light-button>
        <light-button usedClass="mail" url="mailto:rabearisoabex@gmail.com">
          <e-mail-icon />
          <span>
            rabearisoabex@gmail.com
          </span>
        </light-button>
      </div>
    </div>
    <div class="social-media-container">
      <p>
        Join me on Github and Linkedin.
      </p>
      <div class="social-media">
        <light-button usedClass="icon-only linkedin"
          url="https://www.linkedin.com/in/bearisoa-randrianantenaina-892a5a225" :newTab="true">
          <linkedin-icon />
        </light-button>
        <light-button usedClass="icon-only github" url="https://github.com/RandrianantenainaBearisoa" :newTab="true">
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

    @media (min-width: 700px ) and (max-width: 768px) {
      flex-direction: row;

      .link-container {
        width: 100%;
        justify-content: center !important;
      }
    }

    @media (min-width: 769px ) and (max-width: 950px) {
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
