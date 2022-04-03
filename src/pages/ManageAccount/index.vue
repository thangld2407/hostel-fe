<template>
  <div class="account">
      <div class="title">Quản lý tài khoản</div>
      <div class="account-content">
        <div class="panel-heading">
          <p><i class="fas fa-user"></i>Nhân viên</p>
          <button @click="handleModal()" v-b-modal.modal-1>Create User</button>
        </div>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col" class="col-1">STT</th>
              <th scope="col" class="col-2">Tên nhân viên</th>
              <th scope="col" class="col-2">Email</th>
              <th scope="col" class="col-1">Chức năng</th>
              <th scope="col" class="col-1">Khu vực</th>
              <th scope="col" class="col-2">Địa điểm làm việc</th>
              <th scope="col" class="col-1"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in listUser" :key="item.id">
              <th scope="row">{{item._id}}</th>
              <td>{{item.fullname}}</td>
              <td>{{item.email}}</td>
              <td>{{item.role_id}}</td>
              <td>{{item.area}}</td>
              <td>{{item.address}}</td>
              <td>
                <div
                  type="button"
                  class="btn btn-warning"
                  @click="handleModal(item._id)">
                  <i class="fas fa-edit"></i> 
                </div>
                <div
                  type="button"
                  class="btn btn-danger"
                  @click="handleDeleteUser(item._id)">
                  <i class="fa fa-trash"></i> 
                </div>
						  </td>
            </tr>
          </tbody>
        </table>
        <b-modal
				id="modal-1"
				v-model="showModal"
				:title="action === 'CREATE' ? 'Create Account' : 'EDIT Account'"
				centered
			>
				<div class="row mt-2">
          <div class="col-md-12 col-sm-12 col-lg-12 mt-2">
						<label for="">Tên người dùng</label>
						<b-form-input type="text" v-model="new_account.fullname"></b-form-input>
					</div>
					<div class="col-md-12 col-sm-12 col-lg-12">
						<label for="">Email</label>
						<b-form-input
							:readonly="action === 'EDIT' ? true : false"
							v-model="new_account.email"
						></b-form-input>
					</div>
					<div class="col-md-12 col-sm-12 col-lg-12 mt-2">
						<label for="">Password</label>
						<b-form-input type="password" v-model="new_account.password"></b-form-input>
					</div>
					<div class="col-md-12 col-sm-12 col-lg-12">
						<label for="">Role</label>
						<b-form-select v-model="new_account.role_id">
							<b-form-select-option :value="null">Chọn role</b-form-select-option>
							<b-form-select-option
								v-for="(role, index) in options"
								:key="index"
								:value="role._id"
							>
								{{ role.role_name }}
							</b-form-select-option>
						</b-form-select>
					</div>
          <div class="col-md-12 col-sm-12 col-lg-12">
						<label for="">Khu vực</label>
						<b-form-select v-model="new_account.area">
							<b-form-select-option :value="null">Chọn khu vực</b-form-select-option>
							<b-form-select-option
								v-for="(area, index) in options"
								:key="index"
								:value="area.id"
							>
								{{ area.area_name }}
							</b-form-select-option>
						</b-form-select>
					</div>
          <div class="col-md-12 col-sm-12 col-lg-12">
						<label for="">Địa điểm làm việc</label>
						<b-form-select v-model="new_account.address">
							<b-form-select-option :value="null">Chọn địa điểm</b-form-select-option>
							<b-form-select-option
								v-for="(area, index) in options"
								:key="index"
								:value="area.id"
							>
								{{ area.area_name }}
							</b-form-select-option>
						</b-form-select>
					</div>
				</div>
				<template #modal-footer>
					<div>
						<b-button
							class="btn btn-primary"
							v-if="action === 'CREATE'"
							@click="handleCreateUser()"
						>
							Tạo
						</b-button>

						<b-button
							class="btn btn-primary"
							v-if="action === 'EDIT'"
							@click="handleEditUser()"
						>
							Lưu
						</b-button>

						<b-button class="btn btn-danger" @click="showModal = false">
							Đóng
						</b-button>
					</div>
				</template>
			</b-modal>
      </div>
  </div>
</template>

