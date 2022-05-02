<template>
	<div id="bill">
		<div class="title">
			<p>Hóa đơn phòng số : 12</p>
		</div>
		<div class="revenue-management_searching-filter">
			<b-form-select v-model="selected">
				<b-form-select-option :value="null">Chọn Tháng</b-form-select-option>
				<b-form-select-option v-for="(type, index) in month" :key="index">{{
					type.name
				}}</b-form-select-option>
			</b-form-select>
		</div>
		<div class="container">
			<form>
				<div class="form-group row">
					<label class="col-sm-2 form-control-label">Internet</label>
					<div class="col-sm-10">
						<input type="text" class="form-control" placeholder="100000" readonly />
					</div>
				</div>
				<div class="form-group row">
					<label class="col-sm-2 form-control-label">Phí khác</label>
					<div class="col-sm-10">
						<input type="text" class="form-control" placeholder="50000" readonly />
					</div>
				</div>
				<div class="form-group row">
					<label class="col-sm-2 form-control-label">Giá Phòng</label>
					<div class="col-sm-10">
						<input type="text" class="form-control" placeholder="90000" readonly />
					</div>
				</div>
				<div class="form-group row">
					<label class="col-sm-2 form-control-label">Điện</label>
					<div class="col-sm-5">
						<input type="text" class="form-control" placeholder="20" readonly />
					</div>
					<div class="col-sm-5">
						<input type="text" class="form-control" placeholder="3000" readonly />
					</div>
				</div>
				<div class="form-group row">
					<div class="offset-sm-3"> Tổng tiền Điện: 60000</div>
				</div>
				<div class="form-group row">
					<label class="col-sm-2 form-control-label">Nước</label>
					<div class="col-sm-5">
						<input type="text" class="form-control" placeholder="20" readonly />
					</div>
					<div class="col-sm-5">
						<input type="text" class="form-control" placeholder="3000" readonly />
					</div>
				</div>
				<div class="form-group row">
					<div class="offset-sm-3">Tổng tiền Nước: 60000</div>
				</div>
				<!-- <div class="form-group row">
					<label class="col-sm-2 form-control-label">Nợ</label>
				</div> -->
				<div class="form-group row">
					<label class="col-sm-2 form-control-label">Tổng Tiền: 360000</label>
				</div>
				<div>
					<button class="btn btn-primary" @click="handlePayment()"
						><i class="fas fa-credit-card"></i> Thanh Toán</button
					>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
	import { Payment } from '@/api/modules/payment';
	import { getToken } from '../../const/cookie';
	import { MakeToast } from '@/toast/toastMessage';
	export default {
		name: 'bill',
		data() {
			return {
				selected: null,
				month: [
					{
						name: 'Tháng 1'
					}
				]
			};
		},
		computed: {
			id() {
				const id = getToken('_id');
				return id;
			},
			lang() {
				return this.$store.getters.language;
			}
		},
		methods: {
			async handlePayment() {
				const data = {
					bankCode: 'NCB',
					user_id: this.id,
					language: this.lang,
					date_month: ''
				};
				console.log(data);
				await Payment(data)
					.then(res => {
						this.url = res.url;
						window.open(this.url);
						// MakeToast({
						// 	variant: 'success',
						// 	title: this.$t('TOAST.SUCCESS'),
						// 	content: this.$t('MANAGER.FORM.SUCCESS')
						// });
						// this.isResetDataModal();
					})
					.catch(err => {
						console.log(err);
					});
			}
		}
	};
</script>

<style>
	#bill .title {
		position: fixed;
		width: 100%;
		top: 50px;
		background: #557b83;
		height: 40px;
		line-height: 40px;
		color: white;
		padding-left: 20px;
		z-index: 1;
	}
	#bill .container {
		margin: 50px 100px 100px 100px;
	}
	.revenue-management_searching-filter {
		margin: 120px 0px 0px 20px;
		width: 200px;
	}
</style>
