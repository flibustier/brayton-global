<template>
  <div>
    <intro headline="Our Team" image="ux_intro.jpg"/>

      <el-row :gutter="20">
        <transition-group name="custom-classes-transition"
        enter-active-class="animated fadeInUp"
        appear>
          <el-col :xs="{span: 16, offset:4}" :sm="{span: 9, offset: 2}"
          :md="{span: 5, offset: 2}" :lg="{span: 5, offset: 1}"
          v-for="(o, index) in team" :key="o" style="margin-bottom: 50px">

            <el-card :body-style="{ padding: '10px' }">
              <img :src="imagePath(o.picture)" class="image" :alt="o.picture">
              <div style="padding: 14px;">
                <span>{{ o.name }}</span>
                <div class="bottom clearfix">
                  <span class="position">
                    {{ o.position }}
                  </span>
                  <br/>
                  <el-tooltip class="item" effect="light" :content="o.email"
                  placement="bottom">
                    <a class="email" :href="'mailto:' + o.email">
                      <i class="icon-email"></i>
                    </a>
                  </el-tooltip>
                  <a class="button" :href="o.linkedin">
                    <i class="icon-linkedin2"></i>
                  </a>
                </div>
              </div>
            </el-card>
          </el-col>
        </transition-group>
      </el-row>

  </div>

</template>

<script>
  import intro from './Intro';
  import team from '../team.json';

  export default {
    components: {
      intro
    },

    methods: {
        imagePath: (name) => require('../assets/img/team/' + name)
    },

    data: function () {
      return {
        'team': team
      }
    }
  }
</script>

<style scoped>
  @media screen and (min-width: 1200px) {
      .el-row {
          margin-right: 2em !important;
      }
  }

  .position {
      font-size: 0.85em;
  }

  .email {
      padding: 0;
      float: left;
      margin-top: 20px;
  }

  .bottom {
    margin-top: 14px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
    margin-top: 20px;
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
