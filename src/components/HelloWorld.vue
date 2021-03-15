
<template>
  <div v-bind:style="image" id="bg">
    <my-component></my-component>
    
      

      <div :class="{ shake: noActivated }">
        <button @click="noActivated = true">special</button>
        <span v-if="noActivated">Oh no!</span>
      </div>
    
    <typical
      :steps="['Derailleur', 1000, 'Derailleur Hanger Finder', 500]"
      :wrapper="'h1'"
    ></typical>
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
  margin-top: 15vh;
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
a {
  color: #42b983;
}
.shake {
  animation: shake 1s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
}

button {
  background-color: transparent;
  background-color: #4d7ef79e;
  display: inline-block;
  margin-top: 15vh;
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
</style>
