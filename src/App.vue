<template>
  <div id="app" class="box-wrap">
    <BrgHeader/>
    <router-view></router-view>
    <BrgFooter/>
  </div>
</template>

<script>
import router from './router'
import BrgHeader from './components/Header';
import BrgFooter from './components/Footer';

export default {
  router,

  name: 'app',

  components: {
      BrgHeader,
      BrgFooter
  },

  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
@font-face {
  font-family: 'icomoon';
  src: url("./assets/fonts/icomoon/icomoon.eot?srf3rx");
  src: url("./assets/fonts/icomoon/icomoon.eot?srf3rx#iefix") format("embedded-opentype"),
   url("./assets/fonts/icomoon/icomoon.ttf?srf3rx") format("truetype"),
   url("./assets/fonts/icomoon/icomoon.woff?srf3rx") format("woff"),
   url("./assets/fonts/icomoon/icomoon.svg?srf3rx#icomoon") format("svg");
  font-weight: normal;
  font-style: normal;
}

body {
  font-family: "Open Sans", Arial, serif;
  line-height: 1.8;
  font-size: 20px;
  background: #f9f7f7;
  font-weight: 300;
}

@media screen and (min-width: 200px) and (max-width: 690px) {
    .navbar-inverse {
        display: none !important;
    }

    #brg-intro-section {
        display: none !important;
    }

    #brg-product-section {
        margin-top: 2em !important;
    }

    #brg-section {
        margin-top: 2em !important;
    }
}

a {
  color: #666;
  -webkit-transition: 0.5s;
  -o-transition: 0.5s;
  transition: 0.5s;
}
a:hover {
  text-decoration: underline !important;
  color: #DD7520 !important;
}
a:focus, a:active {
  outline: none;
}

p {
  /*
  margin-bottom: 1.5em;
  */
  font-size: 18px;
  color: #666;
  font-weight: 300;
  font-family: "Open Sans", Arial, serif;
}

.sliderLogo {
    height: 90px !important;
    width: 350px !important;
    margin-right: 30px !important;
    margin-top: 20px !important;
}
.overlayP {
    color: #FFFFFF !important;
    position: relative;
    top: -11%;
    left: 12%;
}

h1, h2, h3, h4, h5, h6 {
  color: #676767;
  font-family: "Open Sans", Arial, serif;
  font-weight: 400;
  margin: 0 0 30px 0;
}

/*::-webkit-selection {
  color: #fcfcfc;
  background: #DD7520;
}*/

::-moz-selection {
  color: #fcfcfc;
  background: #DD7520;
}

::selection {
  color: #fcfcfc;
  background: #DD7520;
}

.box-wrap {
  background: #fff;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  -webkit-box-shadow: 0px 0px 20px 2px rgba(0, 0, 0, 0.07);
  -moz-box-shadow: 0px 0px 20px 2px rgba(0, 0, 0, 0.07);
  box-shadow: 0px 0px 20px 2px rgba(0, 0, 0, 0.07);
}
.box-wrap:before {
  position: absolute;
  top: 0;
  left: 0;
  content: '';
  -webkit-box-shadow: -7px 1px 13px 2px rgba(0, 0, 0, 0.08);
  -moz-box-shadow: -7px 1px 13px 2px rgba(0, 0, 0, 0.08);
  box-shadow: -7px 1px 13px 2px rgba(0, 0, 0, 0.08);
}


.owl-carousel {
  margin-bottom: 3em;
}

/* Owl Override Style */
.owl-carousel .owl-controls,
.owl-carousel-posts .owl-controls {
  margin-top: 0;
}

.owl-carousel .owl-controls .owl-nav .owl-next,
.owl-carousel .owl-controls .owl-nav .owl-prev,
.owl-carousel-posts .owl-controls .owl-nav .owl-next,
.owl-carousel-posts .owl-controls .owl-nav .owl-prev {
  top: 50%;
  margin-top: -29px;
  z-index: 9999;
  position: absolute;
  -webkit-transition: 0.2s;
  -o-transition: 0.2s;
  transition: 0.2s;
}

