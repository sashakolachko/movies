<template lang="html">
<v-container grid-list-xs,sm,md,lg,xl>
  <SearchBar />
  <v-layout row  justify-space-between >
    <v-flex xs12 sm6 md4 lg3 v-for="movie in movies" :key="movie.id" v-if="renderPeople == false">
    <Movie
      :id="movie.id"
      :popularity="movie.popularity"
      :posterPath="movie.poster_path"
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
      :profilePath="person.profile_path"
    />
    </v-flex>
  </v-layout>

</v-container>
</template>

<script>
import SearchBar from './SearchBar.vue';
import Movie from './movie/Movie.vue';
import Person from './person/Person.vue';
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
    key: key,
  }),
  computed: {
    people() {
      return this.$store.state.people;
    },
    movies() {
      return this.$store.state.movies;
    },
    renderPeople() {
      return this.$store.state.renderPeople;
    }
  }
}
</script>

<style lang="css" scoped>
</style>
