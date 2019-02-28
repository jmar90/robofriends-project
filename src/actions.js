// Create Redux Action for when user enters something in Search Field
import { 
	CHANGE_SEARCH_FIELD,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAILED 
} from './constants';

export const setSearchField = (text) => ({  //receives input of text (which user types)
	type: CHANGE_SEARCH_FIELD,  //capitalized b/c it's a constant
	payload: text
})
	//This action will take text & return an object with type change_search_filed (action that's being taken), & 
	//it will send (payload) text.

// Async action for request of robots api
// First line = higher order function. RequestRobots provides dispatch to 2nd layer.
// Thanks to Redux-thunk, we can use higher order functions
export const requestRobots = () => (dispatch) => {
	dispatch({ type: REQUEST_ROBOTS_PENDING });  //right away, dispatch pending
	fetch('https://jsonplaceholder.typicode.com/users') 
		.then(response => response.json())
		.then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data })) //if success, payload is users (robots) data
		.catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error}))
}