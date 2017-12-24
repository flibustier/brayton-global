<template>
  <header role="banner" id="brg-header">
    <div class="container">
      <nav class="navbar navbar-default">
        <div class="row">
          <div class="col-md-5">
            <div class="brg-navbar-brand">
              <img id="logo" src="../assets/img/brayton_logo.png"/>
              <span>Brayton Global</span>
            </div>
          </div>
          <div class="col-md-7 main-nav">
            <ul class="nav col-xs-12">
              <li>
                <router-link to="/">
                  <span class="glyphicon glyphicon-home">
                  </span>
                </router-link>
              </li>
              <li>
                <div class="dropdown">
                  <span class="dropdown-toggle" data-toggle="dropdown">
                    Recruitment <span class="caret"></span>
                  </span>
                  <span class="col-xs-12 dropdown-menu">
                    <router-link to="/hub_index">
                      <span class="col-xs-12">Brayton Hub</span>
                    </router-link>
                    <router-link to="/partners">
                      <span class="col-xs-12">Our network</span>
                    </router-link>
                    <router-link to="/tools">
                      <span class="col-xs-12">Our tools</span>
                    </router-link>
                  </span>
                </div>
              </li>
              <li>
                <div class="dropdown">
                  <span class="dropdown-toggle" data-toggle="dropdown">
                    Consultancy <span class="caret"></span>
                  </span>
                  <span class="col-xs-12 dropdown-menu">
                    <router-link to="/strategy">
                      <span class="col-xs-12">IT Strategy</span>
                    </router-link>
                    <router-link to="/operations">
                      <span class="col-xs-12">Operations</span>
                    </router-link>
                  </span>
                </div>
              </li>
              <li id="Jobs"><a href="">Jobs</a></li>
              <li>
                <div class="dropdown">
                  <span class="dropdown-toggle" data-toggle="dropdown">
                    About us <span class="caret"></span>
                  </span>
                  <span class="col-xs-12 dropdown-menu">
                    <router-link to="/about">
                      <span class="col-xs-12">Company profile</span>
                    </router-link>
                    <router-link to="/team">
                      <span class="col-xs-12">Our team</span>
                    </router-link>
                    <router-link to="/contact">
                      <span class="col-xs-12">Contact</span>
                    </router-link>
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  #logo {
    height: 50px;
    width: 50px;
    margin-top: -2em;
    margin-bottom: 1em;
  }

  @media screen and (min-width: 989px) and (max-width: 1199px) {
    .nav {
      padding: 0;
    }
  }

  header {
    padding-top: 2.5em;
    padding-bottom: 0;
    margin-bottom: 0em;
    background-color: #333;
    box-shadow: 0 2px 3px rgba(51, 51, 51, 0.4);
  }

  .navbar-default {
    border: transparent;
    background: transparent;
    padding-bottom: 0;
    margin-bottom: 0;
  }

  .navbar {
    padding: 0;
    margin: 0;
  }

  .brg-navbar-brand {
    width: 100%;
    margin: 0;
  }

  .brg-navbar-brand .brg-logo {
    width: 52px;
    height: 30px;
    padding: 0;
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  .brg-navbar-brand .brg-logo:focus,
  .brg-navbar-brand .brg-logo:hover {
    text-decoration: none;
  }

  @media screen and (max-width: 992px) {
    .brg-navbar-brand {
      text-align: center;
      margin-bottom: 40px;
    }
  }

  @media screen and (max-width: 767px) {
    .brandLogo {
      position: absolute;
      width: 30%;
      left: 0;
      top: 0;
    }
    .brandLogo img {
      height: 50px;
      float: left;
      margin-top: 1px;
    }
  }

  .brg-navbar-brand span {
    font-size: 150%;
    color: #FFF;
    margin-left: 0.3em;
    position: relative;
    top: -0.75em;
    letter-spacing: 5px;
  }

  ul {
    text-align: right;
  }

  .nav {
    width: 100%;
  }

  .nav > li > a {
    position: relative;
    display: block;
    padding: 10px 15px;
    color: #fff;
  }

  .nav li {
    font-size: 15px;
    display: inline-block;
    margin-left: 50px;
  }

  @media screen and (max-width: 768px) {
     .nav li {
      width: 100%;
      margin-left: 0;
    }
  }
  .nav li:first-child {
    margin-left: 0;
  }
  .nav li a {
    font-family: "Open Sans", Arial, serif;
    position: relative;
    font-weight: 400;
    -webkit-transition: 0.5s;
    -o-transition: 0.5s;
    transition: 0.5s;
    padding: 0;
  }

  .nav li a:hover,
  .nav li a:focus {
    color: #DD7520 !important;
    background: transparent;
    text-decoration: none !important;
  }
  @media screen and (max-width: 768px) {
    .nav li a {
      padding: 10px 0;
    }
  }
  .nav li.active a {
    color: #DD7520;
    background: transparent;
    position: relative;
  }

  @media screen and (max-width: 768px) {
    .nav li.active a:before {
      top: 0;
    }
  }
  @media screen and (max-width: 992px) {
    .nav li.active a {
      color: #000;
    }
  }
  @media screen and (max-width: 480px) {
    .nav li.active a {
      border-bottom: 2px solid transparent;
      color: #DD7520;
    }
  }
  @media screen and (max-width: 992px) {
    .nav {
      margin-bottom: 40px;
      text-align: center;
    }
  }

  .dropdown-toggle {
      color: #FFF;
      cursor: pointer;
  }

  .dropdown-toggle:hover {
      color: #DD7520;
  }

  .dropdown-toggle, #Jobs {
    font-weight: 400;
    text-transform: uppercase;
  }

  .dropdown-menu a span:hover {
    background-color: #e5e5e5;
  }
</style>
