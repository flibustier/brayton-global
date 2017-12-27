<template>
  <div>
    <intro headline="" image="brg_intro.jpg"></intro>

    <div id="brg-media-section">
      <div class="container">
        <div class="row animate-box">
          <div class="col-md-8 col-md-offset-2 text-center heading-section">
            <h3>Brayton Global</h3>
            <p>
              At <span class="TDD7520"><b>Brayton Global</b></span>,
              we’re committed to providing first-in-class ICT, audit,
              consultancy services to our public and private clients
              in Belgium and internationally.
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-7 animate-box">
            <div id="cover0" class="brg-cover">
              <div class="desc">
                <p>We are looking for you! Available Positions at :</p>
                <span><a href="#" class="TFFF">Brayton Hub</a></span>
              </div>
            </div>
          </div>
          <div class="col-md-5 animate-box">
            <div class="brg-cover">

              <div class="brg-cover-hero">
                <div id="cover2" class="brg-cover-thumb"></div>
                <div class="desc-thumb">
                  <p>Eu Talent Service</p>
                  <a class="TFFF"  href="hub_index.html">
                      <span>Brayton Hub</span>
                  </a>
                </div>
              </div>

              <div class="brg-cover-hero">
                <div id="cover3" class="brg-cover-thumb"></div>
                <div class="desc-thumb">
                  <p>Consultancy</p>
                  <a class="TFFF"  href="it_strategy.html">
                      <span>I.T. Strategy</span>
                  </a>
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

<style>
  #cover0 {
    background-image: url('../assets/images/sm_preview.png');
  }

  #cover2 {
    background-image: url('../assets/images/hub_preview.png');
  }

  #cover3 {
    background-image: url('../assets/images/consult_preview.png');
  }
</style>
