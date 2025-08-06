<script lang="ts" setup>
import _profilePic from "@/assets/images/profile/small-nobg.png";
import { lightButton } from "@/components/ui/buttons";
import { downloadIcon, linkedinIcon, eMailIcon, whatsappIcon, githubIcon } from "@/components/ui/icons";
import { personalData } from "../personal-data";
</script>

<template>
  <div class="descri">
    <h3>
      Hello, my name is <strong>RANDRIANANTENAINA Bearisoa</strong>.
    </h3>
    <p>
      I'm a fullstack web developper and this is my portfolio, feel free to browse through it and if you are
      interersted
      in my services, send me an email or contact me via whatsapp.
    </p>
    <div class="home-contact">
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
      <div class="get-cv">
        <light-button usedClass="cv" @click.prevent="onDownloadCV">
          <download-icon />
          <span>
            My Curriculum Vitae
          </span>
        </light-button>
      </div>
    </div>
    <div class="social-media-container">
      <p>
        Let's get in touch and work together.
      </p>
      <div class="social-media">
        <light-button usedClass="icon-only linkedin"
          :url="personalData.linkedin.link" :newTab="true">
          <linkedin-icon />
        </light-button>
        <light-button usedClass="icon-only github" :url="personalData.github.link" :newTab="true">
          <github-icon fill="currentColor" />
        </light-button>
      </div>
    </div>
  </div>
  <div class="pic">
    <div class="picture-container">
      <img :src="_profilePic" alt="profile picture" />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      //
    };
  },
  methods: {
    onDownloadCV() {
      const link = document.createElement('a');
      link.href = '/pdfs/cv.pdf';
      link.download = 'RANDRIANANTENAINA Bearisoa - CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
};
</script>

<style scoped lang="scss">
.home-contact {
  display: flex;
  justify-content: space-around;
  width: 100%;

  .direct-contact,
  .get-cv {
    width: 50%;
  }

  .direct-contact {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .get-cv {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 560px) {
    flex-direction: column;
    align-items: center;

    .direct-contact {
      width: 120%;
      align-items: center;
    }

    .get-cv {
      width: 120%;
      margin-top: 20px;
    }
  }

  @media (min-width: 768px) {
    .direct-contact {
      justify-content: start;
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

.picture-container {
  border: solid 2px gray;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 160px;
  overflow: hidden;
  width: 300px;
  height: 300px;
  animation: pulse 1s infinite;
  animation-direction: alternate;

  @keyframes pulse {
    from {
      background-color: none;
      box-shadow: 0 0 0 0px #ffffff2d;
    }

    to {
      background-color: #ffffff2d;
      box-shadow: 0 0 0 5px #ffffff2d;
    }
  }

  img {
    width: 100% !important;
    transform: scale(1.1);
  }
}
</style>
