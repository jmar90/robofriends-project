import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';
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
			robots: robots,
			searchfield: ''
		}
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
		return (
			<div className='tc'>	  {/* Since we can only return 1 thing, wrap h1 & CardList in div. tc = text center. */}
				<h1 className='f1'>RoboFriends</h1>
				<SearchBox searchChange={this.onSearchChange} />  {/* 'this' refers to App */}
				<CardList robots={filteredRobots}/>  {/* filteredRobots is now passed down to CardList as a PROP */}
			</div>
		)
	}
}

export default App;