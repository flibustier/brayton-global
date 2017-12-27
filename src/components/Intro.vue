<template>
  <div id="brg-intro-section" class="animate-box" data-animate-effect="fadeIn">
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
