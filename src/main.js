import Vue from 'vue'
import App from './App.vue'
import VueImageLightboxCarousel from './components/VueImageLightboxCarousel'
import VueLazyload from 'vue-lazyload'
import loadingImage from './assets/loading.gif'

Vue.use(VueLazyload, {
  preLoad: 1.3,
  loading: loadingImage,
  attempt: 1
})

// if (document.querySelector('#my-strictly-unique-vue-image-lightbox-carousel')) {
//   Vue.component('VueImageLightboxCarousel', VueImageLightboxCarousel)

//   new Vue({
//     el: '#my-strictly-unique-vue-image-lightbox-carousel',
//     render: h => h(App)
//   })
// }

export default VueImageLightboxCarousel
