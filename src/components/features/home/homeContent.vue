<script lang="ts" setup>
import _profilePic from '@/assets/images/profile/small-nobg.png'
import { lightButton } from '@/components/ui/buttons'
import {
  linkedinIcon,
  eMailIcon,
  whatsappIcon,
  githubIcon,
  gitlabIcon2,
  downloadIcon,
} from '@/components/ui/icons'
import { personalData } from '../data'
import i18n from '@/plugins/i18n'

const status_bool = true // true when I'm open to opportunities
</script>

<template>
  <div class="descri">
    <h3>
      {{ i18n.global.t('labels.home.greeting') }} <strong>RANDRIANANTENAINA Bearisoa</strong>.
      <br />
      <span>
        {{ i18n.global.t('labels.about.job_title.title') }}
      </span>
    </h3>
    <p>
      <i>
        {{ i18n.global.t('labels.home.intro') }}
      </i>
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
            {{ i18n.global.t('labels.home.cv') }}
          </span>
        </light-button>
      </div>
    </div>
    <div class="social-media-container">
      <p>
        {{ i18n.global.t('labels.home.intro2') }}
      </p>
      <div class="social-media">
        <light-button
          usedClass="icon-only linkedin"
          :url="personalData.linkedin.link"
          :newTab="true"
        >
          <linkedin-icon />
        </light-button>
        <light-button usedClass="icon-only github" :url="personalData.github.link" :newTab="true">
          <github-icon fill="currentColor" />
        </light-button>
        <light-button usedClass="icon-only gitlab" :url="personalData.gitlab.link" :newTab="true">
          <gitlab-icon2 fill="currentColor" />
        </light-button>
      </div>
    </div>
  </div>
  <div class="pic">
    <div :class="`picture-container ${status_bool ? 'disponible' : 'not-dispo'}`">
      <img :src="_profilePic" alt="profile picture" />
      <div :class="`status-container ${status_bool ? 'disponible' : 'not-dispo'}`">
        <div class="job-search-status">
          {{
            status_bool
              ? i18n.global.t('labels.home.status.available')
              : i18n.global.t('labels.home.status.unavailable')
          }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      //
    }
  },
  methods: {
    onDownloadCV() {
      const link = document.createElement('a')
      link.href = '/pdfs/CV_Bearisoa_Randrianantenaina_FR.pdf'
      link.download = 'RANDRIANANTENAINA Bearisoa - CV - FR.pdf'
      if (localStorage.getItem('lang') === 'en') {
        link.href = '/pdfs/CV_Bearisoa_Randrianantenaina_EN.pdf'
        link.download = 'RANDRIANANTENAINA Bearisoa - CV - EN.pdf'
      }
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    },
  },
}
</script>

<style scoped lang="scss">
.descri {
  h3 {
    margin: 5px 0px;

    span {
      color: #ffffff94;
      text-decoration-line: underline;
    }
  }

  p {
    font-weight: 100;
  }
}

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
    justify-content: space-between;
    align-items: center;
    width: 150px;
  }
}

.picture-container {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 160px;
  overflow: hidden;
  width: 300px;
  height: 300px;
  position: relative;

  --open-to-work-color: #90ee90;
  --not-available-color: #808080;

  &.disponible {
    border: solid 2px var(--open-to-work-color);
    animation: pulse 1s infinite;
    animation-direction: alternate;
  }

  &.not-dispo {
    border: solid 2px var(--not-available-color);
  }

  @keyframes pulse {
    from {
      background-color: none;
      box-shadow: 0 0 0 0px #90ee902d;
    }

    to {
      background-color: #90ee902d;
      box-shadow: 0 0 0 5px #90ee902d;
    }
  }

  img {
    width: 100% !important;
    transform: scale(1.1);
  }

  .status-container {
    position: absolute;
    width: 100%;
    bottom: 20px;
    color: #0000008b;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;

    .job-search-status {
      width: fit-content;
      padding: 5px;
      border-radius: 10px;
    }

    &.disponible {
      .job-search-status {
        background-color: var(--open-to-work-color);
      }
    }

    &.not-dispo {
      .job-search-status {
        background-color: var(--not-available-color);
      }
    }
  }
}
</style>
