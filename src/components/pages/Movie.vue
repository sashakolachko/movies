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
      <v-icon class="mr-1" color="primary">favorite</v-icon>
      <span>{{ popularity }}</span>
    </v-card-text>
    <v-card-actions class="justify-center ">
      <v-btn color="primary" @click="goToMovie(id)">See more</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'Movie',
  props: {
    id: Number,
    title: String,
    popularity: Number,
    releaseDate: String,
    posterPath: String
  },
  methods: {
    goToMovie(id) {
      this.$router.push({
        name: "DetailedMovie",
        params: {
          movieId: id
        }
      });
    }
  }
}
</script>

<style lang="css" scoped>

</style>
