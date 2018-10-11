<template>
  <transition name="modal">
    <div class="modal-mask" @click="close" v-show="show">
      <div class="modal-container" @click.stop>
        <div class="vue-lightbox-content">
          <div class="vue-lightbox-header">
            <span></span>
            <button type="button" title="Close (Esc)" class="vue-lightbox-close" @click="close">
              <span>
                <svg fill="white" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 512 512"><path d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4 L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1 c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1 c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z"></path></svg>
              </span>
            </button>
          </div>
          <div class="vue-lightbox-figure">
            <swiper class="vue-lightbox-figure" :options="swiperOptionTop" ref="swiperTop">
              <swiper-slide v-for="(image, index) in images" :key="index">
                <img class="vue-lightbox-modal-image" :src="image.path" srcset="">
                <div class="vue-lightbox-info" v-if="showCaption">
                  <h4>{{image.caption}}</h4>
                </div>
              </swiper-slide>
            </swiper>
            <div class="vue-lightbox-footer">
              <div class="vue-lightbox-footer-info"></div>
              <div class="vue-lightbox-footer-count">
                {{activeIndex + 1}}/{{images.length}}
              </div>
            </div>
          </div>
        </div>

        <div class="vue-lightbox-thumbnail-wrapper" v-show="images.length > 1 && showThumbs">
          <div class="vue-lightbox-thumbnail">
            <button type="button" title="Previous" class="swiper-button-prev vue-lightbox-thumbnail-arrow vue-lightbox-thumbnail-left"><span><svg fill="white" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 512 512"><path d="M213.7,256L213.7,256L213.7,256L380.9,81.9c4.2-4.3,4.1-11.4-0.2-15.8l-29.9-30.6c-4.3-4.4-11.3-4.5-15.5-0.2L131.1,247.9 c-2.2,2.2-3.2,5.2-3,8.1c-0.1,3,0.9,5.9,3,8.1l204.2,212.7c4.2,4.3,11.2,4.2,15.5-0.2l29.9-30.6c4.3-4.4,4.4-11.5,0.2-15.8 L213.7,256z"></path></svg></span></button>

            <swiper :options="swiperOptionThumbs" ref="swiperThumbs">
              <swiper-slide v-for="(image, index) in images" :key="index">
                <div class="vue-lightbox-modal-thumbnail vue-lightbox-modal-thumbnail-active" :data-src="image.path" v-lazy:background-image="image.path" :style="`background-image: url(&quot;${image.path}&quot;);`"></div>
              </swiper-slide>
            </swiper>

            <button type="button" title="Next" class="swiper-button-next vue-lightbox-thumbnail-arrow vue-lightbox-thumbnail-right"><span><svg fill="white" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 512 512"><path d="M298.3,256L298.3,256L298.3,256L131.1,81.9c-4.2-4.3-4.1-11.4,0.2-15.8l29.9-30.6c4.3-4.4,11.3-4.5,15.5-0.2l204.2,212.7 c2.2,2.2,3.2,5.2,3,8.1c0.1,3-0.9,5.9-3,8.1L176.7,476.8c-4.2,4.3-11.2,4.2-15.5-0.2L131.3,446c-4.3-4.4-4.4-11.5-0.2-15.8 L298.3,256z"></path></svg></span></button>
          </div>
        </div>

        <button type="button" title="Previous" class="swiper-button-prev vue-lightbox-arrow vue-lightbox-left">
          <span>
            <svg fill="white" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 512 512"><path d="M213.7,256L213.7,256L213.7,256L380.9,81.9c4.2-4.3,4.1-11.4-0.2-15.8l-29.9-30.6c-4.3-4.4-11.3-4.5-15.5-0.2L131.1,247.9 c-2.2,2.2-3.2,5.2-3,8.1c-0.1,3,0.9,5.9,3,8.1l204.2,212.7c4.2,4.3,11.2,4.2,15.5-0.2l29.9-30.6c4.3-4.4,4.4-11.5,0.2-15.8 L213.7,256z"></path></svg>
          </span>
        </button>
        <button type="button" title="Next" class="swiper-button-next vue-lightbox-arrow vue-lightbox-right">
          <span>
            <svg fill="white" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 512 512" xml:space="preserve"><path d="M298.3,256L298.3,256L298.3,256L131.1,81.9c-4.2-4.3-4.1-11.4,0.2-15.8l29.9-30.6c4.3-4.4,11.3-4.5,15.5-0.2l204.2,212.7 c2.2,2.2,3.2,5.2,3,8.1c0.1,3-0.9,5.9-3,8.1L176.7,476.8c-4.2,4.3-11.2,4.2-15.5-0.2L131.3,446c-4.3-4.4-4.4-11.5-0.2-15.8 L298.3,256z"></path></svg>
          </span>
        </button>
      </div>
    </div>
  </transition>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {

  name: 'Modal',

  props: {
    show: {
      type: Boolean,
      default: false
    },
    showThumbs: {
      type: Boolean,
      default: true
    },
    showCaption: {
      type: Boolean,
      default: true
    },
    images: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  data () {
    return {
      activeIndex: 0,
      swiperOptionTop: {
        centeredSlides: true,
        slidesPerView: 1,
        navigation: {
          nextEl: '.vue-lightbox-right',
          prevEl: '.vue-lightbox-left'
        }
      },
      swiperOptionThumbs: {
        spaceBetween: 10,
        slidesPerView: 4,
        centeredSlides: true,
        touchRatio: 0.2,
        slideToClickedSlide: true,
        navigation: {
          nextEl: '.vue-lightbox-thumbnail-right',
          prevEl: '.vue-lightbox-thumbnail-left'
        }
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  methods: {
    close () {
      this.$emit('close')
    },
    showImage (index = 0) {
      this.$nextTick(() => {
        this.$refs.swiperTop.swiper.slideTo(index)
        this.$refs.swiperThumbs.swiper.slideTo(index)
        this.activeIndex = index
      })
    }
  },
  mounted () {
    document.addEventListener('keydown', (e) => {
      if (this.show && e.keyCode == 27) {
        this.close()
      }
    })
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.swiper
      const swiperThumbs = this.$refs.swiperThumbs.swiper
      swiperTop.controller.control = swiperThumbs
      swiperThumbs.controller.control = swiperTop
      swiperTop.on('slideChange', () => {
        this.$emit('change', swiperTop.activeIndex)
        this.activeIndex = swiperTop.activeIndex
      })
    })
  }
}
</script>

<style lang="css" scoped>
* {
  box-sizing: border-box;
}
.modal-mask {
  color: #fff;
  background-color: rgba(0, 0, 0, .8);
  display: flex;
  position: fixed;
  padding: 10px;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  box-align: center;
  box-pack: center;
  transition: opacity .3s ease;
  box-sizing: border-box;
}
.modal-container {

}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.swiper-container {
  background-color: #000;
}
.swiper-slide {
  background-size: cover;
  background-position: center;
}
.swiper-button-prev.swiper-button-disabled, .swiper-button-next.swiper-button-disabled {
  opacity: 0;
}

/*
 * Lightbox
 */

* {
  box-sizing: border-box;
}
.vue-lightbox-content {
  margin-bottom: 60px;
  max-width: calc(100vw - 30px);
  position: relative;
}
.vue-lightbox-header {
  display: flex;
  height: 40px;
  justify-content: space-between;
}
.vue-lightbox-close {
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  position: relative;
  top: 0;
  vertical-align: bottom;
  height: 40px;
  margin-right: -10px;
  padding: 10px;
  width: 40px;
}
.vue-lightbox-figure {
  margin: 0;
  display: block;
  position: relative;
}
.vue-lightbox-figure .swiper-slide {
  margin: auto;
}
img.vue-lightbox-modal-image {
  max-height: calc(100vh - 140px);
  cursor: pointer;
  display: block;
  height: auto;
  margin: 0 auto;
  max-width: 100%;
  user-select: none;
}
.vue-lightbox-info {
  visibility: initial;
  position: absolute;
  bottom: 0;
  color: #fff;
  background-color: rgba(0,0,0,.7);
  height: 40px;
  width: 100%;
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
  text-align: center;
}
.vue-lightbox-info h4 {
  font-size: 18px;
  font-weight: 500;
  margin-top: 10px;
  margin-bottom: 10px;
}
.vue-lightbox-footer {
  box-sizing: border-box;
  color: #fff;
  cursor: auto;
  display: flex;
  left: 0;
  line-height: 1.3;
  padding: 5px 0;
  justify-content: space-between;
}
.vue-lightbox-footer-info {
  display: block;
  flex: 1 1 0;
}
.vue-lightbox-footer-count {
  color: hsla(0,0%,100%,.75);
  font-size: .85em;
  padding-left: 1em;
}

.vue-lightbox-thumbnail-wrapper {
  bottom: 10px;
  height: 50px;
  left: 0;
  margin: 0 auto;
  position: absolute;
  right: 0;
  text-align: center;
  top: auto;
}
.vue-lightbox-thumbnail {
  bottom: 10px;
  height: 50px;
  padding: 0 50px;
  text-align: center;
  white-space: nowrap;
  display: inline-block;
  position: relative;
  width: 300px;
}

.vue-lightbox-thumbnail .swiper-container {
  background: transparent;
}

.vue-lightbox-thumbnail-arrow {
  background: none;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  padding: 10px;
  position: absolute;
  top: 50%;
  user-select: none;
  height: 50px;
  margin-top: -23px;
  width: 30px;
}
.vue-lightbox-thumbnail-left {
  left: 10px;
}
.vue-lightbox-thumbnail-right {
  right: 10px;
}
.vue-lightbox-modal-thumbnail, .vue-lightbox-modal-thumbnail-active {
  background-position: 50%;
  background-size: cover;
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  height: 50px;
  margin: 2px;
  overflow: hidden;
  width: 50px;
  float: left;
}
.vue-lightbox-modal-thumbnail {
  box-shadow: inset 0 0 0 1px hsla(0,0%,100%,.2);
}
.swiper-slide-active .vue-lightbox-modal-thumbnail {
  box-shadow: inset 0 0 0 2px #fff;
}


.vue-lightbox-arrow {
  background: none;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  padding: 10px;
  position: absolute;
  top: 50%;
  height: 120px;
  margin-top: -60px;
  user-select: none;
  width: 40px;
}
.vue-lightbox-left {
  left: 10px;
}
.vue-lightbox-right {
  right: 10px;
}

@media (min-width: 1200px) {
  .vue-lightbox-content {
    max-width: 1024px;
  }
}
@media (min-width: 768px) {
  .vue-lightbox-arrow {
    width: 70px;
  }
}
@media (min-width: 500px) {
  .vue-lightbox-thumbnail-arrow {
    width: 40px;
  }
}
</style>
