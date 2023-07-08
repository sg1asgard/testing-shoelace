<script setup>
import { ref, reactive } from "vue";

const name = ref("");
const familyName = ref("");
const gender = ref("");

const formData = reactive({
  name: name,
  family_name: familyName,
  gender: gender,
});
const submitForm = () => {
  console.log("form is submitted");
};
</script>

<template>
  <div class="body-form">
    <pre>{{ formData }}</pre>
    <br />
    <form @submit.prevent="submitForm" class="input-validation-required">
      <sl-input name="name" label="Name" required v-model="name"></sl-input>
      <br />
      <sl-input
        name="family_name"
        label="Family Name"
        required
        v-model="familyName"
      ></sl-input>
      <br />
      <sl-select label="Gender" clearable required v-model="gender">
        <sl-option value="birds">Birds</sl-option>
        <sl-option value="cats">Cats</sl-option>
        <sl-option value="dogs">Dogs</sl-option>
        <sl-option value="other">Other</sl-option>
      </sl-select>
      <br />
      <sl-textarea name="comment" label="Comment" required></sl-textarea>
      <br />
      <sl-checkbox required>Check me before submitting</sl-checkbox>
      <br /><br />
      <sl-button type="submit" variant="primary">Submit</sl-button>
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
</style>
