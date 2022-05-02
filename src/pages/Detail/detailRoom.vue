<template>
	<div id="detail">
		<div v-if="isLoading" class="spinner-border text-primary" role="status">
			<span class="sr-only">Loading...</span>
		</div>
		<div class="content mt-3">
			<div class="title">{{ $t('ROOM_DETAIL.TITLE') }}</div>
			<div class="container">
				<div class="row">
					<div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
						<h3>{{ $t('ROOM_DETAIL.NAME') }} : {{ rooms.room.room_name }}</h3>
						<table class="table table-hover">
							<tbody>
								<tr>
									<td>{{ $t('ROOM_DETAIL.ID') }}</td>
									<td>{{ rooms.room.room_name }}</td>
								</tr>
								<tr>
									<td>{{ $t('ROOM_DETAIL.STATUS') }}</td>
									<td>
										<div class="btn btn-success" v-if="rooms.room.status"
											>Active</div
										>
										<div class="btn btn-danger" v-else>Trống</div>
									</td>
								</tr>
								<tr>
									<td>{{ $t('ROOM_DETAIL.RENTAL_DATE') }}</td>
									<td>{{ rooms.room.createAt.slice(0, 10) || '' }}</td>
								</tr>
								<tr>
									<td>{{ $t('ROOM_DETAIL.SERVICE') }}</td>
									<td>
										<p
											><input type="checkbox" value="220000" disabled="" />
											Internet Cáp Quang (220 000VND)</p
										>
										<p><input type="text" disabled /></p>
									</td>
								</tr>
								<tr>
									<td>{{ $t('ROOM_DETAIL.PRICE') }}</td>
									<td>{{ rooms.room.price }}</td>
								</tr>
								<tr>
									<td>
										<p>{{ $t('ROOM_DETAIL.TOTAL') }}:</p>
										<!-- <p>(chưa bao gồm điện,nước)</p> -->
									</td>
									<td>{{ total }}</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div class="infomation_user col-xs-4 col-sm-4 col-md-4 col-lg-4">
						<h3>{{ $t('ROOM_DETAIL.CUSTOMER') }}</h3>
						<div class="row text-center">
							<div class="col-xs-5 col-sm-5 col-md-5 col-lg-5">
								<p>{{ $t('ROOM_DETAIL.NAME_USER') }}</p>
								<p>{{ $t('ROOM_DETAIL.CARD') }}</p>
								<p>{{ $t('ROOM_DETAIL.DOB') }}</p>
								<p>{{ $t('ROOM_DETAIL.HOMETOWN') }}</p>
								<p>{{ $t('ROOM_DETAIL.PHONE') }}</p>
								<p>{{ $t('ROOM_DETAIL.GENDER') }}</p>
							</div>
							<div class="col-xs-7 col-sm-7 col-md-7 col-lg-7">
								<p>{{ rooms.request.user_id.username }}</p>
								<p>{{ rooms.request.user_id.id_card_number }}</p>
								<p>{{ rooms.request.user_id.date_of_birth }}</p>
								<p>{{ rooms.request.user_id.hometown }}</p>
								<p>{{ rooms.request.user_id.telephone }}</p>
								<p>{{ rooms.request.user_id.gender }}</p>
							</div>
						</div>
					</div>
					<a data-toggle="modal" class="btn btn-warning" @click="Open"
						><i class="fa fa-calculator"></i> {{ $t('ROOM_DETAIL.BILL') }}</a
					>
					<button
						class="btn btn-secondary"
						style="margin-left: 20px"
						@click="handleCancelRoom()"
						><i class="fa fa-sign-out"></i> {{ $t('ROOM_DETAIL.CHECKOUT') }}</button
					>
				</div>
				<div>
					<b-modal id="modal-prevent-closing" v-model="showModal" title=" Calculate bill">
						<form>
							<div class="form-group row">
								<label class="col-sm-2 form-control-label">Internet</label>
								<div class="col-sm-10">
									<input
										v-model="internet"
										type="text"
										class="form-control"
										placeholder="Giá Internet"
									/>
								</div>
							</div>
							<div class="form-group row">
								<label class="col-sm-2 form-control-label">{{
									$t('ROOM_DETAIL.FORM.FEES')
								}}</label>
								<div class="col-sm-10">
									<input
										v-model="other"
										type="text"
										class="form-control"
										placeholder="Phí Phát Sinh"
									/>
								</div>
							</div>
							<div class="form-group row">
								<label class="col-sm-2 form-control-label">{{
									$t('ROOM_DETAIL.FORM.PRICE')
								}}</label>
								<div class="col-sm-10">
									<input
										type="text"
										class="form-control"
										v-model="rooms.room.price"
										disabled
									/>
								</div>
							</div>
							<div class="form-group row">
								<label class="col-sm-2 form-control-label">{{
									$t('ROOM_DETAIL.FORM.ELECTRIC')
								}}</label>
								<div class="col-sm-5">
									<input
										type="number"
										class="form-control"
										v-model="electric"
										placeholder="Nhập Số Điện"
									/>
								</div>
								<div class="col-sm-5">
									<input
										disabled
										class="form-control"
										v-model="rooms.room.hostel_id.price_electric"
									/>
								</div>
							</div>
							<div class="form-group row">
								<div class="offset-sm-3">
									{{ $t('ROOM_DETAIL.FORM.ELECTRIC_PRICE') }}:
									{{ priceElectric }}</div
								>
							</div>
							<div class="form-group row">
								<label class="col-sm-2 form-control-label">{{
									$t('ROOM_DETAIL.FORM.WATER')
								}}</label>
								<div class="col-sm-5">
									<input
										type="number"
										class="form-control"
										v-model="water"
										placeholder="Nhập Số Nước"
									/>
								</div>
								<div class="col-sm-5">
									<input
										disabled
										class="form-control"
										v-model="rooms.room.hostel_id.price_water"
									/>
								</div>
							</div>
							<div class="form-group row">
								<div class="offset-sm-3"
									>{{ $t('ROOM_DETAIL.FORM.WATER_PRICE') }}:{{ priceWater }}</div
								>
							</div>
							<!-- <div class="form-group row">
								<label class="col-sm-2 form-control-label">Nợ</label>
							</div> -->
							<div class="form-group row">
								<label class="col form-control-label"
									>{{ $t('ROOM_DETAIL.FORM.TOTAL') }}: {{ totalPrice }}</label
								>
							</div>
						</form>
						<template #modal-footer>
							<div>
								<b-button class="btn btn-primary" @click="handleSendInvoice()">
									{{ $t('ROOM.FORM.SEND') }}
								</b-button>

								<b-button class="btn btn-danger" @click="showModal = false">
									{{ $t('ROOM.FORM.CLOSE') }}
								</b-button>
							</div>
						</template>
					</b-modal>
				</div>
				<div class="row">
					<h4>Roommate</h4>
					<div class="table-responsive">
						<table class="table table-hover">
							<thead>
								<tr>
									<th scope="col">Tên</th>
									<th scope="col">CMND</th>
									<th scope="col">DOB</th>
									<th scope="col">Quê Quán</th>
									<th scope="col">SDT</th>
									<th scope="col">Giới Tính</th>
									<th scope="col" @click="isShowModalAdd = !isShowModalAdd"
										><a class="btn btn-primary">
											<i class="fa fa-plus"></i> Thêm</a
										></th
									>
								</tr>
							</thead>
							<tbody>
								<tr>
									<th scope="row"></th>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td class="actions">
										<div
											type="button"
											class="btn btn-outline-danger"
											style="border: 1px solid red"
											@click="Delete(item)"
										>
											<i class="fa fa-trash"></i> Xoá
										</div>
									</td>
								</tr>
							</tbody>
						</table>
						<b-modal
							v-model="isShowModalAdd"
							id="modal-upload"
							title="Add roommate"
							size="lg"
						>
							<div class="form-group row">
								<label class="col-sm-2 form-control-label">Họ Tên</label>
								<div class="col-sm-10">
									<input
										type="text"
										class="form-control"
										placeholder="Nhập Họ Tên Người Thuê"
									/>
								</div>
							</div>
							<div class="form-group row">
								<label class="col-sm-2 form-control-label">CMND</label>
								<div class="col-sm-10">
									<input
										type="text"
										class="form-control"
										placeholder="Nhập CMND"
									/>
								</div>
							</div>
							<div class="form-group row">
								<label class="col-sm-2 form-control-label">Ngày Sinh</label>
								<div class="col-sm-10">
									<input
										type="date"
										class="form-control"
										placeholder="Nhập Ngày Sinh"
									/>
								</div>
							</div>
							<div class="form-group row">
								<label class="col-sm-2 form-control-label">Quê Quán</label>
								<div class="col-sm-10">
									<input
										type="text"
										class="form-control"
										placeholder="Nhập Quê QUán"
									/>
								</div>
							</div>
							<div class="form-group row">
								<label class="col-sm-2 form-control-label">SDT</label>
								<div class="col-sm-10">
									<input
										type="text"
										class="form-control"
										placeholder="Nhập SDT"
									/>
								</div>
							</div>
							<div class="form-group row">
								<label class="col-sm-2">Giới Tính</label>
								<div class="col-sm-10">
									<div class="radio">
										<label>
											<input type="radio" value="1" checked />
											Nam
										</label>
									</div>
									<div class="radio">
										<label>
											<input type="radio" value="0" />
											Nữ
										</label>
									</div>
								</div>
							</div>

							<template #modal-footer>
								<div>
									<b-button
										class="btn btn-danger"
										@click="showModalCreate(false)"
									>
										{{ $t('USER.FORM.CLOSE') }}
									</b-button>
									<b-button
										type="submit"
										class="btn btn-primary"
										@click="handlePostIdea()"
									>
										Post
									</b-button>
								</div>
							</template>
						</b-modal>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { getOneRoom } from '@/api/modules/room';
	import { postInvoice } from '@/api/modules/invoice';
	import { getDetail, cancelRoom } from '@/api/modules/roomRegister';
	import { MakeToast } from '@/toast/toastMessage';
	export default {
		name: 'RoomDetail',

		data() {
			return {
				isShowModalAdd: false,
				id: this.$route.params.roomid,
				detailRoom: [],
				rooms: {},
				isLoading: true,
				showModal: false,
				water: 0,
				electric: 0,
				internet: '',
				other: ''
			};
		},
		computed: {
			total() {
				return Math.round(this.rooms.room.price);
			},
			priceWater() {
				return Math.round(this.rooms.room.hostel_id.price_water * this.water);
			},
			priceElectric() {
				return Math.round(this.rooms.room.hostel_id.price_electric * this.electric);
			},
			totalPrice() {
				return Math.round(this.priceWater + this.priceElectric + this.total);
			}
		},
		// beforeMount() {
		// 	this.handleGetRoom();
		// },
		created() {
			this.handleGetRoom();
		},
		methods: {
			async handleGetRoom() {
				// try {
				// 	const res = await getOneRoom({ id: this.id });
				// 	this.rooms = res?.data;
				// } catch (error) {
				// 	console.log(error);
				// }
				const id = { id: this.id };
				console.log(id, 'dsadsd');
				await getOneRoom(id)
					.then(res => {
						console.log(res, 'asdasffas');
						this.rooms = res.data;
						console.log(typeof this.rooms, 'asass');
					})
					.catch(err => {
						console.log(err);
					});
			},
			handleCancelRoom() {
				console.log(this.id);

				this.$bvModal
					.msgBoxConfirm('Do you want to check out this room?', {
						title: 'Warning',
						size: 'sm',
						buttonSize: 'sm',
						okVariant: 'danger',
						okTitle: 'OK',
						cancelTitle: 'Cancel',
						footerClass: 'p-2',
						hideHeaderClose: false,
						centered: true
					})
					.then(value => {
						if (value === true) {
							cancelRoom({ room_id: this.id })
								.then(res => {
									MakeToast({
										variant: 'success',
										title: this.$t('TOAST.SUCCESS'),
										content: 'Successfully to cancel this room'
									});
									console.log(res);
									this.handleGetRoom();
								})
								.catch(err => {
									console.log(err);
									MakeToast({
										variant: 'warning',
										title: this.$t('TOAST.WARNING'),
										content: 'You can not cancel this room'
									});
								});
						}
					});
			},
			Open() {
				this.$bvModal.show('modal-prevent-closing');
			},
			isResetDataModal() {
				this.name = '';
				this.nameState = null;
			},
			showModalCreate(e) {
				this.isShowModalAdd = e;
				this.isResetDataModal();
			}
		}
	};
</script>

<style scoped>
	.content {
		position: relative;
		top: 50px;
	}
	.content .title {
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
	.content .row {
		margin-top: 80px;
	}
	.content .infomation_user {
		background: #334756;
		color: white;
	}
	.content .infomation_user h3 {
		margin-top: 20px;
		color: white;
		text-align: center;
	}
	.table-responsive .modal_add,
	.modals {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		/* background: gray; */
		/* width: 1000px; */
	}
	.modal-content {
		background: #f3e9dd;
		box-shadow: 2px 2px 2px 2px;
	}
	.modal_add form > div {
		margin-top: 10px !important;
		margin: 0;
		padding: 0;
	}
	.fade-enter-active,
	.fade-leave-active {
		transition: transform 0.5s;
	}
	.fade-enter,
	.fade-leave-to {
		transform: translateY(-50%) translateX(100vw);
	}
	.modals form > div {
		margin-top: 10px !important;
		margin: 0;
		padding: 0;
	}
</style>
