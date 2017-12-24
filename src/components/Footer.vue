<template>
    <footer>
        <div id="footer">
            <div class="container">
                <div class="row">
                      <div class="col-md-6 text-left">
                          <p class="col-xs-6">
                              <span class="col-xs-12"><span class="Bold TDD7520">Brayton Global</span></span>
                              <span class="col-xs-12">Rue Belliard 2</span>
                              <span class="col-xs-12">B-1040 Brussels</span>
                          </p>

                      </div>
                    <div class="col-md-6 margTop1em text-right">
                        <span class="brg-social-icons">
                            <a href="#"><i class="icon-twitter2"></i></a>
                            <a href="#"><i class="icon-facebook2"></i></a>
                            <a href="#"><i class="icon-instagram"></i></a>
                        </span>
                          <p>
                              Copyright {{ new Date().getFullYear() }}
                              <router-link to="/">
                                <span class="TDD7520 Bold">Brayton Global</span>
                              </router-link>.
                              All Rights Reserved.
                          </p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {

}
</script>

<style>
#footer p {
  font-size: 14px;
  color: #fff;
  font-weight: 300;
  font-family: "Open Sans", Arial, serif;
}
</style>
