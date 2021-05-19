<template>
<div id="bg" :style="{'background-image': `url(${require('@/assets/background2.jpeg')})`}">
    <my-component></my-component>
    <div>
    <h1>Add New Hanger</h1>
    </div>
    <div id="block">
    <div class="form">
        <div>
            <input type="text" name="name" class="text" placeholder="Add new Hanger Name" v-model="name">
        </div>
        <div>
            <input type="Number" name="bolts" class="text"placeholder="999" v-model="bolts">
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
            <input type="checkbox" name="qr" class="select" v-model="qr">
        </div>
        <div>
            <label for="outside">ThruAxle</label>
            <input type="checkbox" name="thruAxle"  class="select" v-model="thruAxle">
        </div>
        <div>
            <input type="url" name="image" class="text" placeholder="image url" v-model="image">
        </div>
        <div>
            <button class="app_post_btn" @click="addPost">add Hanger</button>
        </div>
    </div>
    </div>
    
</div>
</template>

<script>
import HangerService from '@/services/HangerService'
export default {
  name: 'NewHanger',
  data( ) {
        return {
            name: '',
            bolts: '',
            inside: false,
            outside: false,
            qr: false,
            thruAxle: false,
            image: 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg' 
        }
    },
    methods: {
        async addPost() {
            await HangerService.addHanger({
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

<style type="text/css">
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
#bg {
   min-height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: local;
  
}
#block {
    color: whitesmoke;
    background-color: rgba(105,105,105,0.6);
    display: inline-block;
}
h1 {
    color: whitesmoke;
    display: inline-block;
    background-color: rgba(105,105,105,0.6);
}

</style>
