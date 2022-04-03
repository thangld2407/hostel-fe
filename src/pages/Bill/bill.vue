<template>
  <div id="bill">
    <div class="title">
      <p>Hóa đơn phòng số : 1</p>
    </div>
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
    <div class="container">
        <form>
            <div class="form-group row">
                <label class="col-sm-2 form-control-label">Internet</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" placeholder="Giá Internet" readonly>
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-2 form-control-label">Phí khác</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" placeholder="Phí Phát Sinh" readonly>
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-2 form-control-label">Giá Phòng</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" placeholder="Nhập Giá Phòng" readonly>
                </div>
            </div>   
            <div class="form-group row">
                <label class="col-sm-2 form-control-label">Điện</label>
                <div class="col-sm-5">
                    <input type="text" class="form-control" placeholder="Nhập Số Điện" readonly>
                </div>
                <div class="col-sm-5">
                    <input type="text" class="form-control" placeholder="Nhập Giá Điện" readonly>
                </div>
            </div>
            <div class="form-group row">
                <div class="offset-sm-3"> Tổng tiền Điện:</div>
            </div>
            <div class="form-group row">
                <label class="col-sm-2 form-control-label">Nước</label>
                <div class="col-sm-5">
                    <input type="text" class="form-control" placeholder="Nhập Số Nước" readonly>
                </div>
                <div class="col-sm-5">
                    <input type="text" class="form-control" placeholder="Nhập Giá Nước" readonly>
                </div>
            </div>
            <div class="form-group row">
                <div class="offset-sm-3">Tổng tiền Nước:</div>
            </div>
            <div class="form-group row">
                <label class="col-sm-2 form-control-label">Nợ</label>
            </div>
            <div class="form-group row">
                <label class="col-sm-2 form-control-label">Tổng Tiền:</label>
            </div>
        </form>
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
				}
			]
			
		}
	}
}
</script>

<style>
#bill .title {
  position: fixed;
  width: 100%;
  top: 50px;
  background: #557B83;
  height: 40px;
  line-height: 40px;
  color: white;
  padding-left: 20px;
  z-index: 1;
}
#bill .container{
    margin: 50px 100px 100px 100px;
}
.revenue-management_searching-filter{
	margin: 120px 0px 0px 20px;
	width: 200px;
}
</style>