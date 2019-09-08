<template lang="html">
<v-container grid-list-xs,sm,md,lg,xl>
  <SearchBar @searchMovie="searchMovie"/>
  <v-layout row  justify-space-between>
    <v-flex xs12 sm6 md4 lg3 v-for="movie in movies" :key="movie.id">
    <Movie
      :id="movie.id"
      :popularity="movie.popularity"
      :posterPath="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
      :backdropPath="movie.backdrop_path"
      :originalTitle="movie.original_language"
      :title="movie.title"
      :voteAverage="movie.vote_average"
      :overview="movie.overview"
      :releaseDate="movie.release_date"
    />
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
import SearchBar from './SearchBar.vue';
import Movie from './Movie.vue';
import axios from 'axios';
export default {
  name: 'SearchMovies',
  components: {
    SearchBar,
    Movie
  },
  data: () => ({
    movies: [],
    key: 'da36901d65c3b23d89327f28f21da721'
  }),
  methods: {
    searchMovie(word) {
      axios.get(`https://api.themoviedb.org/3/search/movie?query=${word}&api_key=${this.key}`)
        .then(response => this.movies = response.data.results);
    }
  }
}
// https://image.tmdb.org/t/p/w200/kqjL17yufvn9OVLyXYpvtyrFfak.jpg
</script>

<style lang="css" scoped>
</style>
