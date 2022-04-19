<template>
	<div id="detail">
		<div class="content mt-3">
			<div class="title">Chi tiết phòng</div>
			<div class="container">
				<div class="row">
					<div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
						<h3>Thông tin Phòng Trọ : {{ room.room_name }}</h3>
						<table class="table table-hover">
							<tbody>
								<tr>
									<td>Số Phòng</td>
									<td>{{ room.room_name }}</td>
								</tr>
								<tr>
									<td>Trạng Thái</td>
									<td>
										<div class="btn btn-success" v-if="room.status">Active</div>
										<div class="btn btn-danger" v-else>Trống</div>
									</td>
								</tr>
								<tr>
									<td>Ngày Thuê</td>
									<td>{{}}</td>
								</tr>
								<tr>
									<td>Dịch Vụ</td>
									<td>
										<p
											><input type="checkbox" value="220000" disabled="" />
											Internet Cáp Quang (220 000VND)</p
										>
										<p><input type="text" disabled /></p>
									</td>
								</tr>
								<tr>
									<td>Giá Phòng</td>
									<td>{{ room.price }}</td>
								</tr>
								<tr>
									<td>Nợ</td>
									<td></td>
								</tr>
								<tr>
									<td
										><p>Tổng Tiền Ước Tính:</p
										><p>(chưa bao gồm điện,nước)</p></td
									>
									<td>{{}}</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div class="infomation_user col-xs-4 col-sm-4 col-md-4 col-lg-4">
						<h3>Chủ Phòng</h3>
						<div class="row text-center">
							<div class="col-xs-5 col-sm-5 col-md-5 col-lg-5">
								<p>Họ Tên</p>
								<p>CMND</p>
								<p>Ngày Sinh</p>
								<p>Quê Quán</p>
								<p>Điện thoại</p>
								<p>Giới Tính</p>
							</div>
							<div class="col-xs-7 col-sm-7 col-md-7 col-lg-7">
								<p>{{}}</p>
								<p>{{}}</p>
								<p>{{}}</p>
								<p>{{}}</p>
								<p>{{}}</p>
								<p>{{}}</p>
							</div>
						</div>
					</div>
					<a data-toggle="modal" class="btn btn-warning" @click="Open"
						><i class="fa fa-calculator"></i> Tính Hoá Đơn</a
					>
					<button class="btn btn-secondary" style="margin-left: 20px"
						><i class="fa fa-sign-out"></i> Trả Phòng</button
					>
				</div>
				<div>
					<b-modal id="modal-prevent-closing" ref="modal" title="Tính Hoá Đơn">
						<form>
							<div class="form-group row">
								<label class="col-sm-2 form-control-label">Internet</label>
								<div class="col-sm-10">
									<input
										type="text"
										class="form-control"
										placeholder="Giá Internet"
									/>
								</div>
							</div>
							<div class="form-group row">
								<label class="col-sm-2 form-control-label">Phí khác</label>
								<div class="col-sm-10">
									<input
										type="text"
										class="form-control"
										placeholder="Phí Phát Sinh"
									/>
								</div>
							</div>
							<div class="form-group row">
								<label class="col-sm-2 form-control-label">Giá Phòng</label>
								<div class="col-sm-10">
									<input
										type="text"
										class="form-control"
										placeholder="Nhập Giá Phòng"
										disabled=""
									/>
								</div>
							</div>
							<div class="form-group row">
								<label class="col-sm-2 form-control-label">Điện</label>
								<div class="col-sm-5">
									<input
										type="text"
										class="form-control"
										placeholder="Nhập Số Điện"
									/>
								</div>
								<div class="col-sm-5">
									<input
										type="text"
										class="form-control"
										placeholder="Nhập Giá Điện"
									/>
								</div>
							</div>
							<div class="form-group row">
								<div class="offset-sm-3"> Tổng tiền Điện:</div>
							</div>
							<div class="form-group row">
								<label class="col-sm-2 form-control-label">Nước</label>
								<div class="col-sm-5">
									<input
										type="text"
										class="form-control"
										placeholder="Nhập Số Nước"
									/>
								</div>
								<div class="col-sm-5">
									<input
										type="text"
										class="form-control"
										placeholder="Nhập Giá Nước"
									/>
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
					</b-modal>
				</div>
				<!-- <div class="row">
            <h4>Người Ở Cùng</h4>
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
                            <th scope="col" @click="modal = !modal"><a class="btn btn-primary"> <i class="fa fa-plus"></i> Thêm</a></th>
                         </tr>
                    </thead>
                    <tbody id="nguoithuecung">
                        <tr v-for="item in roommates" :key="item.id">
                            <th scope="row">{{item.name}}</th>
                        <td>{{item.identity_card}}</td>
                        <td>{{item.dob}}</td>
                        <td>{{item.address}}</td>
                        <td>{{item.phone}}</td>
                        <td>{{item.gender}}</td>
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
                <transition name="fade" appear>
                    <div v-if="modal" class="modal_add">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h4>Thêm Bạn Cùng Phòng</h4>
                            </div>
                            <div class="modal-body">

                                <form >
                                    <div class="form-group row">
                                        <label class="col-sm-2 form-control-label">Họ Tên</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control" placeholder="Nhập Họ Tên Người Thuê" v-model="new_roommates.name">
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-sm-2 form-control-label">CMND</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control" placeholder="Nhập CMND" v-model="new_roommates.identity_card">
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-sm-2 form-control-label">Ngày Sinh</label>
                                        <div class="col-sm-10">
                                            <input type="date" class="form-control" placeholder="Nhập Ngày Sinh" v-model="new_roommates.dob">
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-sm-2 form-control-label">Quê Quán</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control" placeholder="Nhập Quê QUán" v-model="new_roommates.address">
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-sm-2 form-control-label">SDT</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control" placeholder="Nhập SDT" v-model="new_roommates.phone">
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-sm-2">Giới Tính</label>
                                        <div class="col-sm-10">
                                            <div class="radio">
                                                <label>
                                                    <input type="radio" value="1" checked v-model="new_roommates.gender">
                                                        Nam
                                                </label>
                                            </div>
                                            <div class="radio">
                                                <label>
                                                    <input type="radio" value="0" v-model="new_roommates.gender">
                                                        Nữ
                                                 </label>
                                            </div>
                                        </div>
                                    </div>
                                </form> 

                                <div class="thongbaoThemThue"><p></p></div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-default" @click="modal = false">Đóng</button>
                                <button type="button" class="btn btn-primary" @click="Add">Thêm</button>
                            </div>
                        </div>
                    </div>
                </div>
                </transition>
            </div> -->

				<!-- </div>  -->
			</div>
		</div>
	</div>
