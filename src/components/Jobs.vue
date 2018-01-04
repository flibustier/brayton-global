<template>
  <div>
    <el-table
      :data="requests"
      v-loading="loading"
      style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <span v-if="props.row.startDate">Start Date: {{ props.row.startDate }}</span><br/>
          <span v-if="props.row.endDate">End Date: {{ props.row.endDate }}</span>
          <pre v-if="props.row.description">{{ props.row.description }}</pre>
        </template>
      </el-table-column>
      <el-table-column
        label="Location"
        prop="location">
      </el-table-column>
      <el-table-column
        label="Profile"
        prop="profile.name">
      </el-table-column>
      <el-table-column
        label="Level"
        prop="profile.level">
      </el-table-column>
      <el-table-column
        label="Price"
        prop="price">
      </el-table-column>
    </el-table>
    <h3>See more at <a href="http://skillmatrix.be">skillmatrix.be</a>!</h3>
  </div>
</template>

<script>
  import api from '../api'

  export default {
    data: function () {
      return {
        'requests': [],
        'loading': true
      }
    },

    created() {
      api.requests().then(requests => {
        this.requests = requests;
        this.loading = false
      });
    }
  }
</script>

<style scoped>
  h3 {
    color: #DD7520;
    margin-top: 30px;
    text-align: center;
  }
</style>