.owl-carousel-posts .owl-controls .owl-nav .owl-next,
.owl-carousel-posts .owl-controls .owl-nav .owl-prev {
  top: 24%;
}

.owl-carousel .owl-controls .owl-nav .owl-next,
.owl-carousel-posts .owl-controls .owl-nav .owl-next {
  right: 40px;
}
.owl-carousel .owl-controls .owl-nav .owl-next:hover,
.owl-carousel-posts .owl-controls .owl-nav .owl-next:hover {
  margin-right: -10px;
}

.owl-carousel .owl-controls .owl-nav .owl-prev,
.owl-carousel-posts .owl-controls .owl-nav .owl-prev {
  left: 40px;
}
.owl-carousel .owl-controls .owl-nav .owl-prev:hover,
.owl-carousel-posts .owl-controls .owl-nav .owl-prev:hover {
  margin-left: -10px;
}

.owl-carousel-posts .owl-controls .owl-nav .owl-next {
  right: -50px;
}
@media screen and (max-width: 768px) {
  .owl-carousel-posts .owl-controls .owl-nav .owl-next {
    right: 0px;
  }
}

.owl-carousel-posts .owl-controls .owl-nav .owl-prev {
  left: -50px;
}
@media screen and (max-width: 768px) {
  .owl-carousel-posts .owl-controls .owl-nav .owl-prev {
    left: 0px;
  }
}

.owl-carousel-posts .owl-controls .owl-nav .owl-next i,
.owl-carousel-posts .owl-controls .owl-nav .owl-prev i,
.owl-carousel-fullwidth .owl-controls .owl-nav .owl-next i,
.owl-carousel-fullwidth .owl-controls .owl-nav .owl-prev i {
  color: #000;
}
.owl-carousel-posts .owl-controls .owl-nav .owl-next:hover i,
.owl-carousel-posts .owl-controls .owl-nav .owl-prev:hover i,
.owl-carousel-fullwidth .owl-controls .owl-nav .owl-next:hover i,
.owl-carousel-fullwidth .owl-controls .owl-nav .owl-prev:hover i {
  color: #000;
}

.owl-carousel-fullwidth.brg-light-arrow .owl-controls .owl-nav .owl-next i,
.owl-carousel-fullwidth.brg-light-arrow .owl-controls .owl-nav .owl-prev i {
  font-size: 50px;
  color: #fff;
}
.owl-carousel-fullwidth.brg-light-arrow .owl-controls .owl-nav .owl-next:hover i,
.owl-carousel-fullwidth.brg-light-arrow .owl-controls .owl-nav .owl-prev:hover i {
  color: #fff;
}

.owl-carousel2 .owl-controls .owl-nav .owl-next i,
.owl-carousel2 .owl-controls .owl-nav .owl-prev i {
  font-size: 50px;
  color: rgba(0, 0, 0, 0.5);
}
.owl-carousel2 .owl-controls .owl-nav .owl-next:hover i,
.owl-carousel2 .owl-controls .owl-nav .owl-prev:hover i {
  color: rgba(0, 0, 0, 0.6);
}

.owl-carousel2 .owl-controls .owl-nav .owl-next {
  right: -50px;
}
.owl-carousel2 .owl-controls .owl-nav .owl-next:hover {
  margin-right: -10px;
}

.owl-carousel2 .owl-controls .owl-nav .owl-prev {
  left: -50px;
}
.owl-carousel2 .owl-controls .owl-nav .owl-prev:hover {
  margin-left: -10px;
}

.owl-carousel2 .owl-dots {
  display: none !important;
}
@media screen and (max-width: 992px) {
  .owl-carousel2 .owl-dots {
    display: block !important;
  }
}

@media screen and (max-width: 768px) {
  .owl-theme .owl-controls .owl-nav {
    display: none;
  }
}

.owl-theme .owl-controls .owl-nav [class*="owl-"] {
  background: none !important;
}
.owl-theme .owl-controls .owl-nav [class*="owl-"] i {
  font-size: 30px;
}
.owl-theme .owl-controls .owl-nav [class*="owl-"] i:hover, .owl-theme .owl-controls .owl-nav [class*="owl-"] i:focus {
  background: none !important;
}
.owl-theme .owl-controls .owl-nav [class*="owl-"]:hover, .owl-theme .owl-controls .owl-nav [class*="owl-"]:focus {
  background: none !important;
}

