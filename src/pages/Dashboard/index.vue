<template>
	<div class="dashboard">
		<div class="dashboard-header">
			<div class="header-box">
				<h2><i class="fas fa-home"></i> Tổng số phòng </h2>
				<h3> 250 </h3>
			</div>
			<div class="header-box">
				<h2><i class="fas fa-bed"></i> Phòng Đã Thuê </h2>
				<h3> 220 </h3>
			</div>
			<div class="header-box">
				<h2> <i class="fas fa-bed-alt"></i>Phòng Trống </h2>
				<h3> 30 </h3>
			</div>
			<div class="header-box">
				<h2> <i class="fas fa-history"></i>Tổng Số Phòng Nợ </h2>
				<h3> 50 </h3>
			</div>
		</div>
		<div class="dashboard-content">
			<div class="row">
				<div class="col-md-6 col-sm-12 col-lg-6">
					<table class="table border">
						<thead class="text-center">
							<th colspan="2">Phòng Trống</th>
						</thead>
						<thead>
							<th>Số Phòng</th>
							<th>Giá Tièn</th>
						</thead>
						<tbody>
							<tr>
								<td>ROOM 2001</td>
								<td>100,000,000$</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div class="col-md-6 col-sm-12 col-lg-6">
					<table class="table border">
						<thead class="text-center">
							<th colspan="2">Phòng Còn Nợ Tiền</th>
						</thead>
						<thead>
							<th>Số Phòng</th>
							<th>Giá Tièn</th>
						</thead>
						<tbody>
							<tr>
						<td>ROOM 2001</td>
								<td>100,000,000$</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Dashboard'
	};
</script>
