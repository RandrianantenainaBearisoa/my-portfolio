<script lang="ts" setup>
import Toast from 'primevue/toast';
</script>

<template>
  <toast />
  <form ref="form" @submit.prevent="sendEmail" class="contact-form">
    <PrimevueFieldset legend="Send me a message here">
      <div class="input-field">
        <PrimevueFloatLabel variant="in">
          <PrimevueInputText id="in_label_name" name="name" :value="name" />
          <label for="in_label_name">Name</label>
        </PrimevueFloatLabel>
      </div>

      <div class="input-field">
        <PrimevueFloatLabel variant="in">
          <PrimevueInputText id="in_label_email" name="email" :value="email" />
          <label for="in_label_email">Email</label>
        </PrimevueFloatLabel>
      </div>

      <div class="input-field">
        <PrimevueFloatLabel variant="in">
          <PrimevueTextarea id="in_label_mess" rows="5" cols="40" style="resize: none" name="message"
            :value="message" />
          <label for="in_label_mess">Message</label>
        </PrimevueFloatLabel>
      </div>

      <div class="input-field">
        <PrimevueButton label="Send" type="submit" />
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
          .sendForm('service_p9253u4', 'template_ji5mx08', send_msg_form, {
            publicKey: 'xQetr35FKQxK4GsrW',
          })
          .then(
            () => {
              this.toast.add({ severity: 'success', summary: 'Thanks for your feedback!', detail: 'Message sent successfully!', life: 3000 });
            },
            (error) => {
              console.log('FAILED...', error.text);
              this.toast.add({ severity: 'error', summary: 'Message unsent', detail: 'Please try again!', life: 3000 });
            },
          );
      } else {
        this.toast.add({ severity: 'warn', summary: 'Cannot send the message', detail: 'Please fill all field!', life: 3000 });
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
