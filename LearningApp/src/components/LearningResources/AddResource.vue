<template>
  <BaseDialog v-if="inIsInvalid" title="Invalid Input" @close="confirmError">
    <template #default>
      <p> WRONG INPUT </p>
      <p> DO IT AGAIN </p>
    </template>
    <template #actions>
      <BaseButton @click="confirmError">Okay</BaseButton>
    </template>
  </BaseDialog>
  <BaseCard>
    <form @submit.prevent="submitData">
      <div class="form-control">
        <label for="title">Title</label>
        <input id="title" name="title" type="text" ref="inTitle" />
      </div>
      <div class="form-control">
        <label for="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="3"
          ref="inDesc"
        ></textarea>
      </div>
      <div class="form-control">
        <label for="link">Link</label>
        <input id="link" name="link" type="url" ref="inLink" />
      </div>
      <div>
        <BaseButton type="submit"> Add Resource </BaseButton>
      </div>
    </form>
  </BaseCard>
</template>

<script>
  export default {
    inject: ['addResource'],
    data () {
      return {
        inIsInvalid: false,
      };
    },
    methods: {
      submitData() {
        const enteredTitle = this.$refs.inTitle.value;
        const enteredDesc = this.$refs.inDesc.value;
        const enteredLink = this.$refs.inLink.value;

        if (
          enteredTitle.trim() === '' ||
          enteredDesc.trim() === '' ||
          enteredLink.trim() === ''
        ) {
          this.inIsInvalid = true;
          return;
        }

        this.addResource(enteredTitle, enteredDesc, enteredLink);
      },
      confirmError () {
        this.inIsInvalid = false;
      },
    },
  };
</script>

<style scoped>
  label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
  }

  input,
  textarea {
    display: block;
    width: 100%;
    font: inherit;
    padding: 0.15rem;
    border: 1px solid #ccc;
  }

  input:focus,
  textarea:focus {
    outline: none;
    border-color: #3a0061;
    background-color: #f7ebff;
  }

  .form-control {
    margin: 1rem 0;
  }
</style>