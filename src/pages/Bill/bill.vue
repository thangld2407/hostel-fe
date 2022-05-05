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
				<div class="form-group row" v-for="(service,index) in invoice[0].other_service" :key="index">
					<label class="col-sm-2 form-control-label">{{service.name || ''}}</label>
					<div class="col-sm-10">
						<input type="text" class="form-control" v-model="service.price" readonly />
					</div>
				</div>
				<div class="form-group row">
					<label class="col-sm-2 form-control-label">Giá Phòng</label>
					<div class="col-sm-10">
						<input type="text" class="form-control"  readonly />
					</div>
				</div>
				<div class="form-group row">
					<label class="col-sm-2 form-control-label">Tiền Điện</label>
					<div class="col-sm-10">
						<input type="text" class="form-control" v-model="invoice[0].electricity_consumed_per_month" readonly />
					</div>
				</div>
				<div class="form-group row">
					<label class="col-sm-2 form-control-label">Nước</label>
					<div class="col-sm-10">
						<input type="text" class="form-control" readonly v-model="invoice[0].water_consumed_per_month"/>
					</div>
				</div>
				<div class="form-group row">
					<label class="col-sm-2 form-control-label">Tổng Tiền</label>
					<div class="col-sm-10">
						<label type="text" class="form-control" readonly>{{invoice[0].total || ''}}</label>
					</div>
				</div>
				<div>
					<button class="btn btn-primary" @click="handleModal()" v-b-modal.modal-1
						><i class="fas fa-credit-card"></i> Thanh Toán</button
					>
				</div>
			</form>
			<b-modal id="modal-1" v-model="showModal" :title="$t('ROOM.FORM.TITLE')" centered>
				<div class="col-6 col-sm-12">
					<div>
						<label for="">Bank</label>
						<b-form-select :selected="payment.bankCode" v-model="payment.bankCode">
							<b-form-select-option :value="null">Chọn địa điểm</b-form-select-option>
							<b-form-select-option v-for="bank in options_bank" :key="bank.id" :value="bank.shortName">
								{{ bank.vn_name }}
							</b-form-select-option>
						</b-form-select>
					</div>
				</div>
				<template #modal-footer>
					<div>
						<b-button class="btn btn-primary" @click="handlePayment()">
							{{ $t('ROOM.FORM.CREATE') }}
						</b-button>

						<b-button class="btn btn-danger" @click="showModal = false">
							{{ $t('ROOM.FORM.CLOSE') }}
						</b-button>
					</div>
				</template>
			</b-modal>
		</div>
	</div>
</template>

<script>
	import { Payment, getListBank } from '@/api/modules/payment';
	import { getToken } from '../../const/cookie';
	import { MakeToast } from '@/toast/toastMessage';
	import { getInvoice,getOneInvoice } from '@/api/modules/invoice';
	import { getOneRoom } from '@/api/modules/room';
	export default {
		name: 'bill',
		data() {
			return {
				showModal: false,
				rooms:[],
				selected: null,
				invoice:[],
				month: [
					{
						name: 'Tháng 1'
					}
				],
				payment: {
					bankCode: ''
				},
				options_bank: []
			};
		},
		computed: {
			user_id() {
				const id = getToken('_id');
				return id;
			},
			lang() {
				return this.$store.getters.language;
			}
		},
		created() {
			this.getBank();
			this.getBill();
			this.getRoom()
		},
		methods: {
			async getBank() {
				await getListBank()
					.then(res => {
						this.options_bank = res.bank;
					})
					.catch(err => {
						console.log(err);
					});
			},
			async getBill(id){
				id = this.user_id,
				await getOneInvoice({user_id : id, date: 'invoice.date_month'})
					.then(res=>{
						this.invoice = res.data
						console.log(this.invoice[0].room_id);
					})
					.catch(err=>{
						console.log(err);
					})
			},
			async getRoom(){
				const id = {id:this.invoice[0].room_id}
				await getOneRoom(id)
					.then(res =>{
						this.rooms = res.data
						console.log(this.room);
					})
					.catch(err=>{
						console.log(err);
					})
			},
			async handleModal() {},
			async handlePayment() {
				let d = new Date();
				let year = d.getFullYear();
				let month = d.getMonth() + 1;
				let date = month + '/' + year;
				const data = {
					bankCode: this.payment.bankCode,
					user_id: this.user_id,
					language: this.lang,
					date_month: date
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