.owl-theme .owl-dots {
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
}

.owl-carousel-fullwidth.owl-theme .owl-dots {
  bottom: 0;
  margin-bottom: 40px;
}

.owl-theme .owl-dots .owl-dot span {
  width: 10px;
  height: 10px;
  background: rgba(255, 255, 255, 0.6);
  -webkit-transition: 0.2s;
  -o-transition: 0.2s;
  transition: 0.2s;
  border: 2px solid transparent;
}
.owl-theme .owl-dots .owl-dot span:hover {
  background: none;
}

.owl-theme .owl-dots .owl-dot.active span, .owl-theme .owl-dots .owl-dot:hover span {
  background: #DD7520;
}

#brg-media-section, #brg-intro-section, #brg-contact-section,
#brg-product-section, .about-section {
  padding-bottom: 3em;
}
@media screen and (max-width: 768px) {
  #brg-media-section, #brg-intro-section, #brg-contact-section,
  #brg-product-section, .about-section {
    padding-bottom: 3em;
  }
}

#brg-intro-section h2 {
  font-size: 40px;
  text-transform: uppercase;
  color: #fff;
  letter-spacing: 1px;
}
#brg-intro-section h3 {
  color: rgba(255, 255, 255, 0.8);
  font-weight: 300;
  line-height: 38px;
}

.section-overlay {
  margin-bottom: 5em;
  position: relative;
  padding-bottom: 0 !important;
}
.section-overlay:before {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  content: '';
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
}
.section-overlay .float-overlay {
  z-index: 9;
}

.text-shadow {
    text-shadow: 0px 1px #DDD;
}

.brg-cover {
  min-height: 388px;
  position: relative;
  margin-bottom: 40px;
  background-size: cover;
  background: center center;
}
.brg-cover .desc {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 40px;
  background: rgba(51,51,51, 0.9);
}
.brg-cover .desc p {
  color: #fff;
  margin-bottom: 10px;
}
.brg-cover .desc span {
  font-size: 16px;
  color: rgba(255, 255, 255, 0.7);
}
.brg-cover .brg-cover-hero {
  min-height: 122px;
  position: relative;
  width: 100%;
  margin-bottom: 10px;
}
.brg-cover .brg-cover-hero .brg-cover-thumb {
  width: 170px;
  height: 123px;
  position: absolute;
  top: 0;
  left: 0;
  background-size: cover;
  background: center;
  border: 1px solid #666;
}
.brg-cover .brg-cover-hero .desc-thumb {
    padding-left: 8.4em;
    height: 123px;
}

.brg-cover .brg-cover-hero .desc-thumb p {
    margin-bottom: 7px;
    background-color: #333;
    padding: 5px;
    padding-left: 15px;
    padding-bottom: 30px;
    color: #fff;
}



.brg-cover .brg-cover-hero .desc-thumb span {
    font-size: 16px;
    padding-left: 15px;
    margin-left: 1px;
    position: absolute;
    top: 55px;
    width: 45%;
    background-color: #DD7520;
    color: #FFF;
}

.brg-cover .brg-cover-hero .desc-thumb span:hover {
    background-color: #474747;
    border: 1px solid #FFF;
    color: #FFF !important;
}


@media screen and (max-width: 992px) {
  .brg-cover .brg-cover-hero {
    height: 448px;
  }
  .brg-cover .brg-cover-hero .brg-cover-thumb {
    height: 448px;
    width: 100%;
  }
  .brg-cover .brg-cover-hero .desc-thumb {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 40px;
  }

  .brg-cover .brg-cover-hero .desc-thumb p {
    color: #fff;
    margin-bottom: 10px;
  }
  .brg-cover .brg-cover-hero .desc-thumb span {
    font-size: 16px;
    color: rgba(255, 255, 255, 0.7);
  }
}

.brg-intro-cover {
  width: 100%;
  padding: 8.5em 0;
  position: relative;
}

