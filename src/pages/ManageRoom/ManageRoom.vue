<template>
  <div id="manageRoom">
    <!-- <CreateRoom :itemEdit="roomEdit" @save="clickAdd" /> -->
    <div class="right-content">
      <div class="title">
        <p>{{$t('MANAGER.TITLE')}}</p>
        <CreateRoom :itemEdit="roomEdit" @save="clickAdd"/>
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
                <th scope="col" class="col-2">{{$t('MANAGER.TABLE.PRICE')}}</th>
                <th scope="col" class="col-1">{{$t('MANAGER.TABLE.STATUS')}}</th>
                <th scope="col" class="col-4">{{$t('MANAGER.TABLE.DESCRIPTION')}}</th>
                <th scope="col" class="col-1"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in list" :key="item.id">
                <th scope="row">{{ item.id }}</th>
                <td>{{ item.price }}</td>
                <td>
                  {{ item.status }}
                  <div class="btn btn-success">Active</div>
                  <div class="btn btn-danger">Trống</div>
                </td>
                <td>{{ item.description }}</td>
                <td class="actions">
                  <div class="btn btn-info">
                    <router-link to="/detail-room"><i class="fas fa-info-circle"></i></router-link>
                  </div>
                  <div class="btn btn-warning" @click="clickEdit(item)">
                    <i class="fa fa-edit"></i>
                  </div>
                  <div @click="clickDelete(item)" class="btn btn-danger">
                    <i class="fa fa-trash"></i>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
      
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import CreateRoom from "./CreateRoom.vue";
import { MakeToast } from '@/toast/toastMessage';
export default {
  name: "ManageRoom",
  components: {
    CreateRoom,
  },
  methods: {
    clickAdd(itemSave) {
      
      // this.list.push(itemSave)
      let index = this.list.findIndex((e) => e.id === itemSave.id);
      if (index >= 0) {
        this.list.splice(index, 1, itemSave);
      } else {
        var max = 0;
        var newId = 0;
        for (let i = 0; i < this.list.length; i++) {
          if (this.list[i].id > max) {
            max = this.list[i].id;
          }
        }
        newId = max + 1;
        itemSave.id = newId;
        this.list.push(itemSave);
        MakeToast({
							variant: 'success',
							title: this.$t('TOAST.SUCCESS'),
							content: this.$t('MANAGER.SUCCESS')
						})
      }
      return;
    },
    clickDelete(itemDelete) {
      const choice = confirm("Are you sure ???");
      if (choice == true) {
        for (let i = 0; i < this.list.length; i++) {
          if (itemDelete.id === this.list[i].id) {
            this.list.splice(i, 1);
          }
        }
      }
    },
    clickEdit(itemEdit) {
      this.roomEdit = itemEdit;
      this.$bvModal.show("modal-prevent-closing");
    },
  },
  computed:{
    list(){
      return this.$store.state.app.list
      
    }
    
  },
  data() {
    return {
      roomEdit: {},
      new_room:{
        id: "",
        price: "",
        status: "",
        descreption: "",
      },
      nameState: null,
      submittedNames: [],
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
