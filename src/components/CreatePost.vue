<template>
      <b-container>
        <h2>Create Post</h2>
        <b-alert variant="success" :show="formSubmitted">Form Submitted</b-alert>
        <b-form @submit="onSubmit" @reset="onReset">
        <b-form-group
          id="input-title-label"
          label="Title:"
          label-for="input-title"
        >
          <b-form-input
            id="input-title"
            v-model="form.title"
            type="text"
            required
            placeholder="Enter Post Title"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Description:" label-for="input-description">
          <b-form-input
            id="input-desc-label"
            v-model="form.body"
            required
            placeholder="Enter post description"
          ></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
      <b-card class="mt-3" header="Form Data Result">
        <pre class="m-0">{{ form }}</pre>
      </b-card>
      </b-container>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          title: '',
          body: '',
          userId: 1
        },
        formSubmitted: false
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        axios.post('https://jsonplaceholder.typicode.com/posts/', this.form)
        .then(response => {
            console.log('response, ', response)
            if( response.status == 201 ){
              this.formSubmitted = true;
            }
            //this.posts = response.data;
        })
        .catch(error => {
            console.log(error)
        })
        .finally(() => {
            //
        })
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.title = ''
        this.form.body = ''
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