.brg-services-menu {
    width: 100%;
    background-color: #00b3ee;
    height: 80px;
}

.brg-intro-cover:before {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  content: '';
  width: 100%;
  background: rgba(84, 77, 89, 0.5);
}
.brg-intro-cover a.btn {
  position: relative;
  border: 4px solid #fff;
  padding: 30px 50px;
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 1px;
  color: #fff;
  -webkit-border-radius: 0;
  -moz-border-radius: 0;
  -ms-border-radius: 0;
  border-radius: 0;
}
.brg-intro-cover a.btn:hover, .brg-intro-cover a.btn:focus {
  text-decoration: none !important;
  background: transparent !important;
  color: #fff !important;
}
@media screen and (max-width: 768px) {
  .brg-intro-cover a.btn {
    padding: 15px 25px;
    font-size: 16px;
  }
}

.brg-grey-section {
  background: rgba(0, 0, 0, 0.03);
  padding: 5em 0;
}

.brg-border-line {
  border-top: 1px solid rgba(0, 0, 0, 0.05);
}

.brg-inner {
  margin-bottom: 3em;
  position: relative;
}
.brg-inner i {
  position: absolute;
  top: 20%;
  left: 0;
  font-size: 60px;
}
.brg-inner .holder-section {
  padding-left: 6em;
}
.brg-inner .holder-section h3 {
  font-size: 20px;
  text-transform: uppercase;
  color: #DD7520;
  letter-spacing: 1px;
  font-weight: bold;
}

.brg-services {
  margin-bottom: 4em;
}

.about-section img.display-left {
  float: left;
  padding-right: 40px;
}
.about-section img.display-right {
  float: right;
  padding-left: 40px;
}
@media screen and (max-width: 768px) {
  .about-section img.display-right {
    float: left;
    padding-right: 40px;
    padding-left: 0;
  }
}

#brg-product-section .management-inner {
  margin-bottom: 7em;
  float: left;
  width: 100%;
}
#brg-product-section .management-inner:last-child {
  margin-bottom: 0;
}
#brg-product-section .management-inner h3 {
  font-size: 30px;
  text-transform: uppercase;
  letter-spacing: 1px;
}
#brg-product-section .management-inner h3 a {
  color: rgba(0, 0, 0, 0.8);
}
#brg-product-section .management-inner img {
  -webkit-border-radius: 7px;
  -moz-border-radius: 7px;
  -ms-border-radius: 7px;
  border-radius: 7px;
}
#brg-product-section .management-inner .desc {
  margin-top: 1.5em;
}
@media screen and (max-width: 992px) {
  #brg-product-section .management-inner .desc {
    margin-top: 0;
  }
}

.sidebar a:hover {
  text-decoration: none !important;
}
.sidebar img {
  margin-bottom: 20px;
}
.sidebar h2 {
  font-size: 20px;
}
.sidebar h3 {
  font-size: 20px;
}
.sidebar .inner {
  margin-bottom: 4em;
}
.sidebar .inner .list li {
  color: rgba(0, 0, 0, 0.4);
}
.sidebar .inner .list li a {
  color: rgba(0, 0, 0, 0.4);
}
/*
#map {
  width: 100%;
  height: 500px;
  position: relative;
}*/
#map {
    height: 400px;
    position: relative;
}
@media screen and (max-width: 768px) {
  #map {
    height: 200px;
  }
}

.contact-info {
  margin: 0;
  padding: 0;
}
.contact-info li {
  list-style: none;
  margin: 0 0 0px 0;
  position: relative;
  padding-left: 40px;
}
.contact-info li i {
  position: absolute;
  top: .3em;
  left: 0;
  font-size: 22px;
  color: #666;
}
.contact-info li a {
  font-weight: 400 !important;
  color: #DD7520;
}
@media screen and (max-width: 768px) {
  .contact-info {
    margin-bottom: 4em;
  }
}

.form-control {
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  -ms-box-shadow: none;
  -o-box-shadow: none;
  box-shadow: none;
  border: none;
  border: 1px solid rgba(0, 0, 0, 0.1);
  font-size: 18px;
  font-weight: 400;
  -webkit-border-radius: 0px;
  -moz-border-radius: 0px;
  -ms-border-radius: 0px;
  border-radius: 0px;
}
.form-control:focus, .form-control:active {
  border: 1px solid rgba(0, 0, 0, 0.5);
  box-shadow: none;
}

