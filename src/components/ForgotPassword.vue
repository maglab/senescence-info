<template>
  <div>
    <div class="forgot-password-component">
      <h1>Forgot Password</h1>
      <form class="form-forgot-password">
        <div v-if="!showVerificationForm">
          <div class="form-group">
            <label>Email address</label>
            <input class="form-control" type="email" v-model="user.email" placeholder="Email">
          </div>
          <button type="button" class="btn btn-info" v-on:click="sendEmail()">Send Email</button>
          <br><br>
          <div>
            <router-link to="/login">Remember your password? Login</router-link>
          </div>
        </div>

        <div v-else>
          <div class="form-group">
            <label>Verification code</label>
            <input class="form-control" type="text" v-model="user.verificationCode" placeholder="Verification code">
          </div>
          
          <div class="form-group">
            <button type="button" class="btn btn-info" v-on:click="verifyUser()">Verify</button>
          </div>
          <div class="form-group">
            <button type="button" class="btn btn-primary" :disabled="disableSendEmail" v-on:click="sendEmail()">Resend code</button>
          </div>
          <hr>
          <div v-if="disableSendEmail">
            Wait for {{remainingSeconds}} seconds before resending
          </div>

        </div>
      </form>
    </div>
  </div>
</template>
<script type="text/javascript">
export default {
  name: "ForgotPassword",
  data() {
    return {
      user: {
        email: "",
        verificationCode: ""
      },
      showVerificationForm: false,
      disableSendEmail: false,
      remainingSeconds: 10
    };
  },
  methods: {
    sendEmail: function() {
      var self = this;
      
      this.remainingSeconds = 10;
      this.disableSendEmail = true;
      var secondsInterval = setInterval(function(){
        if(self.remainingSeconds > 0) {          
          self.remainingSeconds = self.remainingSeconds - 1;
        }
      }, 1000);
      setTimeout(function(){
        self.disableSendEmail = false;
        self.remainingSeconds = 10;
        clearInterval(secondsInterval);
      }, 10000)

      if (!this.user.email) {
        return 0;
      }
      this.showVerificationForm = true;
    },
    verifyUser: function() {
      if (!this.user.verificationCode) {
        return 0;
      }
    }
  }
};
</script>
<style>
.forgot-password-component {
  margin-top: 50px;
}

.form-forgot-password {
  max-width: 330px;
  padding: 15px;
  margin: 0 auto;
}
</style>
