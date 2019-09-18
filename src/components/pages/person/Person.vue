<template lang="html">
  <v-card  flat class="text-xscenter ma-3" height="98%">
    <v-img :src="profilePath"></v-img>
    <v-card-title class="justify-center">
      {{ name }}
    </v-card-title>
    <v-card-actions class="justify-center">
      <v-btn  color="grey" @click="goToPerson(id)">See more</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'Person',
  props: {
    id: Number,
    name: String,
    profilePath: String,
  },
  methods: {
    goToPerson(id) {
      this.$router.push({
        name: "DetailedPerson",
        params: {
          personId: id
        }
      });
    }
  }
}
</script>
<style lang="css" scoped>
</style>
