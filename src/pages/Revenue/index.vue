<template>
    <div id="revenue">
		<div class="title">Doanh Thu</div>
		<div class="revenue-management_searching-filter">
      <b-form-select v-model="selected">
					<b-form-select-option :value="null">Chọn khu vực</b-form-select-option>
					<b-form-select-option
						v-for="(type, index) in month"
						:key="index"
						>{{type.name}}</b-form-select-option
					>
				</b-form-select>
        <b-form-select v-model="selected">
					<b-form-select-option :value="null">Chọn địa điểm</b-form-select-option>
					<b-form-select-option
						v-for="(type, index) in month"
						:key="index"
						>{{type.name}}</b-form-select-option
					>
				</b-form-select>
				<b-form-select v-model="selected">
					<b-form-select-option :value="null">Chọn Tháng</b-form-select-option>
					<b-form-select-option
						v-for="(type, index) in month"
						:key="index"
						>{{type.name}}</b-form-select-option
					>
				</b-form-select>
		</div>
        <div class="revenue-header">
			<div class="header-box">
				<h2><i class="fas fa-shopping-bag"></i> Số phòng được thuê </h2>
				<h3> 250 </h3>
			</div>
			<div class="header-box">
				<h2><i class="fas fa-sync"></i> Doanh số </h2>
				<h3> 220 </h3>
			</div>
			<div class="header-box">
				<h2> <i class="far fa-clock"></i>Khách nợ </h2>
				<h3> 30 </h3>
			</div>
		</div>
        <div class="container">
            <table class="table table-bordered">
            <thead>
              <tr>
                <th scope="col" class="col-1">Tên khu vực</th>
                <th scope="col" class="col-2">Địa chỉ</th>
                <th scope="col" class="col-1">Tổng số phòng</th>
                <th scope="col" class="col-1">Người quản lý</th>
                <th scope="col" class="col-1">Tổng tiền</th>
                <th scope="col" class="col-1">Nợ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
</template>

<script>
export default {
    name:'revenue',
    data(){
		return{
			selected: null,
			area:[
				{
					name:'Hà Nội',
					address:'',
                    total_rooms_rented:'',
					turnover:'',
					room_debt:''
				}
			]
			
		}
	}
}
</script>

<style scoped>
#revenue{
  margin-top: 150px;
}
#revenue .title {
  position: fixed;
  width: 100%;
  top: 50px;
  background: #557B83;
  height: 40px;
  line-height: 40px ;
  color: white;
  padding-left:20px ;
}
#revenue .revenue-header{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    text-align: center;
	  margin: 30px 20px 0px 20px;
}
#revenue .header-box{
    border: 1px solid #D1D1D1;
}
.header-box:nth-child(1) {
	color: #00C897;
}
.header-box:nth-child(2) {
	color: orange;
}
.header-box:nth-child(3) {
	color: red;
}
.revenue-management_searching-filter{
  display: flex;
  margin-left:50px;
    /* width: 1200px; */
  
}
.revenue-management_searching-filter select{
  margin-right: 20px;
  width: 200px;
}
.container .table{
    width: 1250px ;
    margin: 50px 0px 0px -70px;
}
</style>