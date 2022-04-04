export default {
	TOAST: {
		SUCCESS: 'Sucess',
		WARNING: 'Warning',
		DANGER: 'Danger'
	},
	ROUTER: {
		LOGIN: 'Login',
		PAGE_NOT_FOUND: 'Page Not Found',
		DASHBOARD: 'Dashboard',
		ACCOUNT_MANAGEMENT: 'Account Management',
		ROOM_MANAGEMENT: 'Room Management',
		ROOM_REGISTER: 'Room Register',
		NOTIFICATION: 'Notification',
		CUSTOMER: 'Customer',
		REVENUE: 'Revenue',
		AREA: 'Area Management',
		BILL: 'Bill',
		REPORT: 'Report',
		PLACE: 'Place Management'
		
	},
	NAVBAR: {
		LANGUAGE: 'Language',
		ENGLISH: 'English',
		VIETNAMESE: 'Vietnamese',
		AREA: 'Area',
		PROFILE: 'Profile',
		LOGOUT: 'Logout'
	},
	LOGIN: {
		TITLE: 'Login',
		PLACEHOLDER_ACCOUNT: 'Enter your account',
		PLACEHOLDER_PASSWORD: 'Enter your password',
		BUTTON_LOGIN: 'Login',
		LOGIN_SUCCESS: 'Successful login',
		LOGIN_ERROR: 'You have failed to login'
	},
	LOGOUT: {
		TEXT_LOGOUT: 'Logout',
		LOGOUT_SUCCESS: 'You have successfully logged out',
		LOGOUT_ERROR: 'You have failed to log out'
	},
	PAGE_NOT_FOUND: {
		DETAIL: "We can't seem to find the page you're looking for",
		GO_TO_HOME: 'Go To Home Page'
	},
	I18N: {
		CHANGE_LANGUAGE: {
			SUCCESS: 'Change language successfully.',
			FAILED: 'Language change failed.'
		}
	},
	USER: {
		TITLE: "Account Mamangement",
		CREATE_USER: "Create User",
		SELECT_ROLE: "Select Role",
		FORM: {
			TITLE: "Create User",
			PASSWORD: "Password",
			EMAIL: "Email",
			NAME: "Name",
			BIRTH: "Date of Birth",
			CREATE: "Create",
			ROLE: "Role",
			SUCCESS: "Create Successfully",
			SAVE: "SAVE",
			CLOSE: "Close",
			MESSAGE: {
				EMAIL: "Invalid Email",
				SPACE: "You must enter a valid value",
				PASSWORD: "Invalid Password! Password must be at least 8 characters",
			}
		},
		SEARCH_BY: {
			KEYWORD: "Keyword",
			ROLE: "Role",
			PLACEHOLDER_KEYWORD: "Enter the keyword"
		},
		TABLE: {
			HEADING: {
				ID: 'ID',
				EMAIL: "Email",
				NAME: "Fullname",
				ROLE: "Role",
				BIRTH: "Date of Birth",
				ACTIONS: "Actions",
			}
		}
	},
	MANAGER: {
		TITLE: 'List Of Rooms',
		CREATE: 'Create Room',
    	SUCCESS: 'Create Success',
		EDIT: 'Edit room',
		SELECT_ROOM: {
			TOTAL: 'Total',
			RENTED: 'Being Rented',
			EMPTY: 'Empty'
    	},
		SEARCH: {
			TITLE: 'Search',
			PLACEHOLDER: 'Enter room number'
		},
		TABLE: {
			ID: 'Room No',
			IMAGE: 'Image',
			PRICE: 'Price (VND)',
			STATUS: 'Status',
			DESCRIPTION: 'Description',
			DETAIL: 'Detail',
			EDIT: 'Edit',
			DELETE: 'Delete'

		},
		FORM: {
			TITLE: 'Create room',
			CATEGORY_NAME: 'Category name',
			START_DATE: 'Start date',
			END_DATE: 'End date',
			DESCRIPTION: 'Description',
			CREATE: 'Create',
			SUCCESS: 'Create Successfully',
			SAVE: 'SAVE',
			CLOSE: 'Close',
			MESSAGE: {
				SPACE: 'You must enter a valid value'
			}
		},
	},
};
