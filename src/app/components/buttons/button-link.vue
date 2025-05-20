
<template>
  <template v-if="buttonType === 'internal'">
    <router-link :to="to">
      <div :class="`button-01 ${IconMode}`" role="button">
        <span class="text">
          <slot>
            {{ text }}
          </slot>
        </span>
      </div>
    </router-link>
  </template>
  <template v-else-if="buttonType === 'external'">
    <a :href="to">
      <div :class="`button-01 ${IconMode}`" role="button">
        <span class="text">
          <slot>
            {{ text }}
          </slot>
        </span>
      </div>
    </a>
  </template>
  <template v-else-if="buttonType === 'copy'">
    <div @click="copyToClipboard">
      <div :class="`button-01 ${IconMode}`" role="button">
        <span class="text">
          <slot>
            {{ text }}
          </slot>
        </span>
      </div>
    </div>
  </template>
</template>
<script lang="ts">
import { useToast } from 'primevue/usetoast';

export default {
  name: "ButtonLink",

  props: {
    to: {
      type: String,
      default: "#",
    },
    text: {
      type: String,
      default: "",
    },
    iconMode: {
      type: Number,
      default: 1,
    },
    buttonType: {
      type: String,
      default: "internal",
    },
    toCopy: {
      type: String,
      default: "",
    },
  },

  setup() {
    const toast = useToast();
    return {
      toast,
    };
  },

  data() {
    return {
      // 
    };
  },

  computed: {
    IconMode() {
      if (this.iconMode === 2) {
        return 'icon-only';
      } else if (this.iconMode === 3) {
        return 'icon-with-text';
      } else {
        return '';
      }
    },
  },

  watch: {
    // 
  },

  mounted() {
    // 
  },

  methods: {
    copyToClipboard() {
      const textToCopy = this.toCopy;
      navigator.clipboard.writeText(textToCopy).then(() => {
        this.toast.add({
          severity: "success",
          summary: "Copied to clipboard",
          detail: textToCopy,
          life: 3000,
        });
      }).catch((error) => {
        console.error("Error copying text: ", error);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
a {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* CSS */
.button-01 {
  align-items: center;
  background-image: linear-gradient(144deg, var(--gradient-button-01), var(--gradient-button-02) 50%, var(--gradient-button-03));
  border: 0;
  border-radius: 8px;
  box-shadow: var(--button-color-01) 0 10px 10px 0px;
  box-sizing: border-box;
  color: var(--text-color-01);
  display: flex;
  font-size: 20px;
  justify-content: center;
  line-height: 1em;
  max-width: 100%;
  min-width: 140px;
  padding: 3px;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  cursor: pointer;

  &.icon-only {
    max-width: 50px;
    min-width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: var(--button-color-01) 0 5px 5px 0px;

    span {
      padding: 2px;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }


  &.icon-with-text {
    min-width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: var(--button-color-01) 0 5px 5px 0px;

    span {
      padding: 2px;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  &:active,
  &:hover {
    outline: 0;

    span {
      background: none;
    }
  }

  span {
    background-color: #05062d;
    padding: 16px 24px;
    border-radius: 6px;
    width: 100%;
    height: 100%;
    transition: 300ms;
    text-align: center;
  }

}

@media (min-width: 768px) {
  .button-01 {
    font-size: 24px;
    min-width: 196px;
  }
}
</style>