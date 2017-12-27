<template>
  <div>
    <intro headline="Partnership" image="partners.jpg"></intro>

    <transition appear
      name="custom-classes-transition"
      enter-active-class="animated fadeInUp"
    >
      <div id="brg-section">
        <div class="container">
          <div class="row">
            <h3 class="col-md-10 col-md-offset-1">
              Our world-wide partners
            </h3>

            <div class="col-md-10 col-md-offset-1">
              <p>
                In a globalized marketspace, the solution to everyday and complex
                challenges can often be found outside of one’s frontiers. Therefor
                <b>Brayton Hub</b> has established a proven international network
                of partners, who are each an absolute leader in their industry,
                country or specialism.
              </p>
            </div>

            <div class="col-md-10 col-md-offset-1">
              <img src="../assets/img/partners_map.png"/>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <shortcut></shortcut>
  </div>
</template>

<script>
  import intro from './Intro';
  import shortcut from './Shortcut';

  export default {
    components: {
      intro,
      shortcut
    },
  }
</script>

<style scoped>
  h3, b {
    color: #DD7520;
  }

  .row {
    margin-top: 3em;
  }

  .row div {
    margin-bottom: 2em;
    margin-top: 2em;
    font-size: 65%;
    text-align: justify;
  }

  img {
      width: 100%;
  }

</style>
