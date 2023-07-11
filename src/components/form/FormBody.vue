<script setup>
import { ref, reactive, onMounted, computed } from "vue";

// init const
const email = ref(null);
const name = ref(null);
const familyName = ref(null);
const gender = ref(null);
const genderType = ref(null);
const comments = ref(null);

const gender2 = ref(null);

// form data to submit
const formData = reactive({
  email: email,
  name: name,
  family_name: familyName,
  gender: gender,
  gender_type: genderType,
  comments: comments,
});

const formref = ref(null);

// getSelectedGender() is not need it any longer
// if we use :value="gender"  @sl-change="gender = $event.target.value" at the level of sl-select
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
const myForm = ref(null);
const formDataCopy = ref(null);

const onSubmit = () => {
  let theForm = document.querySelector(".input-validation-required");
  formDataCopy.value = Object.assign({}, formData);

  setTimeout(() => {
    theForm.addEventListener("submit", (event) => {
      event.preventDefault();
      showDialog();

      theForm.reset();

      email.value = null;
      name.value = null;
      familyName.value = null;
      gender.value = null;
      genderType.value = null;
      comments.value = null;
    });
  }, 10);
};

const onReset = () => {
  let theForm = document.querySelector(".input-validation-required");

  setTimeout(() => {
    theForm.addEventListener("reset", (event) => {
      event.preventDefault();
    });
  }, 10);
};

const showDialog = () => {
  let dialog = document.querySelector(".dialog-overview");
  dialog.show();

  let closeButton = dialog.querySelector('sl-button[slot="footer"]');
  closeButton.addEventListener("click", () => dialog.hide());
};

onMounted(() => {});
</script>

<template>
  <div class="body-form">
  <pre>{{ formData }}</pre>
    <form
      @submit.prevent="onSubmit()"
      @reset.prevent="onReset()"
      class="input-validation-required"
      ref="myForm"
    >
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
        :value="gender"
        @sl-change="gender = $event.target.value"
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
        v-show="gender == 'other'"
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
      <br />
      <sl-button type="submit" variant="primary" class="viu-button"
        >Subscribe</sl-button
      >
      <sl-button
        type="reset"
        variant="primary"
        class="viu-button"
        style="margin-start: 32px"
        >Reset</sl-button
      >
    </form>

    <sl-dialog label="Dialog" class="dialog-overview" ref="dialogOverview">
      <div slot="label">Thank you for your interest!</div>
      <div>
        <div v-for="item in formDataCopy" :key="item">{{ item }}</div>
      </div>
      <sl-button slot="footer" variant="primary" class="viu-button"
        >Close</sl-button
      >
    </sl-dialog>
  </div>
</template>

<style lang="scss" scoped>
.body-form {
  margin: auto;
  padding: 42px 0px;
  max-width: 690px;
}

.viu-glasses {
  position: relative;
  width: 100%;
  height: 360px;
  margin-bottom: 32px;
  background: url("https://production-presta-media.shopviu.com/img/product/557/977-the-pioneer-star-gold-black_front_3840x1920.webp");
  background-size: cover;
  background-position: center;
  > span {
    display: inline-block;
    position: absolute;
    bottom: 20px;
    right: 20px;
    padding: 8px 16px;
    background-color: $white;
    color: $black;
  }
  &:hover {
    > span {
      background-color: $black;
      color: $white;
    }
  }
}

.title {
  text-transform: uppercase;
  margin: 0;
  padding: 0;
  line-height: 100%;
}
.subtitle {
  margin: 4px 0px 42px 0px;
  font-size: 1.42rem;
}

.viu-button::part(base) {
  background: var(--sl-color-neutral-0);
  border: solid 1px $black;
  border-radius: 0;
  text-transform: uppercase;
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
