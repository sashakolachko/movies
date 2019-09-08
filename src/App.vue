<template>
<v-app>
  <v-content>
    <SearchMovies />
  </v-content>
</v-app>
</template>

<script>
import SearchMovies from './components/SearchMovies.vue';

export default {
  name: 'App',
  components: {
    SearchMovies,
  },
  data: () => ({
    //
  }),
};
</script>