input[type="text"] {
  height: 30px;
  padding: 0;
  padding-left: 4px;
}

.form-group {
  margin-bottom: 30px;
}
.form-group label {
  font-weight: normal;
}

#footer {
  background-color: #333;
  /*
  padding: 60px 0 40px;
  */
  padding: 30px 0 20px;

}
#footer p {
  font-size: 14px;
}

.brg-social-icons a {
  padding: 4px 8px;
  color: #DD7520;
}
.brg-social-icons a i {
  font-size: 20px;
}
.brg-social-icons a:hover, .brg-social-icons a:focus, .brg-social-icons a:active {
  text-decoration: none;
  color: #000;
  text-decoration: none !important;
}

.heading-section {
  margin-bottom: 2em;
  height: 150px;
}
.heading-section h3 {
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 2px;
  text-transform: uppercase;
  position: relative;
  color: #DD7520;
}

.btn {
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
}

.btn {
  text-transform: uppercase;
  letter-spacing: 2px;
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
}
.btn.btn-primary {
  background: #DD7520;
  color: #fff;
  border: none !important;
  border: 2px solid transparent !important;
}
.btn.btn-primary:hover, .btn.btn-primary:active, .btn.btn-primary:focus {
  box-shadow: none;
  background: #DD7520;
}
.btn:hover, .btn:active, .btn:focus {
  background: #DDD !important;
  color: #DD7520 !important;
  outline: none !important;
}
.btn.btn-default:hover, .btn.btn-default:focus, .btn.btn-default:active {
  border-color: transparent;
}

.social {
  padding: 0;
  margin: 0;
  display: inline-block;
  position: relative;
  width: 100%;
  text-align: right;
}
.social li {
  list-style: none;
  padding: 0;
  margin: 0;
  display: inline-block;
}
.social li a {
  font-size: 24px;
  display: table;
  width: 24px;
  height: 24px;
  margin: 0 4px;
  color: #000;
  -webkit-transition: 0.5s;
  -o-transition: 0.5s;
  transition: 0.5s;
}
.social li a:hover, .social li a:focus {
  color: #DD7520;
  text-decoration: none;
}
.social li a i {
  display: table-cell;
  vertical-align: middle;
}
@media screen and (max-width: 992px) {
  .social {
    text-align: center;
  }
}

.js .animate-box {
  opacity: 0;
}



#subMenu {
    min-height: 150px;
    min-width: 350px;
    width: 350px;
    font-size: 80%;
    position: absolute;
    background-color: #F8F8F8;
    z-index: 5;
    right: 15.5%;
    top: 65%;
}

#mainSubMenu {
    /*
    background-color: #F8F8F8;
    */
    margin: 0;
    padding: 15px;
}

#mainSubMenu a:hover {
    background-color: rgba(221, 117, 32, 0.2);
}

#subMenuAboutUs a:hover {
    background-color: rgba(221, 117, 32, 0.2);
}

#careersSubMenu a:hover {
    background-color: rgba(221, 117, 32, 0.2);
}



#subMenuAboutUs {
    min-height: 150px;
    min-width: 350px;
    width: 350px;
    font-size: 80%;
    position: absolute;
    background-color: #F8F8F8;
    z-index: 5;
    right: 1%;
    top: 65%;
}

#subMenuCareers {
    min-height: 65px;
    min-width: 230px;
    width: 250px;
    font-size: 80%;
    position: absolute;
    background-color: #F8F8F8;
    z-index: 5;
    right: -3%;
    top: 65%;
}

#careersSubMenu {
    margin: 0;
    padding: 15px;
}


#aboutUsSubMenu {
    margin: 0;
    padding: 15px;
}


#activeSecondMenu {
    color: #DD7520 !important;
}


.navbar-inverse .navbar-nav > li > a {
    font-size: 65%;
    color: #fff;
    font-weight: 400;
}

