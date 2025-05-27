<script lang="ts">
import { useRouter } from 'vue-router';
import Foot from './Footer.vue';

export default {
  name: 'LayoutMaster',
  components: {
    Foot,
  },
  setup() {
    const router = useRouter();

    return {
      router,
    };
  },
  data() {
    return {
      //
    };
  },
  computed: {
    currentPath() {
      return this.router.currentRoute.value.path;
    },
  },
  mounted() {
    //
  },
  methods: {
    onChangeURL(route: string) {
      this.router.push(route);
    }
  },
};
</script>

<template>
  <div class="all-content">
    <div class="header">
      <div class="menu-container">
        <div class="menu" :class="{ active: currentPath.includes('/about-me') }" @click="onChangeURL('/about-me')">
          About me
        </div>
        <div class="menu" :class="{ active: currentPath.includes('/skills') }" @click="onChangeURL('/skills')">
          My skills
        </div>
        <div class="menu" :class="{ active: currentPath.includes('/projects') }" @click="onChangeURL('/projects')">
          My projects
        </div>
      </div>
    </div>
    <div class="main-content">
      <slot name="body" />
    </div>
    <div class="footer">
      <Foot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.all-content {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  .header {
    top: 0;

    .menu-container {
      display: flex;
      justify-content: center;
      align-items: center;

      .menu {
        font-size: 18px;
        cursor: pointer;
        width: 100%;
        height: 100%;
        padding: 10px;
        transition: background-color 1s ease-in-out;

        &:hover {
          background-color: #33333354;
          transition: background-color 0s ease-in-out;
        }

        &.active {
          background-color: #33333354;
          border-bottom: #ffffff solid 2px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
          transition: all 1s ease-in-out;
        }
      }
    }
  }

  .footer {
    padding: 10px;
    margin: 0;
    margin-top: auto;
    bottom: 0;
    height: 50px;
  }

  .header,
  .footer {
    width: 100%;
    position: fixed;
    left: 0;
    z-index: 1;
    color: white;
    text-align: center;
    backdrop-filter: var(--backdrop-filter);
  }

  .main-content {
    margin-top: 44px;
    margin-bottom: 44px;
    padding: 0 10px;
  }
}

@media screen and (max-width: 600px) {
  .main-content {
    margin-top: 44px;
    margin-bottom: 150px;
    padding: 0 10px;
  }

  .footer {
    height: 150px !important;
  }
}
</style>
