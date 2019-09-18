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
      <div class="mt-2">
        <v-dialog v-model="dialog" width="500">
          <template v-slot:activator="{ on }">
            <v-icon v-on="on" @click="deleteFavorite()" class="mr-1 favorite-icon" color="red">favorite</v-icon>
            <span>Delete from favorite</span>
          </template>
          <v-card>
            <v-card-title class="headline cyan lighten-5" primary-title >
              {{ title }}
            </v-card-title>
            <v-card-text class="mt-5 dialog-text">
              This movie has been deleted from favorites
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
  name: 'MovieFavorite',
  props: {
    id: Number,
    title: String,
    popularity: Number,
    releaseDate: String,
    posterPath: String
  },
  data: () => ({
    key: key,
    dialog: false
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
    deleteFavorite() {
      let favType;
      if (this.$store.state.favType == 'movies') {
        favType = 'movie';
      } else {
        favType = 'tv';
      }
      axios.post(`https://api.themoviedb.org/3/account/${localStorage.getItem('accountId')}/favorite?api_key=${this.key}&session_id=${localStorage.getItem('sessionId')}`, {
          "media_type": favType,
          "media_id": this.id,
          "favorite": false
        })
        .then(response => {});
      let newFav = this.$store.state.favMovies.filter(item => item.id !== this.id);
      this.$store.commit('setFavMovies', newFav);
    }
  }

}
</script>

<style lang="css" scoped>
</style>
