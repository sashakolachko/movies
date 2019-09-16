<template lang="html">
  <h3>Welcome to login</h3>
</template>

<script>
import key from '../../key.js';
import axios from 'axios';
export default {
  name: 'Login',
  data: () => ({
    key: key
  }),
  mounted() {
    axios.post(`https://api.themoviedb.org/3/authentication/session/new?api_key=${this.key}`, {
        request_token: this.$route.params.requestToken
      })
      .then(response => {
        localStorage.setItem('sessionId', response.data.session_id);
        let sessionId = response.data.session_id;

        axios.get(`https://api.themoviedb.org/3/account?api_key=${this.key}&session_id=${sessionId}`)
          .then(response => localStorage.setItem('accountId', response.data.id));
        this.$router.push('/movies');
      })
  }
}
</script>

<style lang="css" scoped>
</style>
