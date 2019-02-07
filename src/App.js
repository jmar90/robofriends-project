import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import './App.css';
	// We have to destructure robots, b/c in the robots.js file, we used export vs. export default. 'Export' is used when you are
	// exporting > 1 variable, so consequently, if you are importing something from a file where 'export' is used, you need to 
	// use destructuring to indicate which PART of the file you want to import.

	// CardList is accepting a robots prop. Remember, that in React, children have access to the props of their parents. So, by
	// passing through the robots array (which is specified in robots.js) to CardList, its child Card will also have access to
	// the robots array data.

class App extends Component {
	constructor() {
		super()	// Calls constructor of Component (must use super in order to use 'this')
		this.state = {		// Our state consists of robots & search field. Remember, state can change.
			robots: [],
			searchfield: ''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users') //Fetch is a method on window object. Tool to make requests to servers.
			.then(response => response.json())
			.then(users => this.setState({ robots: users }));  //Set robots array equal to the fake user data we're pulling from jsonplaceholder
	}

	onSearchChange = (event) => {  
		// onSearchChange is random name we chose for function. Every time input changes, we get an 'event' (just like in DOM manipulation)
		// NOTE: Anytime you create a function in React, be sure to use = & => (can't just write onSearchChange(event) -- otherwise,
		// React will assume that 'this' refers to 'input' not app's state, as the event that triggers onSearchChange occurs in
		// SearchBox.js when the 'input' is changed)
		this.setState({ searchfield: event.target.value })  // setState = prebuilt React method. Update searchfield's state to match whatever value is entered into search box 
	}

	render() {
		const filteredRobots = this.state.robots.filter(robot => {   // Use array filter method to filter robots array
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase()); // Only return those robots that include the searchfield term in their name.
		})
		if (this.state.robots.length === 0){
			return <h1>Loading</h1>
		} else {
			return (
				<div className='tc'>	  {/* Since we can only return 1 thing, wrap h1 & CardList in div. tc = text center. */}
					<h1 className='f1'>RoboFriends</h1>
					<SearchBox searchChange={this.onSearchChange} />  {/* 'this' refers to App */}
					<Scroll>
						<CardList robots={filteredRobots}/>  {/* filteredRobots is now passed down to CardList as a PROP */}
					</Scroll>
				</div>
			);
		}
	}
}

export default App;