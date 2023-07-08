<script setup>
import { ref, reactive, onMounted, watch } from "vue";

const name = ref("Dude");
const familyName = ref("");
const gender = ref("");
const comments = ref("");

const formData = reactive({
  name: name,
  family_name: familyName,
  gender: gender,
  comments: comments,
});

const submitForm = () => {
  console.log("form is submitted");
};

const inputName = ref(null);
const formref = ref(null);

const getSelectedStuff = () => {
  let select = document.getElementById("slSelect");

  select.addEventListener("click", () => {
    console.log(formref.value.value);
    gender.value = formref.value.value;
  });

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
      ></sl-input>
      <br />
      <sl-input
        name="family_name"
        label="Family Name"
        required
        v-model="familyName"
        id="familyName"
      ></sl-input>
      <br />

      <sl-select id="slSelect" label="Gender" clearable required ref="formref" @click="getSelectedStuff()">
        <sl-option value="birds">Birds</sl-option>
        <sl-option value="cats">Cats</sl-option>
        <sl-option value="dogs">Dogs</sl-option>
        <sl-option value="other">Other</sl-option>
      </sl-select>
      <br />
      <sl-textarea
        name="comment"
        label="Comment"
        required
        v-model="comments"
      ></sl-textarea>
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