</template>

<script>
	import { getRoomTable, getOneRoom } from '@/api/modules/room';
	export default {
		name: 'roomDetail',

		data() {
			return {
				id: this.$route.params.roomid,
				room_name: '',
				detailRoom: [],
				room: [],
				new_roommates: {
					name: '',
					identity_card: '',
					dob: '',
					phone: '',
					address: '',
					gender: ''
				}
			};
		},
		computed: {},
		created() {
			this.handleGetRoom();
		},
		methods: {
			async handleGetRoom() {
				const id = { id: this.id };
				console.log(id, 'dsadsd');
				getOneRoom(id)
					.then(res => {
						this.room = res.data;
						console.log(this.room, 'asass');
					})
					.catch(err => {
						console.log(err);
					});
			},
			Open() {
				this.$bvModal.show('modal-prevent-closing');
			},
			checkFormValidity() {
				const valid = this.$refs.form.checkValidity();
				this.nameState = valid;
				return valid;
			},
			resetModal() {
				this.name = '';
				this.nameState = null;
			},
			handleOk(bvModalEvt) {
				// Prevent modal from closing
				bvModalEvt.preventDefault();
				// Trigger submit handler
				this.handleSubmit();
			},
			handleSubmit() {
				// Exit when the form isn't valid
				if (!this.checkFormValidity()) {
					return;
				}
				// Push the name to submitted names
				this.submittedNames.push(this.name);
				// Hide the modal manually
				this.$nextTick(() => {
					this.$bvModal.hide('modal-prevent-closing');
				});
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
