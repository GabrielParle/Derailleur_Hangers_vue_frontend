<template>
<div id="bg" :style="{'background-image': `url(${require('@/assets/background2.jpeg')})`}">

  <div class="hangers">
    <my-component></my-component>
    <h1>Derailleur Hangers</h1>
    <div v-if="(hangers.length)" class="table-wrap">
      <div>
        <router-link v-bind:to="{ name: 'NewHanger' }" class="addhanger">Add Hanger</router-link>
      </div>
      <table class="tableofHangers">
        <tr class="headers">
          <td width="10%">Hanger Name</td>
          <td width="8%">Number of bolts</td> 
          <td width="8%">Inside Dropout</td>
          <td width="8%">Outside Dropout</td>
          <td width="8%">QR</td>
          <td width="8%">ThruAxle</td>
          <td width="20%">Image</td>
          <td width="10%" align="center">Action</td>
        </tr>
        <tr v-for="hanger in hangers">
          <td>{{ hanger.name }}</td>
          <td>{{ hanger.bolts }}</td>
          <td>{{ hanger.inside }}</td>
          <td>{{ hanger.outside }}</td>
          <td>{{ hanger.qr }}</td>
          <td>{{ hanger.thruAxle }}</td>
          <td><img class="image" v-bind:src="hanger.image"></td>
          <td align="center">
            <router-link v-bind:to="{ name: 'EditHanger', params: { id: hanger._id } }">Edit</router-link> |
            <a href="#" @click="deleteHanger(hanger._id)">Delete</a>
          </td>
        </tr>
      </table>
    </div>
    <div v-else>
      <h2>Loading <pulse-loader color="whitesmoke"></pulse-loader></h2>
      <router-link v-bind:to="{ name: 'NewHanger' }" class="add_hanger_link">Add Hanger</router-link>
    </div>
    
  </div>
  </div>
  
  
</template>

<script>
import HangerService from '@/services/HangerService'

export default {
  name: 'hangers',
  data () {
    return {
      hangers: [],
      image: {
        "background-image":
          'url("/home/gabriel/Documents/DerailleurHangers/client/src/assets/background2.jpeg")',
      },
    }
  },
  mounted () {
    this.getHangers()
  },
  methods: {
    async getHangers () {
      const response = await HangerService.fetchHangers()
      this.hangers = response.data.hangers
    },
    async deleteHanger (id) {
        await HangerService.deleteHanger(id)
        this.$router.push({name: 'Hangers'})
    }
  }
}
 
</script>
<style scoped type="text/css">
.table-wrap {
  
  margin-right: 10%;
  margin-left: 10%;
  text-align: center;
}
.headers {
   color: whitesmoke;
}
table th, table tr {
  text-align: left;
 

}

table tr td {
  padding: 5px;
  
}

table tr:nth-child(1) {
  background: #4d7ef79e;
  
}
table tr:nth-child(n+2) {
  background: whitesmoke;
 
  

}
a {
 
  text-decoration: none;
  color: #4d7ef79e;
}
a.add_post_link {
  background: #4d7ef79e;
  
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
}
template {
  margin-top: 10px;
  background-color: whitesmoke;
}
.image {
  max-height: 10vw;
}
h1{
  color: whitesmoke;
}
.addhanger{
  font-weight: bold;
  margin-bottom: 100px;
  style: inline;
  padding: 10px;
}
.addhanger{
  color: #2c3e50;
  padding-bottom: 10px;
  
}
h2 {
  color: whitesmoke;
  
}
#bg {
   min-height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: local;
  
}


</style>