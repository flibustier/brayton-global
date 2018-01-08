<template>
  <div>
    <intro headline="Who we are" image="brg_intro.jpg" />
    <div id="brg-product-section">
      <div class="container">
        <transition appear
          name="custom-classes-transition"
          enter-active-class="animated fadeInUp">
          <div class="row margBot2em">
            <div class="col-md-10 fSize65 col-md-offset-1 text-justify">
              <h2 class="TDD7520">A Few Words About Us</h2>
              <p>
                At <span class="TDD7520"><b>BraytonGlobal</b></span>, we’re
                committed to providing first-in-class ICT, audit, consultancy
                services to our public and private clients in Belgium and
                internationally.
              </p>
              <p>
                <span class="TDD7520"><b>BraytonGlobal</b></span> is founded on
                the principle of creating value through relationships – it’s a
                principle that lies at the heart of everything we do and
                everywhere we are.
              </p>
              <p>
                Our value promise starts with our relationship with you.
                We aim to start building value from day one.
              </p>
              <p>
                The founders and shareholders of BraytonGlobal are dedicated and
                experienced professionals, executives and directors with extensive
                experience in both private as public (EU) environments.
              </p>
              <h4 class="TDD7520 margTop2em">At Brayton Global, we live and
                breathe the philosophy that people matter and results count.
              </h4>
              <p>
                <b>Our Vision : </b>the business value of technology comes from
                and through people Brayton Global understands that business value
                cannot be achieved through technology alone.
                It starts with people: experts working together to get to the
                heart of your individual business objectives
                and develop the most adapted solutions to fit these requirements.
                We believe this human-centered approach to technology is what
                makes the difference for your business.
              </p>
              <p>
                <b>Our Mission : </b> with you, we create and deliver business
                and technology solutions that fit your needs and drive the
                results you want
                Brayton Global enables you to transform your organization and
                improve performance. We aim to empower you to respond more quickly
                and intuitively to changing market dynamics. By bolstering your
                ability to harness the right technology, we help you become more
                agile and competitive.
              </p>
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
</style>
