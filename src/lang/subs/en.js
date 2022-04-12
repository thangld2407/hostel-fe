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
		ADDRESS:'Address',
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
	DASHBOARD:{
		BOX:{
			TOTAL_ROOM:'Total Room',
			RENTED_ROOM:'Rented Room',
			EMPTY_ROOM: 'Empty Room',
			TOTAL_DEPT_ROOM: 'Total Dept Room',

		},
		TABLE:{
			EMPTY_ROOM: 'Empty Room',
			DEPT_ROOM: 'Dept Room',
			ID: 'Room Name',
			PRICE: 'Price'
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
	ROOM: {
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
			ID: 'ID',
			NAME:'Room Name',
			IMAGE: 'Image',
			PRICE: 'Price (VND)',
			STATUS: 'Status',
			DESCRIPTION: 'Description',
			DETAIL: 'Detail',
			EDIT: 'Edit',
			DELETE: 'Delete'

		},
		FORM: {
			TITLE: 'Create new room',
			EDIT:'Edit Room',
			ROOM_PRICE: 'Room Price',
			NAME:'Room Name',
			ELECTRICITY_PRICE: 'Electricity Price',
			WATER_PRICE: 'Water Price',
			DESCRIPTION: 'Description',
			STATUS: 'Status',
			EMPTY:'Empty',
			CREATE: 'Create',
			SUCCESS: 'Create Successfully',
			SAVE: 'SAVE',
			CLOSE: 'Close',
			MESSAGE: {
				SPACE: 'You must enter a valid value'
			}
		},
	},
	NOTIFICATION:{
		TITLE:'Notification',
		SEARCH: {
			TITLE: 'Search',
			PLACEHOLDER: 'Enter room number'
		},
		TABLE:{
			ID:'Room No.',
			NAME:'Customer Name',
			ISSUES:'Issues',
			CONTENT:'Content',
			STATUS:'Status',
		}
	},
	CUSTOMER: {
		TITLE: "List of Customer",
		SEARCH: {
			TITLE: 'Search',
			PLACEHOLDER: 'Enter room number'
		},
		TABLE: {
			ID:'Room No.',
			NAME:'Tenant',
			PHONE:'Phone',
			ADDRESS:'Address',
			START_AT:'Rented date',
			TOTAL_DEPT:'Total Dept'
		},
	},
	REVENUE:{
		TITLE: 'Revenue',
		SELECT:{
			AREA:'Select Area',
			ADDRESS:'Select Address',
			MONTH:'Select Month'
		},
		BOX:{
			RENTED_ROOM:'Rented Room',
			REVENUE: 'Revenue',
			DEBT: 'Debit customers',
		},
		TABLE:{
			AREA:'Area',
			ADDRESS:'Address',
			TOTAL_ROOM:'Total Room',
			MANAGER:'Manager',
			TOTAL_PRICE:'Total Price',
			DEBT:'Debt'
		}
	},
	AREA:{
		TITLE: 'Area',
		CREATE:'Create Area',
		FORM:{
			TITLE:'Create new Area',
			EDIT:'Edit Area',
			AREA_NAME: 'Area Name',
			DATE:'Date created',
			CREATE: 'Create',
			SUCCESS: 'Create Successfully',
			SAVE: 'SAVE',
			CLOSE: 'Close',
			MESSAGE: {
				SPACE: 'You must enter a valid value'
			}
		},
		TABLE:{
			ID:'ID',
			AREA_NAME:'Area Name',
			DATE:'Date created'
		}
	},
	ISSUES:{
		TITLE:'Report problem',
		NAME:'Issues',
		CONTENT:'Content',
		SUBMIT:'Submit'
	}
}
