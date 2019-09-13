<template lang="html">
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm6 md5 lg4 v-for="genre in genres" :key="genre.id">
        <div class="text-center">
          <a href="#" class="genres-text">{{ genre.name }}</a>
        </div>
      </v-flex>
    </v-layout>
</v-container>
</template>

<script>
import axios from 'axios';
import key from '../../key.js';
export default {
  name: 'Genres',
  data: () => ({
    key: key,
    genres: []
  }),
  mounted() {
    axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${this.key}`)
      .then(response => this.genres = response.data.genres);
  }
}
</script>

<style lang="css" scoped>
  .genres-text{
    font-size: 18px;
    text-decoration: none;
  }
</style>
