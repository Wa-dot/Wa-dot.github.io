<template>
  <div class="container">
    <div id="contact-form">
      <h1 class="titleContact">
        {{ $t("contact.contactUs") }}
      </h1>
      <form @submit.prevent="submitForm">
        <label for="name">{{ $t("contact.name") }}:</label>
        <input type="text" id="name" v-model="name" required>
        <label for="email">{{ $t("contact.email") }}:</label>
        <input type="email" id="email" v-model="email" required>
        <label for="subject">{{ $t("contact.object") }}:</label>
        <input type="text" id="subject" v-model="subject" required>
        <label for="message">{{ $t("contact.message") }}:</label>
        <textarea id="message" v-model="message" required></textarea>
        <button type="submit">{{ $t("contact.send") }}</button>
      </form>

      <div id="contact-info">
        <div class="info-block" id="tel-block">
          <h2>{{ $t("contact.tel") }}</h2>
          <p @click="copyPhoneNumber" class="copy">{{ telReceiver }} <svg viewBox="0 0 24 24" width="15px"
              height="15  px">
              <path
                d="M 4 2 C 2.895 2 2 2.895 2 4 L 2 18 L 4 18 L 4 4 L 18 4 L 18 2 L 4 2 z M 8 6 C 6.895 6 6 6.895 6 8 L 6 20 C 6 21.105 6.895 22 8 22 L 20 22 C 21.105 22 22 21.105 22 20 L 22 8 C 22 6.895 21.105 6 20 6 L 8 6 z M 8 8 L 20 8 L 20 20 L 8 20 L 8 8 z" />
            </svg></p>
          <p @click="copyPhoneNumber2" class="copy">{{ telReceiver2 }} <svg viewBox="0 0 24 24" width="15px"
              height="15  px">
              <path
                d="M 4 2 C 2.895 2 2 2.895 2 4 L 2 18 L 4 18 L 4 4 L 18 4 L 18 2 L 4 2 z M 8 6 C 6.895 6 6 6.895 6 8 L 6 20 C 6 21.105 6.895 22 8 22 L 20 22 C 21.105 22 22 21.105 22 20 L 22 8 C 22 6.895 21.105 6 20 6 L 8 6 z M 8 8 L 20 8 L 20 20 L 8 20 L 8 8 z" />
            </svg></p>
          <button @click="callUs">{{ $t("contact.callUs") }}</button>
        </div>
        <div class="info-block" id="address-block">
          <h2>{{ $t("contact.address") }}</h2>
          <p>{{ address }}<br>{{ postalCode }} {{ city }}<br>{{ country }}</p>
        </div>
      </div>
      <transition name="fade">
        <div v-if="showPopup" class="popup">{{ $t("contact.popUp") }}</div>
      </transition>
    </div>
  </div>
</template>
  
<script lang="ts">
import { information } from '../store';
export default {
  data() {
    return {
      name: '',
      email: '',
      subject: '',
      message: '',

      nameReceiver: information.general.name,
      emailReceiver: information.contact.email,
      telReceiver: information.contact.phone,
      telReceiver2: information.contact.phone2,
      address: information.contact.address,
      city: information.contact.city,
      postalCode: information.contact.postalCode,
      country: information.contact.country,

      showPopup: false

    }
  },
  methods: {
    submitForm() {
      let body = `Nom: ${this.name}\nEmail: ${this.email}\nMessage: ${this.message}`;
      window.location.href = `mailto:${this.emailReceiver}?subject=${encodeURIComponent(this.subject)}&body=${encodeURIComponent(body)}`;
    },
    callUs() {
      window.location.href = "tel:" + this.telReceiver2;
    },
    copyPhoneNumber() {
      navigator.clipboard.writeText(this.telReceiver);
      this.showPopup = true;
      setTimeout(() => {
        this.showPopup = false;
      }, 300);
    },
    copyPhoneNumber2() {
      navigator.clipboard.writeText(this.telReceiver2);
      this.showPopup = true;
      setTimeout(() => {
        this.showPopup = false;
      }, 300);
    }
  }
}
</script>
  
<style lang="scss">
@import "../style/style.scss";

.titleContact {
  font-size: 40px;
}

#contact-form {
  max-width: 500px;
  margin: 5% auto;
}

#contact-info {
  margin-top: 40px;
  display: flex;
}

.info-block {
  flex-basis: 50%;
}

.popup {
  position: fixed;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: $secondary-color;
  color: white;
  padding: 12px;
  border-radius: 4px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

label {
  display: block;
  margin-top: 20px;
}

input,
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid $text-area-border-color;
  border-radius: 4px;
}

button[type=submit],
button {
  background-color: $secondary-color;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button[type=submit]:hover,
button:hover {
  background-color: $secondary-color;
}

.copy {
  cursor: pointer;
  margin: 7px 0;
}


@media (max-width: 799px) {
  .titleContact {
    margin-top: 70px;
  }
}
</style>
  