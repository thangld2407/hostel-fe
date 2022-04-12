<template>
    <div id="revenue">
		<div class="title">{{$t('REVENUE.TITLE')}}</div>
		<div class="revenue-management_searching-filter">
      <b-form-select v-model="selected">
					<b-form-select-option :value="null">{{$t('REVENUE.SELECT.AREA')}}</b-form-select-option>
					<b-form-select-option
						v-for="(type, index) in month"
						:key="index"
						>{{type.name}}</b-form-select-option
					>
				</b-form-select>
        <b-form-select v-model="selected">
					<b-form-select-option :value="null">{{$t('REVENUE.SELECT.ADDRESS')}}</b-form-select-option>
					<b-form-select-option
						v-for="(type, index) in month"
						:key="index"
						>{{type.name}}</b-form-select-option
					>
				</b-form-select>
				<b-form-select v-model="selected">
					<b-form-select-option :value="null">{{$t('REVENUE.SELECT.MONTH')}}</b-form-select-option>
					<b-form-select-option
						v-for="(type, index) in month"
						:key="index"
						>{{type.name}}</b-form-select-option
					>
				</b-form-select>
		</div>
        <div class="revenue-header">
			<div class="header-box">
				<h2><i class="fas fa-shopping-bag"></i>{{$t('REVENUE.BOX.RENTED_ROOM')}}</h2>
				<h3> 250 </h3>
			</div>
			<div class="header-box">
				<h2><i class="fas fa-sync"></i>{{$t('REVENUE.BOX.REVENUE')}}</h2>
				<h3> 220 </h3>
			</div>
			<div class="header-box">
				<h2> <i class="far fa-clock"></i>{{$t('REVENUE.BOX.DEBT')}}</h2>
				<h3> 30 </h3>
			</div>
		</div>
        <div class="container">
            <table class="table table-bordered">
            <thead>
              <tr>
                <th scope="col" class="col-1">{{$t('REVENUE.TABLE.AREA')}}</th>
                <th scope="col" class="col-2">{{$t('REVENUE.TABLE.ADDRESS')}}</th>
                <th scope="col" class="col-1">{{$t('REVENUE.TABLE.TOTAL_ROOM')}}</th>
                <th scope="col" class="col-1">{{$t('REVENUE.TABLE.MANAGER')}}</th>
                <th scope="col" class="col-1">{{$t('REVENUE.TABLE.TOTAL_PRICE')}}</th>
                <th scope="col" class="col-1">{{$t('REVENUE.TABLE.DEBT')}}</th>
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
    margin-top: 30px;
}
</style>