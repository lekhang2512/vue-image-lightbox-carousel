
# vue-image-lightbox
A simple image lightbox carousel component for Vuejs
[NPM Package](https://www.npmjs.com/package/vue-image-lightbox-carousel)

[Demo!]()

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
import VueImageLightboxCarousel from 'vue-image-lightbox'

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

You can simply view [App.vue](https://github.com/pexea12/vue-image-lightbox/blob/master/src/App.vue) to see how to use **vue-image-lightbox-carousel**

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

## Options

### Properties
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
