<template lang="html">
  <div>
      <v-toolbar flat>
        <v-toolbar-title>Movies Searcher</v-toolbar-title>

        <div class="flex-grow-1"></div>

        <v-toolbar-items>
          <v-btn text><router-link class="router-link" to="/">Movies</router-link></v-btn>
          <v-btn text><router-link class="router-link" to="/trending">Trending</router-link></v-btn>
          <v-btn text><router-link class="router-link" to="/genres">Genres</router-link></v-btn>
        </v-toolbar-items>

      </v-toolbar>
    </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="css" scoped>
.router-link{
  text-decoration: none;
}
</style>
