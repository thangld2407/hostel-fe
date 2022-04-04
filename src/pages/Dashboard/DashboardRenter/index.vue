<template>
  <div id="header-dashboard">
    <div class="header-userName">
        <h2>Hi, ADMIN!</h2>
        <p>Email : 123@123</p>
        <p>Role : ADMIN</p>
    </div>
        <div class="header-img">
            <img alt="Vue logo" src="@/assets/images/wellcome.png">
        </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      wellcome : wellcome
    }
  }
}
</script>

<style scoped>
#header-dashboard{
    height: 150px;
    width: 600px;
    margin: 100px 0px 0px 350px;
    display: flex;
    padding: 10px;
    border: 1px solid orange;
    border-radius: 5px;
    justify-content: space-between;
    align-items: center;
}
.header-img img{
  height: 100px ;
  width: 200px ;
}
</style>