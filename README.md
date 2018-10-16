

# vue-image-lightbox
A simple image lightbox carousel component for Vuejs
[NPM Package](https://www.npmjs.com/package/vue-image-lightbox-carousel)

[Demo!](https://codepen.io/lekhang2512/pen/vVmamJ)

![enter image description here](https://raw.githubusercontent.com/lekhang2512/vue-image-lightbox-carousel/master/src/assets/demo.png)

## Development (NPM / Yarn)
```
npm run dev
yarn dev
```

## Install

#### NPM / Yarn

Install the package:

```
npm install vue-image-lightbox-carousel
yarn add vue-image-lightbox-carousel
```

Then import it in your project

```javascript
import VueImageLightboxCarousel from 'vue-image-lightbox-carousel'

export default {
  components: {
    VueImageLightboxCarousel,
  },
}
```

#### Browser global

```html
<script src="path/to/vue.js"></script>
<script src="path/to/dist/vue-image-lightbox-carousel.js"></script>
```

## Usage

You can simply view [App.vue](https://github.com/lekhang2512/vue-image-lightbox-carousel/blob/master/src/App.vue) to see how to use **vue-image-lightbox-carousel**

How to use:
```html
<vue-image-lightbox-carousel :images="images"></vue-image-lightbox-carousel>
```

`images` has the structure:
```javascript
[
  {
    path: 'http://example.com/image.jpg',
    caption: 'caption to display. receive', // Optional
  }
]
```
## Example
```html
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
import VueImageLightboxCarousel from 'vue-image-lightbox-carousel'

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
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

```
## Options

### Props
<table>
  <thead>
    <tr>
      <th>name</th>
      <th>type</th>
      <th>default</th>
      <th>description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>images</td>
      <td>Array</td>
      <td>required</td>
      <td>Image array to display</td>
    </tr>
    <tr>
      <td>show</td>
      <td>Boolean</td>
      <td>true</td>
      <td>Whether to show lightbox or not at the beginning</td>
    </tr>
    <tr>
      <td>showThumbs</td>
      <td>Boolean</td>
      <td>true</td>
      <td>Whether to show thumbnails or not</td>
    </tr>
    <tr>
      <td>showCaption</td>
      <td>Boolean</td>
      <td>false</td>
      <td>Whether to show caption or not</td>
    </tr>
  </tbody>
</table>

### Methods
<table>
  <thead>
    <tr>
      <th>name</th>
      <th>arguments</th>
      <th>description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>showImage</td>
      <td>(index)</td>
      <td>Show the image at index</td>
    </tr>
  </tbody>
</table>

### Events
<table>
  <thead>
    <tr>
      <th>name</th>
      <th>arguments</th>
      <th>description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>close</td>
      <td>()</td>
      <td>Close lightbox</td>
    </tr>
    <tr>
      <td>change</td>
      <td>(index)</td>
      <td>Image change at index</td>
    </tr>
  </tbody>
</table>

## Dependencies
- [vue-awesome-swiper](https://github.com/surmon-china/vue-awesome-swiper)
- [vue-lazyload](https://github.com/hilongjw/vue-lazyload)

## References
- [vue-image-lightbox](https://github.com/pexea12/vue-image-lightbox)
