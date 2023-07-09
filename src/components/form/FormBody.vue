<script setup>
import { ref, reactive, onMounted, computed } from "vue";

const name = ref("");
const familyName = ref("");
const gender = ref("");
const genderType = ref("");
const comments = ref("");

const formData = reactive({
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
      genderType.value = "";
    }
  });
};

const submitForm = () => {
  console.log("form is submitted");
};

onMounted(() => {});
</script>

<template>
  <div class="body-form">
    <pre>{{ formData }}</pre>
    <br />
    <form @submit.prevent="submitForm" class="input-validation-required">
      <sl-input
        name="name"
        label="Name"
        required
        v-model="name"
        ref="inputName"
        class="viu-input"
      ></sl-input>
      <br />
      <sl-input
        name="family_name"
        label="Family Name"
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
      <sl-checkbox required>Check me before submitting</sl-checkbox>
      <br /><br />
      <sl-button type="submit" variant="primary" class="viu-button"
        >Submit</sl-button
      >
    </form>
  </div>
</template>

<style lang="scss" scoped>
.body-form {
  margin: auto;
  padding: 42px 0px;
  max-width: 680px;
  border-top: 1px solid lightslategray;
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
