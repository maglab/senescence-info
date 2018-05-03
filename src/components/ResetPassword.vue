<template>
  <div>
    <div class="reset-password-component">
      <h1>Reset Password</h1>
      <form class="form-reset-password">
        <div class="form-group">
          <label>New password</label>
          <input class="form-control" type="password" v-model="user.password" placeholder="Password">
        </div>
        <div class="form-group">
          <label>Confirm password</label>
          <input class="form-control" type="password" v-model="user.confirmPassword" placeholder="Confirm Password">
        </div>
        <button type="button" class="btn btn-info" v-on:click="resetPassword()">Reset Password</button>
      </form>
    </div>
  </div>
</template>
<script type="text/javascript">

  export default {
    name: 'ResetPassword',
    data () {
      return {
        user: {
          password: '',
          confirmPassword: ''
        }
      }
    },
    methods: {
      resetPassword: function () {
        if (!this.user.password || !this.user.confirmPassword) {
          return 0
        }
  
      }
    }
  }
</script>
<style>
.reset-password-component {
  margin-top: 50px;
}

.form-reset-password {
    max-width: 330px;
    padding: 15px;
    margin: 0 auto;
}
</style>
