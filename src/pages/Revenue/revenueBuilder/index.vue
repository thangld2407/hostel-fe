<template>
    <div id="revenueBuilder">
        <div class="revenue-management_searching-filter">
			<b-form-select v-model="selected">
			    <b-form-select-option :value="null">Chọn khu vực</b-form-select-option>
			    <b-form-select-option
				    v-for="(item, index) in area"
				    :key="index"
				    >{{item.name}}</b-form-select-option
			    >
		    </b-form-select>
		</div>
        <RevenueAdmin/>
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
import RevenueAdmin from "../revenueAdmin/index.vue"
export default {
    name:'revenueBuilder',
    components:{RevenueAdmin},
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
.revenue-management_searching-filter{
    margin: 120px 0px -158px 250px;
    width: 200px;
}
.container .table{
    width: 1250px ;
    margin: 50px 0px 0px -70px;
}
</style>