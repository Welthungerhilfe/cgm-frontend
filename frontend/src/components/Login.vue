<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-6">
        <form>
          <div class="form-group"></div>
          <b-input-group prepend="Username" class="mt-3">
            <b-form-input v-model="loginForm.username"></b-form-input>
          </b-input-group>
          <b-input-group prepend="Password" class="mt-3">
            <b-form-input v-model="loginForm.password"></b-form-input>
          </b-input-group>
          <button type="submit" v-on:click="login()" class="btn btn-primary margin-top">Submit</button>
        </form>
      </div>
      <div class="col-md-3"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  components: {},
  data: function() {
    return {
      loginForm: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    login() {
      return 0;
    }
  }
};
</script>

<style lang="scss" scoped>
.margin-top {
  margin-top: 1rem;
}
</style>
