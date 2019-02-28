import { 
	CHANGE_SEARCH_FIELD,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAILED 
} from './constants';

// Initial objects in Redux store
const initialStateSearch = {
	searchField: ''
}

const initialStateRobots = {
	isPending: false,
	robots: [],
	error: ''
}

// Create reducer for searchRobots
// Gets input of state (we've set default param to initialState) & action (default = empty object, b/c actions are just objects that we return)
export const searchRobots = (state = initialStateSearch, action = {}) => {
	switch(action.type){  //remember, we specified type in our action.js file
		case CHANGE_SEARCH_FIELD: //if change_search_field occurs
			return Object.assign({}, state, { searchField: action.payload }) 
				//We are returning a new state via Object.assign({}) that will have everything in the state.
				//Plus, we are going to update whatever searchField property we have with action.payload (which is whatever user has entered)
		default:
			return state;  //return state if action.type does not equal change_search_field
	}
}
	//Note: we could have used an if/else statement, but switch statement is cleaner & recommended in React docs.

// Reducer for requestRobots action
export const requestRobots = (state = initialStateRobots, action = {}) => {
	switch(action.type){
		case REQUEST_ROBOTS_PENDING:
			return Object.assign({}, state, { isPending: true})
		case REQUEST_ROBOTS_SUCCESS:
			return Object.assign({}, state, { robots: action.payload, isPending: false })
		case REQUEST_ROBOTS_FAILED:
			return Object.assign({}, state, { error: action.payload, isPending: false })
		default: 
			return state;
	}
}