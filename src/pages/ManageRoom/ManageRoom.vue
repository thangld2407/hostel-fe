<template>
  <div id="manageRoom">
    <!-- <CreateRoom :itemEdit="roomEdit" @save="clickAdd" /> -->
    <div class="right-content">
      <div class="title">
        <p>{{$t('MANAGER.TITLE')}}</p>
        <button @click="handleModal()" v-b-modal.modal-1>CreateRoom</button>
      </div>
      <div class="rooms-content">
        <div class="zone-header-page">
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              placeholder="Nhập số phòng"
              id="product-search"
            />
          </div>
          <div class="form-group">
            <div class="col">
              <select class="form-control" id="search-option-1">
                <option value="0">{{$t('MANAGER.SELECT_ROOM.TOTAL')}}</option>
                <option value="1">{{$t('MANAGER.SELECT_ROOM.RENTED')}}</option>
                <option value="2">{{$t('MANAGER.SELECT_ROOM.EMPTY')}}</option>
              </select>
            </div>
          </div>
          <button><i class="fa fa-search"></i>{{$t('MANAGER.SEARCH.TITLE')}}</button>
        </div>
        <div class="container">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th scope="col" class="col-1">{{$t('MANAGER.TABLE.ID')}}</th>
                <th scope="col" class="col-1">{{$t('MANAGER.TABLE.IMAGE')}}</th>
                <th scope="col" class="col-2">{{$t('MANAGER.TABLE.PRICE')}}</th>
                <th scope="col" class="col-1">{{$t('MANAGER.TABLE.STATUS')}}</th>
                <th scope="col" class="col-4">{{$t('MANAGER.TABLE.DESCRIPTION')}}</th>
                <th scope="col" class="col-1"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in list" :key="index">
                <th scope="row">{{ item._id }}</th>
                <td>{{ item.image }}</td>
                <td>{{ item.price }}</td>
                <td>
                  {{ item.status }}
                  <div class="btn btn-success">Active</div>
                  <div class="btn btn-danger">Trống</div>
                </td>
                <td>{{ item.furniture_type }}</td>
                <td class="actions">
                  <div class="btn btn-info">
                    <router-link to="/detail-room"><i class="fas fa-info-circle"></i></router-link>
                  </div>
                  <div class="btn btn-warning" @click="handleModal(item._id)">
                    <i class="fa fa-edit"></i>
                  </div>
                  <div @click="handleDeleteRoom(item._id)" class="btn btn-danger">
                    <i class="fa fa-trash"></i>
                  </div>
                </td>
              </tr>
          
            </tbody>
          </table>
          <b-modal
            id="modal-1"
            v-model="showModal"
            :title="action === 'CREATE' ? 'Tạo phòng' : 'EDIT Room'"
            centered
          >
            <div class="row mt-2">
              <div class="col-md-12 col-sm-12 col-lg-12">
                <label for="">Giá phòng</label>
                <b-form-input v-model="new_room.price"></b-form-input>
              </div>
              <div class="col-md-12 col-sm-12 col-lg-12 mt-2">
                <label for="">Giá điện</label>
                <b-form-input disabled></b-form-input>
              </div>
              <div class="col-md-12 col-sm-12 col-lg-12 mt-2">
                <label for="">Giá nước</label>
                <b-form-input disabled></b-form-input>
              </div>
              <div class="col-md-12 col-sm-12 col-lg-12 mt-2">
                <label for="">{{ $t('USER.FORM.AVATAR') }}</label>
                <b-form-file
                  id="upload-images"
                  type="file"
                  accept="image/*"
                  v-model="newUser.avatar"
                ></b-form-file>
              </div>
              <div class="col-md-12 col-sm-12 col-lg-12">
                <label for="">Mô tả</label>
                <b-form-textarea
                  id="textarea-rows"
                  rows="4"
                  v-model="new_room.furniture_type"
                ></b-form-textarea>
              </div>
              <div class="col-md-12 col-sm-12 col-lg-12">
                <label for="">Trạng Thái</label>
                <input
                  v-model="new_room.status"
                  type="radio"
                  style="margin: 0px 5px 0px 15px"
                  checked
                />Trống
              </div>
            </div>
            <template #modal-footer>
              <div>
                <b-button
                  class="btn btn-primary"
                  v-if="action === 'CREATE'"
                  @click="handleCreateRoom()"
                >
                  Tạo
                </b-button>

                <b-button
                  class="btn btn-primary"
                  v-if="action === 'EDIT'"
                  @click="handleEditRoom()"
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
    </div>
  </div>
</template>

<script>

