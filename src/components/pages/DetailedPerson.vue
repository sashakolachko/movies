<template lang="html">
  <v-layout justify-center>
    <v-flex xs10 md9 lg9 ma-1>
      <PersonCard
      :id="id"
      :name="name"
      :profilePath="`https://image.tmdb.org/t/p/w500${profilePath}`"
      :birthday="birthday"
      :biography="biography"
      :placeOfBirth="placeOfBirth"
      v-if=" id != null"
      />
      <NotFound msg="Requested person does not exist" v-else />
    </v-flex>
  </v-layout >
</template>

<script>
import axios from 'axios';
import key from '../../key.js';

import NotFound from './NotFound.vue';
import PersonCard from './PersonCard.vue';

export default {
  name: 'DetailedPerson',
  components: {
    PersonCard,
    NotFound
  },
  data: () => ({
    id: null,
    name: '',
    profilePath: '',
    birthday: '',
    biography: '',
    placeOfBirth: '',
    key: key
  }),
  mounted() {
    axios.get(`https://api.themoviedb.org/3/person/${this.$route.params.personId}?api_key=${this.key}`)
      .then(response => {
        this.id = response.data.id;
        this.name = response.data.name;
        this.profilePath = response.data.profile_path;
        this.birthday = response.data.birthday;
        this.biography = response.data.biography;
        this.placeOfBirth = response.data.place_of_birth;
      })

  }
}
</script>

<style lang="css" scoped>
</style>
