<template lang="html">
  <v-card  flat class="text-xscenter ma-3">
    <v-layout column>
      <div class="container">
        <v-img class="img" :src="profilePath"></v-img>
        <div class="title">
          <v-card-title class="title-text">
            {{ name }}
          </v-card-title>
          <p class="desc-text">
            {{ birthday }}
          </p>
          <p class="desc-text">
            {{ placeOfBirth }}
          </p>
        </div>
      </div>
      <v-card-text class="justify-center">
        <div class="">
          {{ biography }}
        </div>
      </v-card-text>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  name: 'PersonCard',
  props: {
    id: Number,
    name: String,
    profilePath: String,
    birthday: String,
    biography: String,
    placeOfBirth: String
  },
}
</script>

<style lang="css" scoped>
.container{
  display:flex;
  justify-content: space-between;
  align-items:center;
}
.img{
  width: 35%;
}
.title{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  width:50%;
}
.title-text{
  font-size: 42px;
  margin-bottom: 10px;
}
.desc-text{
  font-size: 20px;
  color: #1976d2;
  font-weight: 300;
}
</style>