.navbar-inverse .navbar-nav > .active > a, .navbar-inverse .navbar-nav > .active > a:hover, .navbar-inverse .navbar-nav > .active > a:focus {
    color: #fff;
    background-color: rgba(221, 117, 32, 1);
}

.navbar-brand {
    float: left;
    padding: 1.5px 15px;
    font-size: 18px;
    line-height: 20px;
    height: 50px;
}
.navbar-brand > img {
    display: block;
    height: 100%;
}

.brandLogo {
    position: absolute;
    right: 0;
    top: 0;
}

.brandLogo img {
    height: 45px;
    margin-right: 30px;
    margin-top: 5px;
}

.owl-carousel div h2, .owl-carousel div .textoverlay{
    position:absolute;
    background-color: rgba(51,51,51, 0.7);
    height: 150px;
    color:#FFF;
    bottom: 0;
    font-size:12px;
    display:block;
    z-index: 2;
    width: 100%;
}

/*** VeMaSys CSS ***/

#vemaBodyWrap {
    height: 25vh;
    min-height: 195px;
    padding-top: 5vh;
}

#mainCircleMenu {
    position: absolute;
    left: 25%;
    border: 5px solid #DDD;
    border-radius: 60vh;
    width: 60vh;
    height: 60vh;
    margin: 5px auto;
}

#centerLogo {
    position: absolute;
    left: 40%;
    margin-top: 40%;
}

#vmsLogo {
    height: 100px;
}

.entityIcon {
    position: absolute;
    left: 12%;
    top: 10%;
    height: 65px; /* 80px */
    width: 65px; /* 80px */
}

.entityMobileImg {
    margin-top: 0.2em;
    height: 120px; /* 80px */
    width: 120px;
}

.entityVesselImg {
    height: 60%; /* 80px */
    width: 60%; /* 80px */
    position: absolute;
    left: 0;
    top: 15%;
    z-index: 0;
}


#expVesselDiv:hover {
    background-color: #fff;
    border: 1px solid #DD7520;
}

#expVesselDiv {
    left: 43%;
    margin-top: -8%;
    position: relative;
    background-color: #fff;
    border: 1px solid #333;
    border-radius: 80px; /* 100px */
    height: 80px; /* 100px */
    width: 80px; /* 100px */
    z-index: 1;
}

#auditDiv {
    left: 15%;
    margin-top: -2%;
    position: relative;
    background-color: #fff;
    border: 1px solid #333;
    border-radius: 80px;
    height: 80px;
    width: 80px;
    z-index: 1;
}

#industryDiv {
    left: -4%;
    margin-top: 9%;
    position: relative;
    background-color: #fff;
    border: 1px solid #333;
    border-radius: 80px;
    height: 80px;
    width: 80px;
    z-index: 1;
}

#portOpsDiv {
    left: -6%;
    margin-top: 17%;
    position: relative;
    background-color: #fff;
    border: 1px solid #333;
    border-radius: 80px;
    height: 80px;
    width: 80px;
    z-index: 1;
}


#expeditorDiv {
    left: 11%;
    margin-top: 13%;
    position: relative;
    background-color: #fff;
    border: 1px solid #333;
    border-radius: 80px;
    height: 80px;
    width: 80px;
    z-index: 1;
}

#handlerDiv {
    left: 43%;
    margin-top: -4%;
    position: relative;
    background-color: #fff;
    border: 1px solid #333;
    border-radius: 80px;
    height: 80px;
    width: 80px;
    z-index: 1;
}

#supplierDiv {
    left: 75%;
    margin-top: -23.8%;
    position: relative;
    background-color: #fff;
    border: 1px solid #333;
    border-radius: 80px;
    height: 80px;
    width: 80px;
    z-index: 1;
}

#insuranceDiv {
    left: 92%;
    margin-top: -40.8%;
    position: relative;
    background-color: #fff;
    border: 1px solid #333;
    border-radius: 80px;
    height: 80px;
    width: 80px;
    z-index: 1;
}

#fleetDiv {
    left: 92%;
    margin-top: -43.8%;
    position: relative;
    background-color: #fff;
    border: 1px solid #333;
    border-radius: 80px;
    height: 80px;
    width: 80px;
    z-index: 1;
}

