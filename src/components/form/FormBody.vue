<script setup>
import { ref, reactive, onMounted, watch } from "vue";

const name = ref("");
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

const formref = ref(null);
let select = ref(document.querySelector("sl-select"));
const getSelectedStuff = () => {
  console.log("slect stuff", select.value);
};


onMounted(() => {
  console.log(formref.value.children[3]);
});
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

      <sl-select
        id="slSelect"
        label="Gender"
        clearable
        required
        ref="formref"
      >
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
