<template>
<div class="header">
  <meta name="viewport" content="width=device-width">


    <table>
  <tr>
    
        <td class="home" >
          <h4 @click="goHere('HelloWorld')" > Home Page </h4>
        </td>
        <td class="home" >
          <h4 @click="goHere('Hangers')" > Hangers Database </h4>
        </td>
        <td class="home" >
          <h4 @click="goHere('FindHanger')" > Find Hanger </h4>
        </td>
        
        <td class="home" >
          <h4 @click="goHere('NewHanger')"> New Hanger </h4>
        </td>
    
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
.home {
    border-radius: 10px;
    border-width: 2px;
    
    border-image: initial;
    
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

table tr:nth-child(odd) {
  background: #f2f2f2;
}
table tr:nth-child(1) {
  background: #4d7ef79e;
  color: #fff;
}
a {
  color: #4d7ef79e;
  text-decoration: none;
}
a.add_post_link {
  background: #4d7ef79e;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  
}

</style>