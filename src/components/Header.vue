<template lang="html">
  <div>
      <v-toolbar flat>
        <v-toolbar-title>Movies Searcher</v-toolbar-title>

        <div class="flex-grow-1"></div>

        <v-toolbar-items>
          <v-btn text><router-link class="router-link" to="/">Movies</router-link></v-btn>
          <v-btn text><router-link class="router-link" to="/trending">Trending</router-link></v-btn>
          <v-btn text><router-link class="router-link" to="/genres">Genres</router-link></v-btn>
          <v-btn text v-if="$store.state.authorized"><router-link class="router-link" to="/favorites">Favorites</router-link></v-btn>
          <v-btn v-if="!$store.state.authorized" text color="success" @click="login()">Log in</v-btn>
          <div class="d-flex flex-column"  v-else="$store.state.authorized">
            <p class="ma-0">{{ this.$store.state.username }}</p>
            <v-btn text color="red darken-4" @click="logout()">Log out</v-btn>
          </div>

        </v-toolbar-items>

      </v-toolbar>
    </div>
</template>

<script>
import axios from 'axios';
import key from '../key.js';
export default {
  name: 'Header',
  data: () => ({
    key: key,
    userName: ''
  }),
  methods: {
    login() {
      axios.get(`https://api.themoviedb.org/3/authentication/token/new?api_key=${this.key}`)
        .then(response => {
          let newWindow = window.open(`https://www.themoviedb.org/authenticate/${response.data.request_token}?redirect_to=http://localhost:8080/login/${response.data.request_token}`, "_self");
        })
    },
    logout() {
      localStorage.removeItem('sessionId');
      this.$store.commit('setAuthorized', false);
      if (this.$router.path != '/movies') {
        this.$router.push('/movies');
      }
    }
  },
  mounted() {
    let sessionId = localStorage.getItem('sessionId');
    if (sessionId) {
      this.$store.commit('setAuthorized', true);

      axios.get(`https://api.themoviedb.org/3/account?api_key=${this.key}&session_id=${sessionId}`)
        .then(response => this.$store.commit('setUsername', response.data.username))
    }
  }
}
</script>

<style lang="css" scoped>
.router-link{
  text-decoration: none;
}
</style>
