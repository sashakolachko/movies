import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import key from '../key.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    authorized: false,
    username: '',
    keyWord: '',
    searchType: '',
    movies: [],
    renderPeople: false,
    people: [],
    favType: '',
    favMovies: []
  },
  mutations: {
    setAuthorized(state, somth) {
      state.authorized = somth;
    },
    setUsername(state, username) {
      state.username = username;
    },
    setKeyWord(state, keyWord) {
      state.keyWord = keyWord;
    },
    setSearchType(state, searchType) {
      state.searchType = searchType;
    },
    setFavType(state, somth) {
      state.favType = somth;
    },
    setFavMovies(state, somth) {
      state.favMovies = somth;
    },
    setMoviesAndPeople(state) {
      if (state.searchType == 'person') {
        state.renderPeople = true;
        axios.get(`https://api.themoviedb.org/3/search/${state.searchType}?query=${state.keyWord}&api_key=${key}`)
          .then(response => {
            state.people = response.data.results;
            for (let person of state.people) {
              if (person.profile_path == null) {
                person.profile_path = 'noimage.png';
              } else {
                person.profile_path = `https://image.tmdb.org/t/p/w500${person.profile_path}`;
              }
            }
          });
      } else {
        state.renderPeople = false;
        axios.get(`https://api.themoviedb.org/3/search/${state.searchType}?query=${state.keyWord}&api_key=${key}`)
          .then(response => {
            state.movies = response.data.results;
            for (let movie of state.movies) {
              if (movie.poster_path == null) {
                movie.poster_path = 'noimage.png';
              } else {
                movie.poster_path = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
              }
            }
          });

      }
    }
  },
  actions: {
    setAuthorization(context, userData) {
      context.commit('setAuthorized', userData.status);
      axios.get(`https://api.themoviedb.org/3/account?api_key=${key}&session_id=${userData.sessionId}`)
        .then(response => context.commit('setUsername', response.data.username));
    },
    sendKeyWordData(context, keyWordData) {
      context.commit('setKeyWord', keyWordData.keyWord);
      context.commit('setSearchType', keyWordData.searchType);
    },
    searchMovie(context) {
      context.commit('setMoviesAndPeople');
    }
  }
})