<script>
import { isEmptyOrWhiteSpace } from '../../utils/validate';
import { getUserTable, postUser, deleteUser, getOneUser, editUser } from '@/api/modules/user';
import { MakeToast } from '@/toast/toastMessage';
import {getListRole} from '@/api/modules/role'
export default {
    name: "ManageAccount",
    created(){
      this.handleGetListUser()
    },
    methods: {
    async handleModal(_id) {
				console.log(_id, 'EDIT');
				this.ids = _id;
				if (this.ids) {
					(this.action = 'EDIT'),
						await getOneUser(id)
							.then(res => {
								this.new_account.fullname = res.data.fullname;
								this.new_account.email = res.data.email;
								res.data.roles.map(item => {
									this.new_account.role_id = item.id;
								});
							})
							.catch(err => {
								console.log(err);
							});
				} else {
					this.isResetDataModal();
					this.action = 'CREATE';
					console.log('CREATE');
				}
				this.showModal = true;
			},
			async getRole() {
				await getListRole()
					.then(res => {
						this.options = res;
					})
					.catch(err => {
						console.log(err);
					});
			},
			async handleGetListUser() {
				this.isLoading = true;
				await getUserTable(getall)
					.then(res => {
						if (res.status === 200) {
							this.listUser = res.data.data;
							console.log(this.listUser);
							this.isLoading = false;
						}
					})
					.catch(err => {
						console.log(err);
					});
			},
			async handleCreateUser() {
				const data = {
					fullname: this.new_account.fullname,
					email: this.new_account.email,
					password: this.new_account.password,
          			role_id: this.new_account.role_id,
          			address: this.new_account.address
				};
				console.log(data);
				if (
					isEmptyOrWhiteSpace(data.fullname) ||
					isEmptyOrWhiteSpace(data.email) ||
          			isEmptyOrWhiteSpace(data.password) 
          			// this.new_account.role === null
				) {
					MakeToast({
						variant: 'warning',
						title: 'Warning',
						content: '123'
					});
				} else {
					await postUser(data)
						.then(res => {
							if (res.status === 200) {
								MakeToast({
									variant: 'success',
									title: this.$t('TOAST.SUCCESS'),
									content: this.$t('MANAGER.FORM.SUCCESS')
								});
								this.handleGetListUser();
								this.showModal = false;
								this.isResetDataModal();
							}
						})
						.catch(err => {
							console.log(err);
						});
				}
			},
			async handleEditUser() {
				this.action = 'EDIT';
				const data = {
					fullname: this.new_account.fullname,
					email: this.new_account.email,
					password: this.new_account.password,
          			role: this.new_account.role
				};
				if (
					isEmptyOrWhiteSpace(data.fullname) ||
					isEmptyOrWhiteSpace(data.email) ||
          			isEmptyOrWhiteSpace(data.password) 
          // this.new_account.role === null
				) {
					MakeToast({
						variant: 'warning',
						title: 'Warning',
						content: this.$t('MANAGER.FORM.MESSAGE.SPACE')
					});
				} else {
					console.log(data);
					await editUser(this.ids, data)
						.then(res => {
							if (res.status == 200) {
								MakeToast({
									variant: 'success',
									title: this.$t('TOAST.SUCCESS'),
									content: '123'
								});
								this.handleGetListUser();
								this.showModal = false;
								this.isResetDataModal();
							}
						})
						.catch(err => {
							console.log(err);
						});
				}
			},
			handleDeleteUser(_id) {
				this.$bvModal
					.msgBoxConfirm('Do you want to delete this user?', {
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
							deleteUser(id)
								.then(res => {
									if (res.status === 200) {
										MakeToast({
											variant: 'success',
											title: this.$t('TOAST.SUCCESS'),
											content: 'Successfully to delete this user'
										});
										this.handleGetListUser();
									} else {
										MakeToast({
											variant: 'warning',
											title: this.$t('TOAST.WARNING'),
											content: 'You can not delete this user'
										});
									}
									console.log(res);
								})
								.catch(err => {
									console.log(err);
								});
						}
					});
			},
			isResetDataModal() {
				console.log('RESET DATA');
				this.newUser = {
					fullname: "",
          			email: "",
          			password: "",
          			role_id:null,
          			area:'',
          			address:''
				};
			},
  },

  data() {
    return {
      listUser:[],
      new_account: {
        fullname: "",
        email: "",
        password: "",
        role_id:null,
        area:'',
        address:''
      },
      isLoading: false,
      options: [],
      action: '',
			showModal: false,
			ids: 0,
      }
    
  },
}
</script>

<style scoped>
.account .title {
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
.account .account-content{
  position: relative;
  top: 80px;
  margin: 30px;
}
.account-content table{
  text-align: center;
}
.account-content table div{
  margin: 10px;
}
.account-content table div:nth-child(1){
  margin-right: 5px;
  width: 40px;
}
.account-content .panel-heading{
  height: 40px;
  display: flex;
  background: #337ab7;
  color: white;
  align-items: center;
  justify-content: flex-start;
}
.account-content .panel-heading p , .account-content .panel-heading i {
  margin: 0px 10px 0px 10px;
}
</style>