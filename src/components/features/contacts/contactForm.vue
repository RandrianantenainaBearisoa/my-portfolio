<script lang="ts" setup>
import Toast from 'primevue/toast';
import i18n from "@/plugins/i18n";
</script>

<template>
  <toast />
  <form ref="form" @submit.prevent="sendEmail" class="contact-form">
    <PrimevueFieldset :legend="i18n.global.t('labels.contact.message_me')">
      <div class="input-field">
        <PrimevueFloatLabel variant="in">
          <PrimevueInputText id="in_label_name" name="name" :value="name" />
          <label for="in_label_name">{{ i18n.global.t("labels.contact.name") }}</label>
        </PrimevueFloatLabel>
      </div>

      <div class="input-field">
        <PrimevueFloatLabel variant="in">
          <PrimevueInputText id="in_label_email" name="email" :value="email" />
          <label for="in_label_email">{{ i18n.global.t("labels.contact.email") }}</label>
        </PrimevueFloatLabel>
      </div>

      <div class="input-field">
        <PrimevueFloatLabel variant="in">
          <PrimevueTextarea id="in_label_mess" rows="5" cols="40" style="resize: none" name="message"
            :value="message" />
          <label for="in_label_mess">{{ i18n.global.t("labels.contact.message") }}</label>
        </PrimevueFloatLabel>
      </div>

      <div class="input-field">
        <PrimevueButton :label="i18n.global.t('labels.contact.send')" type="submit" />
      </div>
    </PrimevueFieldset>
  </form>
</template>

<script lang="ts">
import emailjs from '@emailjs/browser';
import { useToast } from "primevue/usetoast";

export default {
  data() {
    return {
      toast: useToast(),
      name: '',
      email: '',
      message: '',
    };
  },
  methods: {
    formValidate() {
      if (this.name === '' || this.email === '' || this.message === '') {
        return false;
      }

      return true;
    },
    sendEmail(event: any) {
      const send_msg_form = event.target;
      if (this.formValidate()) {
        emailjs
          .sendForm('', '', send_msg_form, {
            publicKey: '',
          })
          .then(
            () => {
              this.toast.add({ severity: 'success', summary: i18n.global.t("labels.message.contact.success.summary"), detail: i18n.global.t("labels.message.contact.success.detail"), life: 3000 });
            },
            (error) => {
              console.log('FAILED...', error.text);
              this.toast.add({ severity: 'error', summary: i18n.global.t("labels.message.contact.error.summary"), detail: i18n.global.t("labels.message.contact.error.detail"), life: 3000 });
            },
          );
      } else {
        this.toast.add({ severity: 'warn', summary: i18n.global.t("labels.message.contact.fill_all.summary"), detail: i18n.global.t("labels.message.contact.fill_all.detail"), life: 3000 });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.contact-form {
  margin: auto;

  --p-fieldset-content-padding: 10px;
  --p-fieldset-background: none;
  --p-fieldset-legend-background: none;
  --p-fieldset-color: #ffffff;
  --p-fieldset-legend-border-color: #ffffff;
  --p-fieldset-legend-hover-color: #ffffff;

  .input-field {
    margin: 10px;
  }

  .p-inputtext {
    width: 100%;
  }
}
</style>
