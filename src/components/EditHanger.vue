<template>
<div id="bg" :style="{'background-image': `url(${require('@/assets/background2.jpeg')})`}">
  <div class="Hangers">
    <my-component></my-component>
    <h1>Edit Hanger</h1>
      <div class="form">
        <div>
          <input type="text" class="text" name="name" placeholder="TITLE" v-model="name">
        </div>
        <div>
          <input type="number" class="text" placeholder="bolts" v-model="bolts"></textarea>
        </div>
        <div>
            <label for="inside">mounts to the Inside of the frame</label>
            <input type="checkbox" name="inside"  v-model="inside">
        </div>
        <div>
            <label for="outside">mounts to the outside of the frame</label>
            <input type="checkbox" name="outside"  v-model="outside">
        </div>
        <div>
            <label for="qr">Quick Release</label>
            <input type="checkbox" name="qr"  v-model="qr">
        </div>
        <div>
            <label for="outside">ThruAxle</label>
            <input type="checkbox" name="thruAxle"  v-model="thruAxle">
        </div>
        <div>
            <input type="url" name="image" class="text"  v-model="image">
        </div>
        <div>
          <button class="app_post_btn" @click="updateHanger">Update</button>
        </div>
      </div>
  </div>
  </div>
</template>

<script>
import HangerService from '@/services/HangerService'
export default {
  name: 'EditHanger',
  data () {
    return {
      name: '',
      bolts: '',
      inside: false,
      outside: false,
      qr: false,
      thruAxle: false,
      image: 'luke warm'
    }
  },
  mounted () {
    this.getHanger()
  },
  methods: {
    async getHanger () {
      const response = await HangerService.getHanger({
        id: this.$route.params.id
      })
      this.name = response.data.name
      this.bolts = response.data.bolts
      this.inside = response.data.inside
      this.outside = response.data.outside
      this.qr = response.data.qr
      this.thruAxle = response.data.thruAxle
      this.image = response.data.image
      console.log(response.data.image);
    },
    async updateHanger () {
      await HangerService.updateHanger({
        id: this.$route.params.id,
        name: this.name,
        bolts: this.bolts,
        inside: this.inside,
        outside: this.outside,
        qr: this.qr,
        thruAxle: this.thruAxle,
        image: this.image
      })
      this.$router.push({ name: 'Hangers' })
    }
  }
}
</script>
<style scoped type="text/css">
.text {
  width: 500px;
  padding: 10px;
  border: 1px solid #e0dede;
  outline: none;
  font-size: 12px;
}
.form div {
  margin: 20px;
}
.app_post_btn {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  width: 520px;
  border: none;
  cursor: pointer;
}
.text {
  width: 500px;
  padding: 10px;
  border: 1px solid #e0dede;
  outline: none;
  font-size: 12px;
}
#bg {
   min-height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: local;
  
}
</style>