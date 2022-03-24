<template>
	<b-navbar toggleable="lg" type="dark">
		<b-navbar-brand @click.prevent.stop="$emit('toggle')">
			<i id="toggle-menu" class="icofont-navigation-menu" />
		</b-navbar-brand>

		<b-navbar-toggle target="nav-collapse">
			<template #default="{ expanded }">
				<b-icon v-if="expanded" icon="chevron-bar-up" />
				<b-icon v-else icon="chevron-bar-down" />
			</template>
		</b-navbar-toggle>

		<b-collapse id="nav-collapse" is-nav>
			<b-navbar-nav id="text-name">
				<!-- <img src="https://i.pinimg.com/564x/f9/92/5e/f9925ef90a024cbf91ce44422d44b391.jpg" alt=""> -->
			</b-navbar-nav>

			<b-navbar-nav class="ml-auto">
				<b-nav-item-dropdown right>
					<template #button-content1>
						{{ $t('NAVBAR.LANGUAGE') }}
					</template>
					<b-dropdown-item href="#" @click="setLanguage('en')">
						{{ $t('NAVBAR.ENGLISH') }}
					</b-dropdown-item>
					<b-dropdown-item href="#" @click="setLanguage('vn')">
						{{ $t('NAVBAR.VIETNAMESE') }}
					</b-dropdown-item>
				</b-nav-item-dropdown>

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
							User Settings
						</span>
					</template>
					<b-dropdown-item
						class="text"
						:disabled="routePath === '/dashboard/profile'"
						@click="$router.push('/dashboard/profile')"
					>
						{{ $t('routes.profile') }}
					</b-dropdown-item>
					<b-dropdown-item class="text" @click="logout">{{
						$t('navbar.logout')
					}}</b-dropdown-item>
				</b-dropdown>
			</b-navbar-nav>
		</b-collapse>
	</b-navbar>
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
			}
		},
		watch: {
			routeChange() {
				this.title = this.$route.meta.title;
			}
		},
		methods: {
			async logout() {
				await this.$store.dispatch('user/logout');
				this.$router.push(`/login?redirect=${this.$route.fullPath}`);
			}
		}
	};
</script>

<style lang="scss" scoped>
#text-name {
	/* img {
		border-radius: 50%;
		width: 50px;
	} */
}
</style>