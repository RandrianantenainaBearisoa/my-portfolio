<script lang="ts" setup>
import _profilePic from "@/assets/images/profile/small-nobg.png";
import { lightButton } from "@/components/ui/buttons";
import { downloadIcon, linkedinIcon, eMailIcon, whatsappIcon, githubIcon } from "@/components/ui/icons";
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
        <light-button usedClass="whatsapp" url="whatsapp://send?abid=+261349491040">
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
          url="https://www.linkedin.com/in/bearisoa-randrianantenaina-892a5a225" :newTab="true">
          <linkedin-icon />
        </light-button>
        <light-button usedClass="icon-only github" url="https://github.com/RandrianantenainaBearisoa" :newTab="true">
          <github-icon />
        </light-button>
      </div>
    </div>
  </div>
  <div class="pic">
    <img :src="_profilePic" alt="profile picture" />
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
</style>
