<template lang="html">
<v-container grid-list-xs,sm,md,lg,xl>
  <SearchBar @searchMovie="searchMovie"/>
  <v-layout row  justify-space-between >
    <v-flex xs12 sm6 md4 lg3 v-for="movie in movies" :key="movie.id" v-if="renderPeople == false">
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
    <v-flex xs12 sm6 md4 lg3 v-for="person in people" :key="person.id" v-if="renderPeople == true">
    <Person
      :id="person.id"
      :name="person.name"
      :profilePath="`https://image.tmdb.org/t/p/w500${person.profile_path}`"
    />
    </v-flex>
  </v-layout>

</v-container>
</template>

<script>
import SearchBar from './SearchBar.vue';
import Movie from './Movie.vue';
import Person from './Person.vue';
import axios from 'axios';
import key from '../../key.js';
export default {
  name: 'SearchMovies',
  components: {
    SearchBar,
    Movie,
    Person
  },
  data: () => ({
    movies: [],
    people: [],
    renderPeople: false,
    key: key,
  }),
  methods: {
    searchMovie(data) {
      if (data.searchType == 'person') {
        this.renderPeople = true;
        axios.get(`https://api.themoviedb.org/3/search/${data.searchType}?query=${data.keyWord}&api_key=${this.key}`)
          .then(response => this.people = response.data.results);
      } else {
        this.renderPeople = false;
        axios.get(`https://api.themoviedb.org/3/search/${data.searchType}?query=${data.keyWord}&api_key=${this.key}`)
          .then(response => this.movies = response.data.results);
      }
    }
  }
}
</script>

<style lang="css" scoped>
</style>
