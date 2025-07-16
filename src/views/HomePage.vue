<script lang="ts" setup>;
import { homeIcon, userIcon, appIcon, experienceIcon, brainIcon, contactsIcon } from "@/components/ui/icons";
import { homeContent } from '@/components/features/home';
import { personalInfo, personalJourney } from "@/components/features/about-me";
import { projectList } from "@/components/features/projects";
import { expeItem } from "@/components/features/experiences";
import '@/assets/styles/views/homePage.scss';
</script>

<template>
  <div>
    <div class="menu-container">
      <div class="menu-group">
        <a href="#home-section" class="menu active" @click.self.prevent="scrollToSection($event)">
          <span class="menu-title">
            Home
          </span>
          <span class="menu-icon">
            <home-icon />
          </span>
        </a>
        <a href="#about-section" class="menu" @click.self.prevent="scrollToSection($event)">
          <span class="menu-title">
            About me
          </span>
          <span class="menu-icon">
            <user-icon />
          </span>
        </a>
        <a href="#projects-section" class="menu" @click.self.prevent="scrollToSection($event)">
          <span class="menu-title">
            My Projects
          </span>
          <span class="menu-icon">
            <app-icon />
          </span>
        </a>
        <a href="#experiences-section" class="menu" @click.self.prevent="scrollToSection($event)">
          <span class="menu-title">
            My experiences
          </span>
          <span class="menu-icon">
            <experience-icon />
          </span>
        </a>
        <a href="#skills-section" class="menu" @click.self.prevent="scrollToSection($event)">
          <span class="menu-title">
            My Skills
          </span>
          <span class="menu-icon">
            <brain-icon />
          </span>
        </a>
        <a href="#contacts-section" class="menu" @click.self.prevent="scrollToSection($event)">
          <span class="menu-title">
            Contacts
          </span>
          <span class="menu-icon">
            <contacts-icon />
          </span>
        </a>
      </div>
    </div>
    <div class="home section" id="home-section">
      <home-content />
    </div>
    <div class="section hidden" id="about-section">
      <div class="section-part-left">
        <personal-info />
      </div>
      <div class="section-part-right large">
        <personal-journey />
      </div>
    </div>
    <div class="section hidden" id="projects-section">
      <div class="section-part-right large">
        <project-list listLabel="web" />
      </div>
      <!-- <div class="section-part-left large">
        <project-list listLabel="gis" />
      </div> -->
      <!-- <div class="section-part-left large">
        <project-list listLabel="data_science" />
      </div> -->
    </div>
    <div class="section hidden" id="experiences-section">
      <div class="section-part-left-1 semi-large">
        <expe-item hostName="godigital" index="1" />
      </div>
      <div class="section-part-left-2 semi-large">
        <expe-item hostName="mtp" index="2" />
      </div>
      <div class="section-part-left-3 semi-large">
        <expe-item hostName="dsp" index="3" />
      </div>
    </div>
    <div class="section hidden" id="skills-section">
      <div class="section-part-top">
      </div>
      <div class="section-part-bottom">
      </div>
    </div>
    <div class="section hidden" id="contacts-section">
      <div class="section-part-bottom">
      </div>
      <div class="section-part-top">
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Home-page",
  data() {
    return {
      activeSection: "home-section"
    };
  },

  watch: {
    activeSection() {
      this.showActiveSection();
    }
  },

  mounted() {
    window.addEventListener('scroll', this.updateActiveMenu);
  },

  beforeUnmount() {
    window.removeEventListener('scroll', this.updateActiveMenu);
  },

  methods: {
    scrollToSection(event: any) {
      const targetId = event.target.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    },

    updateActiveMenu() {
      const menuLinks = document.querySelectorAll('.menu');
      const sections = document.querySelectorAll('.section');
      let currentSection = null;

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i] as HTMLElement;
        if (section.offsetTop <= (window.pageYOffset) * 1.2 && (section.offsetTop + section.offsetHeight) > (window.pageYOffset) * 1.2) {
          currentSection = section;
          break;
        }
      }

      if (currentSection !== null) {
        menuLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${currentSection.id}`) {
            link.classList.add('active');
            if (this.activeSection !== currentSection.id)
              this.activeSection = currentSection.id;
          }
        });
      }
    },

    showActiveSection() {
      const sections = document.querySelectorAll('.section');
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        section.classList.remove('shown');
        section.classList.add('hidden');
      }
      const activeSection = document.querySelector(`#${this.activeSection}`);
      if (activeSection !== null) {
        activeSection.classList.remove('hidden');
        activeSection.classList.add('shown');
      }
    }
  },
};
</script>
