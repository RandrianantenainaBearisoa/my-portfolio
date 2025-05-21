<script setup lang="ts">
import Intro from './introducing/introducing.vue';
import Contact from "@/app/components/contact/contact.vue"
</script>

<template>
  <div>
    <Intro />
  </div>
  <div class="links-container">
    <div class="link">
      <ButtonLink to="#" text="About me" />
    </div>
    <div class="link">
      <ButtonLink to="#" text="My Skills" />
    </div>
    <div class="link">
      <ButtonLink to="#" text="My projects" />
    </div>
  </div>
  <div class="contact-container bold-font">
    Let's get in touch and work together
    <Contact />
  </div>
</template>

<style scoped lang="scss">
.links-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 10px;

  .link {
    width: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.contact-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 10px;
  margin: 20px 0px;
}

@media screen and (max-width: 600px) {
  .links-container {
    flex-direction: column;
    align-items: center;
    gap: 20px;

    .link {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .contact-container {
    flex-direction: column;
    align-items: center;
  }
  
}

</style>
