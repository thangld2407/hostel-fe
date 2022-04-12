<template>
	<div class="page-login">
		<b-container>
			<div class="login-form col-xl-6 col-lg-6 mx-auto">
				<div class="login-form-content">
					<b-row>
						<b-col>
							<!-- Title -->
							<div class="login-form-content__header">
								<h1>{{ $t('LOGIN.TITLE') }}</h1>
							</div>

							<!-- Account -->
							<div class="login-form-content__body">
								<div class="item-input">
									<b-form-input
										type="text"
										:placeholder="$t('LOGIN.PLACEHOLDER_ACCOUNT')"
										spellcheck="false"
										autofocus
										@keyup.enter="doLogin()"
										:disabled="isProcess"
										v-model="User.email"
									/>
								</div>

								<div class="item-input">
									<b-input-group>
										<b-form-input
											:type="showPassword ? 'text' : 'password'"
											:placeholder="$t('LOGIN.PLACEHOLDER_PASSWORD')"
											spellcheck="false"
											name="password"
											autocomplete="off"
											@keyup.enter="doLogin()"
											:disabled="isProcess"
											v-model="User.password"
										/>
										<b-input-group-append is-text v-if="User.password">
											<i
												:disabled="isProcess"
												@click="showPassword = !showPassword"
												:class="handleShowPassword()"
											></i>
										</b-input-group-append>
									</b-input-group>
								</div>
							</div>

							<div class="login-form-content__footer">
								<b-row>
									<b-col>
										<b-button @click="doLogin()" :disabled="isProcess">
											<i
												v-if="isProcess"
												class="fad fa-spinner-third fa-spin"
											></i>
											{{ $t('LOGIN.BUTTON_LOGIN') }}
										</b-button>
									</b-col>
								</b-row>
							</div>
						</b-col>
					</b-row>
				</div>
			</div>
		</b-container>
	</div>
</template>

<script>
	// import Logo from '@/assets/images/student.png';
	import { setRoutes } from '@/utils/setRoutes';
	import { MakeToast } from '@/toast/toastMessage';
	import { postLogin } from '@/api/modules/auth';
	import { setToken } from '../../const/cookie';
	export default {
		name: 'Login',
		data() {
			return {
				User: {
					email: '',
					password: ''
				},
				showPassword: false,
				isProcess: false
			};
		},
		methods: {
			doLogin() {
				this.isProcess = true;
				const Account = {
					email: this.User.email,
					password: this.User.password
				};

				postLogin('auth/login', Account).then(async res => {
					const ROLES = res.data.role_id.role_name || [];
					console.log(ROLES);
					setToken('access_token', res.accessToken);
					setToken('roles', [ROLES]);
					try {
						const accessRoutes = this.$store.dispatch('permission/generateRoutes', {
							roles: ROLES,
							permissions: []
						});
						await setRoutes(accessRoutes);

						this.$router.push('/');

						MakeToast({
							variant: 'success',
							title: this.$t('TOAST.SUCCESS'),
							content: this.$t('LOGIN.LOGIN_SUCCESS')
						});
					} catch (error) {
						console.log(error);
							MakeToast({
								variant: 'warning',
								title: this.$t('TOAST.WARNING'),
								content: 'You can not delete this room'
							});
					}
				});
			},

			handleShowPassword() {
				if (this.isProcess) {
					this.showPassword = false;
				}

				if (this.showPassword) {
					return 'fas fa-eye-slash';
				}

				return 'fas fa-eye';
			}
		}
	};
</script>

<style lang="scss" scoped>
	@import '@/scss/_variables.scss';
	@import '@/scss/module/_login.scss';
</style>