#accountantDiv {
    left: 76%;
    margin-top: -37.8%;
    position: relative;
    background-color: #fff;
    border: 1px solid #333;
    border-radius: 80px;
    height: 80px;
    width: 80px;
    z-index: 1;
}

#introCoverimg {
    width: 100%;
    height: 400px;
    box-shadow: 0 2px 3px rgba(51, 51, 51, 0.3);
}

/*** WheelNav **/
.wheelNav {
    height: 750px;
    width: 750px;
    margin: auto;
    -moz-transition: ease 1s;
    -o-transition: ease 1s;
    -webkit-transition: ease 1s;
    transition: ease 1s;
}
#wheelnav-radialWheel-slice-0 {
    fill: #fff;
    stroke: transparent !important;
}

#wheelnav-radialWheel-slice-1 {
    fill: #fff;
    stroke: transparent !important;
}

#wheelnav-radialWheel-slice-2 {
    fill: #fff;
    stroke: transparent !important;
}

#wheelnav-radialWheel-slice-3 {
    fill: #fff;
    stroke: transparent !important;
}

#wheelnav-radialWheel-slice-4 {
    fill: #fff;
    stroke: transparent !important;
}

#wheelnav-radialWheel-slice-5 {
    fill: #fff;
    stroke: transparent !important;
}
#wheelnav-radialWheel-slice-6 {
    fill: #fff;
    stroke: transparent !important;
}
#wheelnav-radialWheel-slice-7 {
    fill: #fff;
    stroke: transparent !important;
}
#wheelnav-radialWheel-slice-8 {
    fill: #fff;
    stroke: transparent !important;
}
#wheelnav-radialWheel-slice-9 {
    fill: #fff;
    stroke: transparent !important;
}
#wheelnav-radialWheel-slice-10 {
    fill: #fff;
    stroke: transparent !important;
}

[class|=wheelnav-radialWheel-slice-hover] {
    stroke-width: 2px;
    cursor: pointer;
}

[class|=wheelnav-radialWheel-slice-selected] {
    stroke-width: 1px;
}

[class|=wheelnav-radialWheel-title] {
    cursor: pointer;
}


.wheelnav-radialWheel-title-basic-5 > tspan {
    font-size: 17px;
}

.wheelnav-radialWheel-title-hover-5 > tspan {
    font-size: 23px;
}

.wheelnav-radialWheel-title-selected-5 > tspan {
    font-size: 33px;
}

.wheelnav-radialWheel-spreader-in,
.wheelnav-radialWheel-spreader-out {
    fill: #fff;
    stroke-width: 2px;
    cursor: pointer;
    stroke: #DDD !important;

}

.wheelnav-radialWheel-spreadertitle-in,
.wheelnav-radialWheel-spreadertitle-out {
    cursor: pointer;

}


.wheelnav-radialWheel-marker {
    stroke: #DD7520;
    stroke-width: 1px;
    fill: #fff;
    fill-opacity: 0.1;
}
.leftDescription {
    position: absolute;
    z-index: 1;
    right: 5%;
    top: 20%;
    height: 10em;
    width: 15em;
    background-color: #00b3ee;
}

/*
#radialWheel:hover > svg {
    margin-left: -100px !important;
    -webkit-transition: margin-left 1s linear;
}
*/

/*** GENERAL CSS **/

.TDD7520 {
    color: #DD7520 !important;
}

.T666 {
    color: #666 !important;
}

.TFFF {
    color: #FFF !important;
}

.Bold {
  font-weight: 400;
}

.cPointer {
  cursor: pointer;
}

.fSize65 {
    font-size: 65% !important;
}


.fSize70 {
    font-size: 70% !important;
}


.fSize80 {
    font-size: 80% !important;
}

.fSize90 {
  font-size: 90% !important;
}

.fSize120 {
  font-size: 120% !important;
}

.fSize140 {
    font-size: 150% !important;
}

.fWeight300 {
    font-weight: 300 !important;
}

.fWeight400 {
    font-weight: 400;
}

.margTop035em {
    margin-top: 0.35em;
}

