<template lang="html">
  <v-container grid-list-xs,sm,md,lg,xl>
    <v-switch v-model="showTV" label="TV"></v-switch>
      <h3 v-if="movies.length > 0" class="text-center headline ma-5">Favorites</h3>
      <h3 v-else class="text-center headline ma-5">You has no favorites</h3>
      <v-layout row  justify-space-around >
        <v-flex xs12 sm6 md4 lg3 v-for="movie in favMovies" :key="movie.id">
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
import MovieFavorite from './movie/MovieFavorite.vue';
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
    showTV: false
  }),
  methods: {
    fetchFavorites() {
      if (this.showTV) {
        this.$store.commit('setFavType', 'tv');
      } else {
        this.$store.commit('setFavType', 'movies');
      }
      axios.get(`https://api.themoviedb.org/3/account/${this.accountId}/favorite/${this.$store.state.favType}?api_key=${this.key}&session_id=${this.sessionId}`)
        .then(response => this.$store.commit('setFavMovies', response.data.results));
    }
  },
  mounted() {
    this.sessionId = localStorage.getItem('sessionId');
    this.accountId = localStorage.getItem('accountId');
    this.fetchFavorites();
  },
  computed: {
    favMovies() {
      return this.$store.state.favMovies;
    }
  },
  watch: {
    showTV() {
      this.fetchFavorites();
    }
  }
}
</script>

<style lang="css" scoped>
</style>