// import CreateRoom from "./CreateRoom.vue";
import { MakeToast } from '@/toast/toastMessage';
import { isEmptyOrWhiteSpace } from '../../utils/validate';
import { getRoomTable, postRoom, deleteRoom, getOneRoom, editRoom } from '@/api/modules/room';
export default {
  name: "ManageRoom",
  components: {
    // CreateRoom,
    
  },
  methods: {
			async handleModal(_id) {
				this.ids = _id;
				if (this.ids) {
					this.action = 'EDIT';
					await getOneRoom(_id)
						.then(res => {
							this.new_room.price = res.data.price;
							this.new_room.furniture_type = res.data.furniture_type;
							this.new_room.status = res.data.status;
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
			async handleGetListRoom() {
				this.isLoading = true;
				await getRoomTable()
					.then(res => {
						if (res.status === 200) {
							this.list = res.data.data
              console.log(this.list);
							this.isLoading = false;
						}
					})
					.catch(err => {
						console.log(err);
					});
			},
			async handleCreateRoom() {
				const data = {
					price: this.new_room.price,
					furniture_type: this.new_room.furniture_type,
					status: this.new_room.status,
				};
				console.log(data);
				if (
					isEmptyOrWhiteSpace(data.price) ||
					isEmptyOrWhiteSpace(data.furniture_type) 
				) {
					MakeToast({
						variant: 'warning',
						title: 'Warning',
						content: '123'
					});
				} else {
					await postRoom(data)
						.then(res => {
							if (res.status === 200) {
								MakeToast({
									variant: 'success',
									title: this.$t('TOAST.SUCCESS'),
									content: this.$t('MANAGER.FORM.SUCCESS')
								});
								this.handleGetListRoom();
								this.showModal = false;
								this.isResetDataModal();
							}
						})
						.catch(err => {
							console.log(err);
						});
				}
			},
			async handleEditRoom() {
				this.action = 'EDIT';
				const data = {
					price: this.new_room.price,
					furniture_type: this.new_room.furniture_type,
					status: this.new_room.status,
				};
				if (
					isEmptyOrWhiteSpace(data.price) ||
					isEmptyOrWhiteSpace(data.furniture_type) 
				) {
					MakeToast({
						variant: 'warning',
						title: 'Warning',
						content: this.$t('MANAGER.FORM.MESSAGE.SPACE')
					});
				} else {
					console.log(data);
					await editRoom(this.ids, data)
						.then(res => {
							if (res.status == 200) {
								MakeToast({
									variant: 'success',
									title: this.$t('TOAST.SUCCESS'),
									content: '123'
								});
								this.handleGetListRoom();
								this.showModal = false;
								this.isResetDataModal();
							}
						})
						.catch(err => {
							console.log(err);
						});
				}
			},
			handleDeleteRoom(_id) {
				this.$bvModal
					.msgBoxConfirm('Do you want to delete this room?', {
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
							deleteRoom(_id)
								.then(res => {
									if (res.status === 200) {
										MakeToast({
											variant: 'success',
											title: this.$t('TOAST.SUCCESS'),
											content: 'Successfully to delete this room'
										});
										this.handleGetListRoom();
									} else {
										MakeToast({
											variant: 'warning',
											title: this.$t('TOAST.WARNING'),
											content: 'You can not delete this room'
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
				this.new_room = {
					price: '',
					furniture_type: '',
					status: '',
          image:''
				};
			},
    // clickAdd(itemSave) {
      
    //   // this.list.push(itemSave)
    //   let index = this.list.findIndex((e) => e.id === itemSave.id);
    //   if (index >= 0) {
    //     this.list.splice(index, 1, itemSave);
    //   } else {
    //     var max = 0;
    //     var newId = 0;
    //     for (let i = 0; i < this.list.length; i++) {
    //       if (this.list[i].id > max) {
    //         max = this.list[i].id;
    //       }
    //     }
    //     newId = max + 1;
    //     itemSave.id = newId;
    //     this.list.push(itemSave);
    //     MakeToast({
		// 					variant: 'success',
		// 					title: this.$t('TOAST.SUCCESS'),
		// 					content: this.$t('MANAGER.SUCCESS')
		// 				})
    //   }
    //   return;
    // },
    // clickDelete(itemDelete) {
    //   const choice = confirm("Are you sure ???");
    //   if (choice == true) {
    //     for (let i = 0; i < this.list.length; i++) {
    //       if (itemDelete.id === this.list[i].id) {
    //         this.list.splice(i, 1);
    //       }
    //     }
    //   }
    // },
    // clickEdit(itemEdit) {
    //   this.roomEdit = itemEdit;
    //   this.$bvModal.show("modal-prevent-closing");
    // },
  },
  // computed:{
  //   list(){
  //     return this.$store.state.app.list
      
  //   }
    
  // },
  data() {
    return {
     
      new_room:{
        _id: "",
        price: "",
        status: "",
        furniture_type: "",
        image
      },
      nameState: null,
      submittedNames: [],
      showModal: false,
      list:[],
      action: '',
      ids: 0
      }
    
  },
  // created() {
  //   this.list = this.$store.getters.roomItem;
  //   console.log(this.roomItem);
  // },
};
</script>

<style scoped>
.right-content {
  position: relative;
  top: 100px;
}
.right-content .title {
  position: fixed;
  width: 100%;
  top: 50px;
  background: #557B83;
  height: 40px;
  color: white;
  font-weight: 500;
  padding-left: 20px;
  display: flex;
  align-items: center;
}
.right-content .title p{
  margin-top: 15px;
}
.rooms-content .zone-header-page {
  display: flex;
  margin: 25px;
  height: 40px;
  z-index: 0;
}
.rooms-content button {
  background: #1572a1;
  color: white !important;
  border: none;
  border-radius: 5px;
  width: 100px;
  height: 38px;
}
.rooms-content table{
  text-align: center;
}
.rooms-content table .actions {
  display: flex;
  padding: 0;
  margin-top: 12px;
  border: none;
  justify-content: center;
}
.rooms-content table .actions a{
  text-decoration: none;
  color: white;
}
.rooms-content .actions > div {
  height: 35px;
  width: 40px;
  margin-left: 5px;
}
</style>
