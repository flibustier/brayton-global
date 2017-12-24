<template>
  <div>
    <intro headline="Our Team" :image="introImage"/>



        <!--
        <div class="row">
          <div class="col-md-4 col-md-push-4 animate-box">
            <div class="text-left">
              <h3>Frederic De Boom</h3>
              <span>Founder & CEO</span>
              <p>
                <span>Email: frederic@braytonglobal.com</span>
              </p>
            </div>
          </div>
          <div class="col-md-2 col-md-pull-3 animate-box">
            <figure>
              <a href="#"><img class="img-responsive" src="../assets/images/fred.png" alt="Frédéric De Boom"></a>
            </figure>
          </div>
        </div>

        <div class="row margTop3em">
          <div class="col-md-4 col-md-push-4 animate-box">
            <div class="text-left">
              <h3>Jon Snow</h3>
              <span>CTO</span>
              <p>
                <span><i class="icon-email"></i> jon@braytonglobal.com</span><br/>

              </p>
            </div>
          </div>
          <div class="col-md-2 col-md-pull-3 animate-box">
            <figure>
              <a href="#"><img class="img-responsive" src="../assets/img/team/jon.min.jpg" alt="Frédéric De Boom"></a>
            </figure>
          </div>
        </div>
      -->

        <el-row class="animate-box">
          <el-col :span="5" v-for="(o, index) in team" :key="o" :offset="2" style="margin-bottom: 50px">
            <el-card :body-style="{ padding: '10px' }">
              <img :src="img" class="image">
              <div style="padding: 14px;">
                <span>{{ o.name }}</span>
                <div class="bottom clearfix">
                  <span>{{ o.position }}</span><br/><br/>
                  <span style="font-size: 0.7em"><i class="icon-email"></i> {{ o.email }}</span><br/>
                  <a class="button" :href="o.linkedin">
                    <i class="icon-linkedin2"></i>
                  </a>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
{{ img }}
  </div>

</template>

<script>
  import intro from './Intro';
  import team from '../team.json';

  export default {
    components: {
      intro
    },

    data: function () {
      return {
        'introImage': "ux_intro.jpg",
        'team': team,
        'img': require('../assets/img/team/jon.min.jpg')
      }
    }
  }
</script>

<style>
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }

  .clearfix:after {
      clear: both
  }
</style>
