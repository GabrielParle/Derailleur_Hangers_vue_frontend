<template>
<div class="header">
  <meta name="viewport" content="width=device-width">


    <table>
  <tr>
    
        <button class="home" @click="goHere('HelloWorld')" >
          <td class="home" >
          <h4 > Home Page </h4>
          </td>
        </button>
         <button class="home" @click="goHere('Hangers')">
        <td class="home" >
          <h4  > Hangers Database </h4>
        </td>
         </button>
          <button class="home" @click="goHere('FindHanger')" >
        <td class="home" >
          <h4  > Find Hanger </h4>
        </td>
         </button>
         <button class="home" @click="goHere('NewHanger')" >
        <td class="home" >
          <h4 > New Hanger </h4>
        </td>
        </button>
    
  </tr>
  </table>
</div>

</template>
<script>

export default {
    methods:{
        goHere(nameUrl) {
            this.$router.push({ name: nameUrl })
        }
    }
    
}
</script>
<style scoped>

.header {
    background-color: rgba(105,105,105,0.5);
    
}
button {
  background-color: transparent;
  background-color: #4d7ef79e;
  display: inline-block;
  
  border-radius: 10px;
  color: #f2f2f2;
  
  text-transform: uppercase;
  font-size: 1.5vh;
  font-weight: bold;
}

.table-wrap {
  width: 60%;
  margin: 0 auto;
  text-align: center;
}
table th, table tr {
  text-align: left;
  
}
table thead {
  background: #f2f2f2;
}



</style>