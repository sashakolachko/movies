<template lang="html">
  <v-card  flat class="text-xs-center ma-3" height="98%">
    <v-img :src="posterPath"></v-img>
    <v-card-title class="primary-title  justify-center">
      {{ title }}
    </v-card-title>
    <v-card-text class="justify-center">
      <div class="text-center title-date" >
        <p>{{ releaseDate }}</p>
      </div>
      <div class="mt-3">
        <v-icon class="mr-1" color="primary">favorite</v-icon>
        <span class="ml-2">{{ popularity }}</span>
      </div>
      <div class="">
        <v-icon class="mr-1" color="primary">thumbs_up_down</v-icon>
        <span class="ml-2" >{{ voteAverage }}</span>
      </div>
      <div class="">
        <v-icon class="mr-1" color="black">supervisor_account</v-icon>
        <span class="ml-2">{{ voteCount }}</span>
      </div>
      <div class="body-2 mt-5">
        {{ overview }}
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'MovieCard',
  props: {
    id: Number,
    title: String,
    popularity: Number,
    releaseDate: String,
    posterPath: String,
    overview: String,
    voteAverage: Number,
    voteCount: Number
  }
}
</script>

<style lang="css">
.title-date{
  font-size: 17px;
  font-weight: 300;
  color:#277ed5;
}
</style>
