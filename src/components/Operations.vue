<template>
  <div>
    <intro headline="Operations" image="operations_intro.jpg"></intro>
    <div id="brg-section">
      <div class="container">

        <transition appear
        name="custom-classes-transition"
        enter-active-class="animated fadeInUp">
          <div class="row margTop2em">
            <div class="col-md-10 fSize65 col-md-offset-1 text-justify">
              <p>
                <b>Together with you, we measure the performance of your I.T.
                services and look for better ways to manage your I.T. operations.
                Find your challenges and our solutions in these key areas : </b>
              </p>
              </div>
            </div>
          </transition>

          <transition appear
          name="custom-classes-transition"
          enter-active-class="animated fadeInUp">
            <div class="row margTop2em">
              <h3 class="col-md-10 col-md-offset-1 margTop1em TDD7520">
                I.T. process maturity assessment and improvement
              </h3>
              <div class="col-md-10 fSize65 col-md-offset-1 text-justify">
                <p>
                  Whether its for internal or external customers, your business
                  is likely facing a constant a need to innovate as well as
                  continuous pressure on cost and delivery time. Effective and
                  efficient processes play a crucial role in your business’ success.
                </p>
                <p>
                  Your first step? Let us help you assess your process maturity
                  and identify and implement performance improvement opportunities.
                </p>
              </div>
            </div>
          </transition>

          <transition appear
          name="custom-classes-transition"
          enter-active-class="animated fadeInUp">
            <div class="row margTop2em">
              <h3 class="col-md-10 col-md-offset-1 margTop1em TDD7520">
                I.T. Cost & Value management
              </h3>
              <div class="col-md-10 fSize65 col-md-offset-1 text-justify">
                <p>
                  Most likely, I.T. is a significant cost in your organisation,
                  and managing your cost base is crucial to pulling out of an
                  economic downturn. So right now, you are probably looking to
                  your I.T. to :
                </p>
                <ul>
                  <li class="TDD7520"><p>Reduce its operational costs</p></li>
                  <li class="TDD7520"><p>Reduce discretionary spending</p></li>
                  <li class="TDD7520">
                    <p>Provide the tools and infrastructure to help the business
                      do more with less
                    </p>
                  </li>
                </ul>
                <p>
                  We can help you explore how to cut costs so you gain tangible
                  benefits quickly without compromising future flexibility or
                  resulting in costs growing back in the future.
                </p>
              </div>
            </div>
          </transition>

          <transition appear
          name="custom-classes-transition"
          enter-active-class="animated fadeInUp">
            <div class="row margTop2em">
              <h3 class="col-md-10 col-md-offset-1 margTop1em TDD7520">
                Technical Capabilities
              </h3>
              <div class="col-md-10 fSize65 col-md-offset-1 text-justify">
                <p>
                  Does your IT staff cover all aspects of your complex IT
                  environment and are the teams ready to take on any challenge
                  to guarantee operational effectiveness of your key business
                  critical processes.
                  In many cases, companies rely on third parties to cover several
                  aspects of their technical IT capabilities.
                  We offer our services to inventories all technologies and areas
                  of expertise, mapped upon business drivers to make sure the
                  right language is spoken at both board level as within the
                  operations teams.
                </p>
                <p>
                  Our consultants make sure that your company has a reliable
                  mix of internal and outsourced capabilities and a clear view
                  on what to expect of the IT teams and vendors.
                </p>
              </div>
            </div>
          </transition>

          <shortcut></shortcut>
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
