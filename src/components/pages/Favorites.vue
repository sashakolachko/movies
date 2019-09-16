<template lang="html">
  <v-container grid-list-xs,sm,md,lg,xl>
      <h3 v-if="movies.length > 0" class="text-center headline ma-5">Favorites movies </h3>
      <h3 v-else class="text-center headline ma-5">You has no favorites movies</h3>
      <v-layout row  justify-space-around >
        <v-flex xs12 sm6 md4 lg3 v-for="movie in movies" :key="movie.id">
          <MovieFavorite
            :id="movie.id"
            :popularity="movie.popularity"
            :title="movie.title"
            :posterPath="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
            :releaseDate="movie.release_date"
          />
        </v-flex>
      </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios';
import key from '../../key.js';
import MovieFavorite from './MovieFavorite.vue';
export default {
  name: 'Favorites',
  components: {
    MovieFavorite
  },
  data: () => ({
    key: key,
    sessionId: null,
    accountId: null,
    movies: [],
  }),
  mounted() {
    this.sessionId = localStorage.getItem('sessionId');
    this.accountId = localStorage.getItem('accountId');
    axios.get(`https://api.themoviedb.org/3/account/${this.accountId}/favorite/movies?api_key=${this.key}&session_id=${this.sessionId}`)
      .then(response => this.movies = response.data.results);
  }
}
</script>

<style lang="css" scoped>
</style>
