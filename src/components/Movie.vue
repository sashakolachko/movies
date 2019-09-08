<template lang="html">
  <v-card  flat class="text-xs-center ma-3" height="98%">
    <v-img :src="posterPath"></v-img>
    <v-card-title class="headline">
      {{ title }}
    </v-card-title>
    <v-card-text>
      <div class="body-1 black--text">
        {{ releaseDate }}
      </div>
      <v-icon class="mr-1">favorite</v-icon>
      <span>{{ popularity }}</span>
      <div class="body-2">
        {{ overview }}
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'Movie',
  props: {
    id: Number,
    popularity: Number,
    posterPath: String,
    backdropPath: String,
    originalTitle: String,
    title: String,
    voteAverage: Number,
    overview: String,
    releaseDate: String
  }
}
</script>

<style lang="css" scoped>
</style>
