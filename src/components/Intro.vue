<template>
  <transition appear
    name="custom-classes-transition"
    enter-active-class="animated fadeIn"
  >
    <div id="brg-intro-section">
      <div class="brg-intro-cover text-center" data-stellar-background-ratio="0.5"
      :style="{ backgroundImage: 'url(' + imagePath(image) + ')' }">
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-md-offset-2 float-overlay">
              <h2>{{ headline }}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>

</template>

<script>
  export default {
    props: ['headline', 'image'],

    methods: {
      imagePath: (name) => require('../assets/img/cover/' + name)
    },
  }
</script>

<style scoped>

</style>
