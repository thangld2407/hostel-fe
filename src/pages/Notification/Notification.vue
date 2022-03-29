<template>
  <div id="notification">
      <div id="content-right">
          <div class="title">Notifications</div>
          <div class="zone-header-page">
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              placeholder="Nhập số phòng hoặc tên KH"
              id="product-search"
            />
          </div>
          <button><i class="fa fa-search"></i> Tìm kiếm</button>
        </div>
        <div class="container">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th scope="col" class="col-2">Phòng Số</th>
                <th scope="col" class="col-2">Tên KH</th>
                <th scope="col" class="col-2">Điện Thoại</th>
                <th scope="col" class="col-5">Nội dung</th>
                <th scope="col" class="col-1"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td class="actions">
                  <div
                    type="button"
                    class="btn btn-danger"
                  >
                    <i class="fa fa-trash"></i>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
  </div>

</template>

<script>
export default {
    name: "notification",
}
</script>

<style scoped>
#content-right{
  position: relative;
  top: 50px;
}
#content-right .title {
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
#content-right .zone-header-page {
  display: flex;
  margin: 60px 0px 50px 30px;
  height: 40px;
  z-index: 0;
}
#content-right input{
    width: 300px;
}
#content-right button {
  background: #1572a1;
  color: white !important;
  border: none;
  border-radius: 5px;
  width: 100px;
  margin-left: 20px;
  height: 38px;
}
.container .actions > div{
  width: 40px;
}
.container .actions i{
  margin-right: 5px;
}
.container table{
  text-align: center;
}
</style>