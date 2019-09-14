import VueRouter from 'vue-router';

import SearchMovies from './components/pages/SearchMovies.vue';
import NotFound from './components/pages/NotFound.vue'
import About from './components/pages/About.vue';
import Trending from './components/pages/Trending.vue';
import DetailedMovie from './components/pages/DetailedMovie.vue';
import DetailedPerson from './components/pages/DetailedPerson.vue';
import Genres from './components/pages/Genres.vue';
import Login from './components/pages/Login.vue';

export default new VueRouter({
  mode: 'history',
  routes: [{
      path: '/',
      redirect: {
        name: "searchMovie"
      }
    },
    {
      path: '/movies',
      component: SearchMovies,
      name: "searchMovie"
    },
    {
      path: '/login/:requestToken?',
      component: Login,
      name: "Login"
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/movies/:movieId?',
      name: "DetailedMovie",
      component: DetailedMovie
    },
    {
      path: '/people/:personId?',
      name: "DetailedPerson",
      component: DetailedPerson
    },
    {
      path: '/trending',
      name: "Trending",
      component: Trending
    },
    {
      path: '/genres',
      name: "Genres",
      component: Genres
    },
    {
      path: '*',
      component: NotFound,
      props: {
        msg: "Cannot find the page you requested"
      }
    }
  ]
});