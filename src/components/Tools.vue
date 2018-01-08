<template>
  <div>
    <intro headline="Tools" image="it_intro.jpg" />
    <div id="brg-product-section">
      <div class="container">
        <transition name="custom-classes-transition"
        enter-active-class="animated fadeInUp"
        appear>
          <div class="row">
            <div class="col-md-10 fSize65 col-md-offset-1 text-justify">
              <p>
                At <span class="TDD7520"><b>BraytonGlobal</b></span>, we’re
                committed to providing first-in-class ICT selection.
              </p>
              <a id="hub" href="http://skillmatrix.be/">
                <span class="mask">
                  <img src="../assets/img/overlays/hub_overlay.png"/>
                </span>
              </a>
              <a id="factorio" href="http://factorio.vds-consulting.be/">
                <span class="mask">
                  <img src="../assets/img/overlays/factorio_overlay.png"/>
                </span>
              </a>
              <a id="fau" href="http://vds-consulting.be/fau/">
                <span class="mask">
                  <img src="../assets/img/overlays/fau_overlay.png"/>
                </span>
              </a>
            </div>
          </div>
        </transition>
        <shortcut/>
      </div>
    </div>
  </div>
</template>

<script>
  import intro from './Intro'
  import shortcut from './Shortcut'

  export default {
    components: {
      intro,
      shortcut
    }
  }
</script>

<style scoped>

  a {
    box-sizing: inherit;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;

    text-decoration: none;

    box-shadow: 0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12);
    transition: box-shadow .55s;

    height: 150px;
    display: block;
    width: 100%;
    cursor: pointer;

    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }

  a:hover {
    transition: box-shadow .45s;
    box-shadow: 0 8px 17px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19);
  }

  span.mask {
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;

    width: 100%;
    height: 100%;
    overflow: hidden;

    background-attachment: fixed;
  }

  img {
    width: 60%;
    max-width: 100%;
    height: auto;
    border-style: none;
}

  #hub {
    background-image: url('../assets/img/1.jpg');
  }

  #hub span {
    background-color: rgba(255,152,0,.3);
  }

  #factorio {
    background-image: url('../assets/img/2.jpg');
    margin-top: 2em;
  }

  #factorio span {
    background-color: rgba(63,81,181,.3);
  }

  #fau {
    background-image: url('../assets/img/3.png');
    margin-top: 2em;
    margin-bottom: 7em;
  }

  #fau span {
    background-color: rgba(255, 209, 93, 0.65);
  }
</style>
