<template>
  <div id="customer">
      <div class="title">Khách hàng</div>
      <div class="customer-content">
        <div class="zone-header-page">
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              placeholder="Nhập số phòng hoặc tên KH"
              id="product-search"
            />
          </div>
          <button><i class="fa fa-search"></i> Tìm kiếm</button>
        </div>
			  <table class="table table-bordered">
            <thead>
              <tr>
                <th scope="col" class="col-1">Phòng Số</th>
                <th scope="col" class="col-2">Chủ Phòng</th>
                <th scope="col">Điện Thoại</th>
                <th scope="col" class="col-3">Địa Chỉ</th>
                <th scope="col">Ngày Thuê</th>
                <th scope="col">Tổng Nợ</th>
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
  position: fixed;
  width: 100%;
  top: 50px;
  background: #557B83;
  height: 40px;
  line-height: 40px !important;
  color: white;
  font-weight: 500;
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