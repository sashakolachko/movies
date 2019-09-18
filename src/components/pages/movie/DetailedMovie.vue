<template lang="html">
  <v-layout justify-center>
    <v-flex xs9 md6 lg5 ma-1>
      <MovieCard
      :id="id"
      :posterPath="`https://image.tmdb.org/t/p/w500${posterPath}`"
      :title="title"
      :releaseDate="releaseDate"
      :popularity="popularity"
      :voteAverage = "voteAverage"
      :voteCount = "voteCount"
      :overview="overview"
      v-if=" id != null"
      />
      <NotFound msg="Requested movie does not exist" v-else />
    </v-flex>
  </v-layout >
</template>
<script>
import axios from 'axios';
import key from '../../../key.js';

import NotFound from '../NotFound.vue';
import MovieCard from './MovieCard.vue';

export default {
  name: "DetailedMovie",
  components: {
    MovieCard,
    NotFound
  },
  data: () => ({
    id: null,
    popularity: 0,
    posterPath: '',
    title: '',
    voteAverage: 0,
    voteCount: 0,
    overview: '',
    releaseDate: '',
    key: key
  }),
  mounted() {
    axios.get(`https://api.themoviedb.org/3/movie/${this.$route.params.movieId}?api_key=${this.key}`)
      .then(response => {
        this.id = response.data.id;
        this.popularity = response.data.popularity;
        this.posterPath = response.data.poster_path;
        this.voteCount = response.data.vote_count;
        this.title = response.data.title;
        this.voteAverage = response.data.vote_average;
        this.overview = response.data.overview;
        this.releaseDate = response.data.release_date;

      })
  }
}
</script>

<style lang="css" scoped>

</style>
