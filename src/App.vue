<template>
  <div id="my-strictly-unique-vue-image-lightbox-carousel" style="text-align: center;">
    <button @click="openLightbox">Open Lightbox</button>

    <vue-image-lightbox-carousel
      ref="lightbox"
      :show="showLightbox"
      @close="showLightbox = false"
      :images="images"
      @change="changeImage"
      >
    </vue-image-lightbox-carousel>
  </div>
</template>

<script>
import VueImageLightboxCarousel from './components/VueImageLightboxCarousel'

export default {
  name: 'app',
  data () {
    return {
      showLightbox: false,
      images: [
        {
          path: 'https://s3-us-west-1.amazonaws.com/powr/defaults/image-slider2.jpg',
          caption: 'Elephant',
        },
        {
          path: 'https://i-kinhdoanh.vnecdn.net/2018/06/18/1-1529296929_680x0.jpg',
          caption: 'Messi',
        },
        {
          path: 'https://i-thethao.vnecdn.net/2018/05/27/775162441-MR-2031-8E033EFCEBB928DC12A2A0AA3CEC4C33-21885-1527376486_680x0.jpg',
          caption: 'Bale and Marcelo',
        },
        {
          path: 'https://i-thethao.vnecdn.net/2018/05/27/Screen-Shot-2018-05-27-at-7-1527379562_680x0.png',
          caption: 'Madrid crowd',
        },
        {
          path: 'https://i-thethao.vnecdn.net/2018/05/27/000-15E0DG-1527379049_680x0.jpg',
          caption: 'Zidane',
        },
        {
          path: 'https://i-thethao.vnecdn.net/2018/05/27/Screen-Shot-2018-05-27-at-7-1527379346_680x0.png',
          caption: 'Bale kissed the cup',
        },
        {
          path: 'https://i-thethao.vnecdn.net/2018/05/27/000-15D9SR-1527378710_680x0.jpg',
          caption: 'Ronaldo showed off',
        },
        {
          path: 'https://i-thethao.vnecdn.net/2018/05/27/000-15D9PD-1527378584_680x0.jpg',
          caption: 'Benzema and Varane',
        },
        {
          path: 'https://i-thethao.vnecdn.net/2018/05/27/000-15E01C-1527378364_680x0.jpg',
          caption: 'Nacho',
        },
        {
          path: 'https://i-thethao.vnecdn.net/2018/05/27/000-15D9DX-1527378233_680x0.jpg',
          caption: 'Ramos',
        },
        {
          path: 'https://i-thethao.vnecdn.net/2018/05/27/000-15D921-1527377928_680x0.jpg',
          caption: 'Ceremony',
        },
        {
          path: 'https://i-thethao.vnecdn.net/2018/05/27/000-15D8R8-1527377973_680x0.jpg',
          caption: 'Champion',
        },
        {
          path: 'https://i-thethao.vnecdn.net/2018/05/27/000-15E0FA-1527377507_680x0.jpg',
          caption: 'Kiss',
        },
      ]
    }
  },
  components: {
    VueImageLightboxCarousel
  },
  methods: {
    openLightbox () {
      this.showLightbox = true
      this.$refs.lightbox.showImage(1)
    },
    changeImage (index) {
      console.log(index)
    }
  }
}
</script>
<style lang="css" scoped>
</style>
