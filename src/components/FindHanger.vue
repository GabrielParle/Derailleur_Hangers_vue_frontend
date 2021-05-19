<template>
<div id="bg" :style="{'background-image': `url(${require('@/assets/background2.jpeg')})`}">
  <div class="Hangers">
    <my-component></my-component>
    <h1>Find Hanger</h1>
      <div >
        <div class="bolts" v-if="bolts == 0">
          <button @click="boltsSet(1)"> <img class="boltsimg"  src="@/assets/1bolt.jpg"> <h1>One mounting Bolt</h1></button>
          <button @click="boltsSet(2)"> <img class="boltsimg"  src="@/assets/2bolts.jpg"> <h1>Two mounting Bolts</h1></button>
          <button @click="boltsSet(3)"> <img class="boltsimg"  src="@/assets/gh-107-rear_large.jpg"> <h1>Three mounting Bolts</h1></button>
        </div> 
        <div v-if="bolts > 0 && (qr != true && thruAxle != true)">
          <button @click="qr = true"><img src="@/assets/qr.jpg"><h1>Quick Release</h1></button>
          <button @click="thruAxle = true"><img src="@/assets/thruAxle.jpg"><h1>ThruAxle</h1></button>
        </div> 
        <div v-if="(qr == true || thruAxle == true) && (inside != true && outside != true) ">
          <button @click="inside = true"><img src="@/assets/inside.png"><h1>Mounts inside the frame</h1></button>
          <button @click="outside = true"><img src="@/assets/outside.png"><h1>Mounts outside the frame</h1></button>
        </div> 
        <div v-if="(inside == true || outside == true) && display == false">
            <button class="find" @click="findHanger">Find Hanger</button>
        </div>   
      </div>
      <div v-if="display" class="table-wrap">
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
      <h2 class="fail" v-if="(hangers.length == 0) && display"> No Hangers Match your Criteria</h2>
      
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
      bolts: 0,
      qr: false,
      thruAxle: false,
      outside: false,
      inside: false,
      display: false
    }
  },

  
  
  methods: {
    async findHanger () {
      const response = await HangerService.findHanger({
        bolts: this.bolts,
        qr: this.qr,
        thruAxle: this.thruAxle,
        outside: this.outside,
        inside: this.inside
      })
      this.hangers = response.data.hangers;
      if(response.data.hangers) {
        this.display = true;
      }
    },
    boltsSet(num) {
      this.bolts = num;
    }
   
  }
}
</script>
<style scoped>
button h1{
  color: #4d7ef79e;
 justify-content: center;

  bottom: 0;
}
.table-wrap {
  
  margin-right: 10%;
  margin-left: 10%;
  text-align: center;
}
.bolts {
  margin-left: 10%;
  margin-right: 10%;
            display: flex;
            justify-content: space-between;
            border-radius: 10px;
          }
.boltsimg {
size: 10px;
}     
button{
  background-color: white;
}
table tr:nth-child(1) {
  background: #4d7ef79e;
  
}

.fail {
  font-size: 5vh;
  color: 2c3e50;
}
.headers {
   color: whitesmoke;
}
.table-wrap {
  
  margin-right: 10%;
  margin-left: 10%;
  text-align: center;
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
.find {
  background: #4d7ef79e;
  color: whitesmoke;
  padding: 10px 80px;
  
  font-size: 1.5vh;
  font-weight: bold;
}
#bg {
   min-height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: local;
  
}
</style>