.margTop05em {
    margin-top: 0.5em;
}

.margTop07em {
    margin-top: 0.7em;
}

.margTop1em {
  margin-top: 1em;
}


.margTop2em {
  margin-top: 2em;
}

.margTop5em {
    margin-top: 5em;
}

.margTop7em {
    margin-top: 7em;
}

.tTransparent {
    opacity: 0;
}

.margTop3em {
  margin-top: 3em;
}

.margTop5em {
    margin-top: 5em;
}

.margTop7em {
    margin-top: 7em;
}



.margBot1em {
    margin-bottom: 1em;
}

.margBot2em {
    margin-bottom: 2em;
}


.margBot3em {
    margin-bottom: 3em;
}


.margBot4em {
    margin-bottom: 4em;
}


.margRight1em {
    margin-right: 1em;
}

.margLeft0-3em {
    margin-left: 0.3em;
}

.margLeft1em {
    margin-left: 1em;
}
.margLeft2em {
    margin-left: 2em;
}

.margLeft2-5em {
    margin-left: 2.5em;
}
.margLeft3em {
    margin-left: 3em;
}

.margLeft4em {
    margin-left: 4em;
}
.margLeft5em {
    margin-left: 5em;
}


.padTop1em {
    padding-top: 1em;
}


.padTop2em {
    padding-top: 2em;
}

.padTop3em {
    padding-top: 3em;
}


.padTop4em {
    padding-top: 4em;
}


.padTop5em {
    padding-top: 5em;
}

.w100 {
  width: 100%;
}

.h2-5em {
    height: 2.5em !important;
}

.floatRight {
    float: right !important;
}

.floatLeft {
    float: left !important;
}

.h3em {
    height: 3em !important;
}

.h4em {
    height: 4em !important;
}

.h5em {
    height: 5em !important;
}
.noPadding {
    padding: 0 !important;
}

.height900px {
    height: 750px;
}

.fMaj {
    text-transform: uppercase;
}

.height1500px {
    height: 1500px;
}

.subMenuHeader {
    padding-left: 5px;
    border-bottom: 1px solid rgba(221, 117, 32, 0.5);
    cursor: pointer;
}

.subMenuHeaderNoPage {
    margin-top: 1em;
    padding-left: 5px;
    border-bottom: 1px solid rgba(221, 117, 32, 0.5);
}

.introOverlay {
    position: absolute;
    z-index: 4;
    top: -4em;
    text-align: center;
    font-weight: 300;
    line-height: 38px;
    background-color: rgba(221, 221, 221, 0.7);
}

.press-thumb-img {
    height: 200px;
    width: 200px;
    border: 1px solid #666;
}

@media screen and (min-width: 992px) {
    #cover1 {
        background-image: url(./assets/images/logo/press_thumb.png) !important;
    }
    #cover2 {
        background-image: url(./assets/images/logo/hub_thumb.png) !important;
    }
    #cover3 {
        background-image: url(./assets/images/logo/consult_thumb.png) !important;
    }

}


@media screen and (max-width: 991px) {
    #cover1 {
        background-image: url(./assets/images/vms_preview.png) !important;
    }
    #cover2 {
        background-image: url(./assets/img/cover/hub_preview.png) !important;
    }
    #cover3 {
        background-image: url(./assets/img/consult_preview.png) !important;
    }

    .brg-cover .brg-cover-hero .desc-thumb p {
        margin-bottom: 2px !important;
        background-color: transparent !important;
        padding: 0 !important;
        color: #fff !important;
    }

    .brg-cover .brg-cover-hero .desc-thumb {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 40px;
        background: rgba(51, 51, 51, 0.9);
    }

    .brg-cover .brg-cover-hero .desc-thumb span {
        color: #DD7520 !important;
    }

    .brg-cover .brg-cover-hero .desc-thumb a {
        color: #DD7520 !important;
    }

    .brg-cover .brg-cover-hero .desc-thumb span {
        padding-left: 0px !important;
        margin-left: 1px;
        position: absolute !important;
        width: 45%;
        top: 4em;
        background-color: transparent !important;
        color: #FFF;
    }
}

</style>
