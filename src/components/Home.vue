<template>
  <div>
    <intro headline="" image="brg_intro.jpg"></intro>

    <div id="brg-media-section">
      <div class="container">
        <div class="row col-md-8 col-md-offset-2 heading-section">
          <p>
            At <b>Brayton Global</b>,
            we’re committed to providing first-in-class ICT, audit,
            consultancy services to our public and private clients
            in Belgium and internationally.
          </p>
        </div>
        <div class="row">
          <div class="col-md-7">
            <div id="cover0" class="brg-cover">
              <div class="desc">
                <p>We are looking for you! Available Positions at :</p>
                <router-link to="/jobs">
                  <span>Brayton Hub</span>
                </router-link>
              </div>
            </div>
          </div>
          <div class="col-md-5">
            <div class="brg-cover">

              <div class="brg-cover-hero">
                <div id="cover2" class="brg-cover-thumb"></div>
                <div class="desc-thumb">
                  <p>Eu Talent Service</p>
                  <router-link to="/hub">
                    <span>Brayton Hub</span>
                  </router-link>
                </div>
              </div>

              <div class="brg-cover-hero">
                <div id="cover3" class="brg-cover-thumb"></div>
                <div class="desc-thumb">
                  <p>Consultancy</p>
                  <router-link to="/strategy">
                    <span>IT Strategy</span>
                  </router-link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import intro from './Intro';

  export default {
    components: {
      intro
    },
  }
</script>

<style scoped>
  #cover0 {
    background-image: url('../assets/images/sm_preview.png');
  }

  #cover2 {
    background-image: url('../assets/img/cover/hub_preview.png');
  }

  #cover3 {
    background-image: url('../assets/images/consult_preview.png');
  }

  h3, b {
    color: #DD7520;
  }

  .heading-section {
    margin-bottom: 2em;
    height: 150px;
  }
</style>
