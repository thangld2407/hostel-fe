<template>
	<div id="navbar">
		<nav>
			<span>{{$t('NAVBAR.AREA')}}</span>
			<input type="text" />
		</nav>
		<nav>
			<span>{{$t('NAVBAR.ADDRESS')}}</span>
			<input type="text" />
		</nav>
		<b-navbar toggleable="lg" type="dark">

		<b-navbar-toggle target="nav-collapse">
			<template #default="{ expanded }">
				<b-icon v-if="expanded" icon="chevron-bar-up" />
				<b-icon v-else icon="chevron-bar-down" />
			</template>
		</b-navbar-toggle>

		<b-collapse id="nav-collapse" is-nav>
			<b-navbar-nav class="ml-auto">
				<b-dropdown id="dropdown-profile" text="Change" block class="m-2">
					<template #button-content1>
						{{ $t('NAVBAR.LANGUAGE') }}
					</template>
					<b-dropdown-item href="#" @click="setLanguage('en')">
						{{ $t('NAVBAR.ENGLISH') }}
					</b-dropdown-item>
					<b-dropdown-item href="#" @click="setLanguage('vn')">
						{{ $t('NAVBAR.VIETNAMESE') }}
					</b-dropdown-item>
				</b-dropdown>

				<b-dropdown id="dropdown-profile" text="Block Level Dropdown" block class="m-2">
					<template #button-content>
						<b-icon icon="person-circle" font-scale="1.0" class="icon-user" /><span>
							{{name}}
						</span>
					</template>
					<b-dropdown-item
						class="text"
						:disabled="routePath === '/dashboard/profile'"
						@click="$router.push('/dashboard/profile')"
					>
						{{ $t('NAVBAR.PROFILE') }}
					</b-dropdown-item>
					<b-dropdown-item class="text" @click="logout()">{{
						$t('NAVBAR.LOGOUT')
					}}</b-dropdown-item>
				</b-dropdown>
			</b-navbar-nav>
		</b-collapse>
	</b-navbar>
	</div>
</template>

<script>
	export default {
		name: 'Navbar',
		components: {},
		data() {
			return {
				title: this.$route.meta.title
			};
		},
		computed: {
			routeChange() {
				return this.$route;
			},
			routePath() {
				return this.$route.path;
			},
			name() {
				return this.$store.getters.name;
			}
		},
		watch: {
			routeChange() {
				this.title = this.$route.meta.title;
			}
		},
		methods: {
			logout() {
				this.$store
					.dispatch('auth/doLogout')
					.then(() => {
						this.$router.push('/login');

						MakeToast({
							variant: 'success',
							title: this.$t('TOAST.SUCCESS'),
							content: this.$t('LOGOUT.LOGOUT_SUCCESS')
						});
					})
					.catch(() => {
						MakeToast({
							variant: 'danger',
							title: this.$t('TOAST.DANGER'),
							content: this.$t('LOGOUT.LOGOUT_ERROR')
						});
					});
			}
		}
	};
</script>

<style scoped>
#navbar {
  background: #ECECEC;
  height: 50px;
  position: fixed;
  top: 0;
  width: calc(100% - 250px);
  left: 250px;
  display: flex !important;
  align-items: center;
  justify-content: end;
  z-index: 999;

}
#navbar nav:nth-child(1) input{
  margin: 0px 10px 0px 10px;
  width: 120px;
  border-radius: 5px;
  border: none;
}
#navbar nav:nth-child(2) input{
  margin: 0px 10px 0px 10px;
  width: 300px;
  border-radius: 5px;
  border: none;
}
</style>