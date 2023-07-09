<script setup>
import { ref, reactive, onMounted, computed } from "vue";

const email = ref(null);
const name = ref(null);
const familyName = ref(null);
const gender = ref(null);
const genderType = ref(null);
const comments = ref(null);

const formData = reactive({
  email: email,
  name: name,
  family_name: familyName,
  gender: gender,
  gender_type: genderType,
  comments: comments,
});

const inputName = ref(null);
const formref = ref(null);

const showType = ref(false);
const getSelectedGender = () => {
  let select = document.getElementById("slSelect");

  select.addEventListener("sl-change", () => {
    gender.value = formref.value.value;

    if (gender.value == "other") {
      showType.value = true;
    } else {
      showType.value = false;
      genderType.value = null;
    }
  });
};

const dialogOverview = ref(null);
const submitForm = () => {
  console.log("form is submitted");
  let dialog = document.querySelector(".dialog-overview");
  dialog.show();
};

onMounted(() => {});
</script>

<template>
  <div class="body-form">
    <pre>{{ formData }}</pre>
    <br />

    <!-- <div class="viu-glasses"></div>
    <h1 class="title">the pioneer</h1>
    <h2 class="subtitle">Would you like to know more?</h2> -->

    <form @submit.prevent="submitForm" class="input-validation-required">
      <sl-input
        name="email"
        label="Email"
        type="email"
        autocomplete="off"
        required
        v-model="email"
        id="email"
        class="viu-input"
      ></sl-input>
      <br />

      <sl-input
        name="name"
        label="Name"
        autocomplete="off"
        required
        v-model="name"
        ref="inputName"
        class="viu-input"
      ></sl-input>

      <br />
      <sl-input
        name="family_name"
        label="Family Name"
        autocomplete="off"
        required
        v-model="familyName"
        id="familyName"
        class="viu-input"
      ></sl-input>

      <br />
      <sl-select
        id="slSelect"
        label="Gender"
        clearable
        required
        ref="formref"
        class="viu-select"
        @click="getSelectedGender()"
      >
        <sl-option value="male">male</sl-option>
        <sl-option value="female">female</sl-option>
        <sl-option value="other">Other</sl-option>
      </sl-select>
      <br />

      <sl-input
        name="gbuttonender_option"
        label="Your Gender"
        autocomplete="off"
        required
        id="genderName"
        class="viu-input"
        v-if="showType"
        v-model="genderType"
      ></sl-input>

      <br />
      <sl-textarea
        name="comment"
        label="Comment"
        required
        v-model="comments"
        class="viu-input"
      ></sl-textarea>

      <br />
      <sl-checkbox required>Yes, I would like to stay informed.</sl-checkbox>
      <br /><br />
      <sl-button type="submit" variant="primary" class="viu-button"
        >Submit</sl-button
      >
    </form>

    <sl-dialog label="Dialog" class="dialog-overview" ref="dialogOverview">
      <div slot="label">Thank you!</div>
      <ul>
        <li v-for="item in formData" :key="item">
          {{ item }}
        </li>
      </ul>
      <sl-button slot="footer" variant="primary">Close</sl-button>
    </sl-dialog>
  </div>
</template>

<style lang="scss" scoped>
.body-form {
  margin: auto;
  padding: 42px 0px;
  max-width: 690px;
  border-top: 1px solid lightslategray;
}

.viu-glasses {
  width: 100%;
  height: 360px;
  margin-bottom: 32px;
  background: url("https://production-presta-media.shopviu.com/img/product/557/977-the-pioneer-star-gold-black_front_3840x1920.webp");
  background-size: cover;
  background-position: center;
}

.title {
  text-transform: uppercase;
  margin: 0;
  padding: 0;
  line-height: 100%;
}
.subtitle {
  margin-bottom: 42px;
  font-size: 1.42rem;
}

.viu-button::part(base) {
  background: var(--sl-color-neutral-0);
  border: solid 1px $black;
  border-radius: 0;
}

.viu-button::part(base):hover {
  background: var(--sl-color-gray-950);
  color: $white;
}

.viu-button::part(base):active {
  background: var(--sl-color-gray-950);
  color: $white;
}

.viu-button::part(label) {
  color: var(--sl-color-gray-950);
}
.viu-button::part(label):hover {
  color: var(--sl-color-gray-950);
  color: $white;
}

.viu-input::part(base) {
  border-radius: 0;
}

.viu-select::part(combobox) {
  border-radius: 0;
}
</style>
