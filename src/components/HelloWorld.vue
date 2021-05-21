
<template>
  <div v-bind:style="image" id="bg">
    <my-component></my-component>
    
      

     
    
    <typical
      :steps="['Derailleur', 1000, 'Derailleur Hanger Finder', 500]"
      :wrapper="'h1'"
    ></typical>

     <div :class="{ shake: noActivated }">
        <button @click="noActivated = true">INFO</button>
        <span  v-if="noActivated">
          <h4 id="info" >What this website does</h4>
          <p id="info" >Hi This is a web application designed to help people find which Derailleur hanger you have on your bicycle. Often when cyclists break their Derailleur Hangers they buy replacements directly from the frame manafacturer. This app helps users find generic replacemnts which are usuallly a lot cheaper. A simple questionare is used to query the database, and a set of possible hangers is reurned to the user to compare with their own broken one. </p>
          <h4 id="info" >How it does it</h4>
          <p id="info" >This website is built using vue, express and a mongodb database. The vue front-end is a series of vue components linked uing the vue router (statically hosted by surge). The front end makes requests of the express api( hosted on heroku) using the axios http client, and the api queries the mongo database which is  on thier web serivce axios.</p>
          <img id="info" src="@/assets/hangers.png">
          </span>
      </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      noActivated: false,
      image: {
        "background-image":
          'url("https://images.unsplash.com/photo-1511877150299-3622fc88aee3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1650&q=80")',
      },
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  background-color: #4d7ef79e;
  display: inline-block;
  margin-top: 2vh;
  border-radius: 10px;
  color: #f2f2f2;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 2vh;
  font-weight: bold;
  
}
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a
.shake {
  animation: shake 1s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
}

button {
  background-color: transparent;
  background-color: #4d7ef79e;
  display: block;
  margin-top: 15vh;
  margin-left : auto;
  margin-right : auto;
  border-radius: 10px;
  color: #f2f2f2;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 2vh;
  font-weight: bold;
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}

#bg {
  min-height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: local;
}

#info {
   background-color: rgba(105,105,105,0.7);
   color: whitesmoke;
   display: inline-block;
   font-size: 1.5vh;
   
}
</style>
