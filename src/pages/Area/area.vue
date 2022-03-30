<template>
  <div id="area">
    <div class="title">
      <span>Khu vực</span>
      <button>Tạo khu vực</button>
    </div>
    <div class="container">
        <table class="table table-bordered">
            <thead>
              <tr>
                <th scope="col" class="col-1">Tên khu vực</th>
                <th scope="col" class="col-2">Địa chỉ</th>
                <th scope="col" class="col-1">Tổng số phòng</th>
                <th scope="col" class="col-1">Người quản lý</th>
                <th scope="col" class="col-2">SĐT</th>
                <th scope="col" class="col-1"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td class="actions">
                  <div class="btn btn-warning" >
                    <i class="fa fa-edit"></i>
                  </div>
                  <div class="btn btn-danger" >
                    <i class="fa fa-trash"></i>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#area .title {
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
#area .title button{
  border: none;
  border-radius: 5px;
  margin-left: 1050px;
}
.container{
    margin-top: 140px;
}
.container table{
  text-align: center;
}
.rooms-content table .actions a{
  text-decoration: none;
  color: white;
}
.container .actions > div {
  height: 35px;
  width: 40px;
  margin-left: 5px;
}
</style>