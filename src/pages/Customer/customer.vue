<template>
  <div id="customer">
      <div class="title">{{$t('CUSTOMER.TITLE')}}</div>
      <div class="customer-content">
        <div class="zone-header-page">
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              :placeholder="$t('CUSTOMER.SEARCH.PLACEHOLDER')"
              id="product-search"
            />
          </div>
          <button><i class="fa fa-search"></i>{{$t('CUSTOMER.SEARCH.TITLE')}}</button>
        </div>
			  <table class="table table-bordered">
            <thead>
              <tr>
                <th scope="col" class="col-1">{{$t('CUSTOMER.TABLE.ID')}}</th>
                <th scope="col" class="col-2">{{$t('CUSTOMER.TABLE.NAME')}}</th>
                <th scope="col">{{$t('CUSTOMER.TABLE.PHONE')}}</th>
                <th scope="col" class="col-3">{{$t('CUSTOMER.TABLE.ADDRESS')}}</th>
                <th scope="col">{{$t('CUSTOMER.TABLE.START_AT')}}</th>
                <th scope="col">{{$t('CUSTOMER.TABLE.TOTAL_DEPT')}}</th>
                <th scope="col" class="col-1"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td class="actions">
                  <div
                    type="button"
                    class="btn btn-danger"
                  >
                    <i class="fa fa-trash"></i>
                  </div>
                </td>
              </tr>
              <tr> 
                <th scope="row">{{room_info.room_number}}</th>
                <td>{{room_info.name}}</td>
                <td>{{room_info.phone}}</td>
                <td>{{room_info.address}}</td>
                <td>{{room_info.start_at}}</td>
                <td>@mdo</td>
                <td class="actions">
                  <div
                    type="button"
                    class="btn btn-danger"
                  >
                    <i class="fa fa-trash"></i>
                  </div>
                </td>
              </tr>
            </tbody>
        </table>
		</div>
  </div>
</template>

<script>
export default {
  name:'customer',
  computed:{
    list(){
      return this.$store.state.app.list
      
    },
    room_info(){
      return this.$store.state.app.room_info  
    },
    
  },
}
</script>

<style scoped>
#customer .title {
  z-index: 1;
  position: fixed;
  width: 100%;
  top: 50px;
  background: #557B83;
  height: 40px;
  line-height: 40px !important;
  color: white;
  padding-left:20px ;
}
#customer .customer-content{
  position: relative;
  top: 80px;
  margin: 30px;
}
.customer-content .zone-header-page {
  display: flex;
  margin: 60px 0px 50px 30px;
  height: 40px;
  z-index: 0;
}
.customer-content input{
    width: 300px;
}
.customer-content button {
  background: #1572a1;
  color: white !important;
  border: none;
  border-radius: 5px;
  width: 100px;
  margin-left: 20px;
  height: 38px;
}
#customer .customer-content table{
  text-align: center;
}
</style>