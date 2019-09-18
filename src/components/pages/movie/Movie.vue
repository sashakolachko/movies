<template lang="html">
  <v-card  flat class="text-xs-center ma-3" height="98%">
    <v-img :src="posterPath"></v-img>
    <v-card-title class="headline justify-center">
      {{ title }}
    </v-card-title>
    <v-card-text class="justify-center">
      <div class="body-1 black--text">
        {{ releaseDate }}
      </div>
      <v-icon class="mr-1 mt-2" color="primary">favorite</v-icon>
      <span>{{ popularity }}</span>
      <div class="mt-2" v-if="authorized == true">
        <v-dialog v-model="dialog" width="500">
          <template v-slot:activator="{ on }">
            <v-icon v-on="on"  @click="markFavorite()" class="mr-1 favorite-icon" color="red">favorite_border</v-icon>
            <span>Save to favorite</span>
          </template>
          <v-card>
            <v-card-title class="headline cyan lighten-5" primary-title >
              {{ title }}
            </v-card-title>

            <v-card-text class="mt-5 dialog-text">
              This movie added to favorites
              <p class="mt-3"><router-link class="router-link" to="/favorites">See all favorites</router-link></p>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <div class="flex-grow-1"></div>
              <v-btn color="primary" text @click="dialog = false">Close</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    </v-card-text>
    <v-card-actions class="justify-center ">
      <v-btn color="primary" @click="goToMovie(id)">See more</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import axios from 'axios';
import key from '../../../key.js';
export default {
  name: 'Movie',
  props: {
    id: Number,
    title: String,
    popularity: Number,
    releaseDate: String,
    posterPath: String
  },
  data: () => ({
    key: key,
    sessionId: null,
    dialog: false,
  }),
  methods: {
    goToMovie(id) {
      this.$router.push({
        name: "DetailedMovie",
        params: {
          movieId: id
        }
      });
    },
    markFavorite() {
      axios.post(`https://api.themoviedb.org/3/account/${localStorage.getItem('accountId')}/favorite?api_key=${this.key}&session_id=${this.sessionId}`, {
          "media_type": this.$store.state.searchType,
          "media_id": this.id,
          "favorite": true
        })
        .then(response => {});
    }
  },
  computed: {
    authorized() {
      return this.sessionId ? true : false;
    }
  },
  mounted() {
    this.sessionId = localStorage.getItem('sessionId');
  }
}
</script>

<style lang="css" scoped>
.favorite-icon:hover{
  cursor: pointer;
}
.dialog-text{
  font-size: 18px;
}
</style>
