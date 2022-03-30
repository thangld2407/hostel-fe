<template>
    <div id="revenueAdmin">
		<div class="title">Doanh Thu</div>
		<div class="revenue-management_searching-filter">
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
    </div>
</template>

<script>
export default {
	name:'revenueAdmin',
	data(){
		return{
			selected: null,
			month:[
				{
					name:'Tháng 1',
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
#revenueAdmin .title {
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
.revenue-management_searching-filter{
	margin: 120px 0px 0px 20px;
	width: 200px;
}
#revenueAdmin .revenue-header{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    text-align: center;
	margin: 30px 20px 0px 20px;
}
#revenueAdmin .header-box{
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
</style>