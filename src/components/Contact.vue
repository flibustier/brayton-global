<template>
  <transition appear
    name="custom-classes-transition"
    enter-active-class="animated fadeIn"
  >
    <div id="brg-intro-section" class="section-overlay" >
      <div class="brg-intro-cover
      text-center" data-stellar-background-ratio="0.5">
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-md-offset-2 float-overlay">
              <h2>Contact Us</h2>
              <h3>info@braytonglobal.com</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import intro from './Intro'

  export default {
    components: {
      intro
    }
  }
</script>

<style scoped>
  #brg-intro-section {
    background-image: url('../assets/img/cover/contact_intro.jpg');
  }
</style>
