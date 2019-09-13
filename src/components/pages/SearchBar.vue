<template lang="html">
  <v-container grid-list-xs,sm,md,lg,xl>
    <v-form ref="form">
      <v-container grid-list-xs,sm,md,lg,xl>
        <v-layout row justify-center align-baseline>
          <v-flex xs12 md4 lg6 ma-1>
            <v-text-field
            name="keyWord"
            label="Search something"
            id="keyWord"
            v-model="keyWord"
            :rules="inputRules"
            >
            </v-text-field>
          </v-flex>
          <v-flex xs12 md3 lg4 ma-1>
          <v-select
            v-model="selected"
            :items="selectItems"
            item-text="name"
            item-value="itemValue"
            return-object
            >
          </v-select>
          </v-flex>
          <v-flex xs12 md4 lg2 text-center ma-1 >
            <v-btn  :color="buttonColor"  @click="search()">
              <v-icon left>search</v-icon>
              <span>Search</span>
            </v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-form>
  </v-container>
</template>

<script>
export default {
  name: 'SearchBar',
  data() {
    return {
      keyWord: '',
      inputRules: [
        v => v.length >= 5 || 'Minimum length is 5 characters'
      ],
      selected: {
        name: "Movie",
        itemValue: "movie"
      },
      selectItems: [{
          name: "Movie",
          itemValue: "movie"
        },
        {
          name: "TV-Show",
          itemValue: "tv"

        },
        {
          name: "Person",
          itemValue: "person"
        }
      ]
    }
  },
  methods: {
    search() {
      if (this.$refs.form.validate()) {
        this.$emit('searchMovie', {
          keyWord: this.keyWord,
          searchType: this.selected.itemValue
        });
      }
    }
  },
  computed: {
    buttonColor() {
      if (this.keyWord.length >= 5) {
        return 'primary';
      }
      return 'disabled';
    }
  }

}
</script>

<style lang="css" scoped>
</style>
