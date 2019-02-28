import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

// Import actions
import { setSearchField, requestRobots } from '../actions';

// Define parameters of connect
const mapStateToProps = state => {
	return {
		searchField: state.searchRobots.searchField,
		robots: state.requestRobots.robots,
		isPending: state.requestRobots.isPending,
		error: state.requestRobots.error
	}
}
	//mapStateToProps - 'Tell me what piece of state I need to listen to & send down as props'
	//Here, we're listening to the state of the search field

const mapDispatchToProps = (dispatch) => {  //dispatch = what triggers action
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onRequestRobots: () => dispatch(requestRobots())
	}
}	
	//mapDispatchToProps - 'Tell me what props I should listen to that are actions that need to get dispatched'
	//So, we are listing the Redux actions that we will be using/dispatching.

class App extends Component {
	componentDidMount() {
		this.props.onRequestRobots();
	}

	render() {
		const { searchField, onSearchChange, robots, isPending } = this.props;
		const filteredRobots = robots.filter(robot => {   
			return robot.name.toLowerCase().includes(searchField.toLowerCase()); 
		})
		return isPending ?
		<h1>Loading</h1> :
		(
			<div className='tc'>	  
				<h1 className='f1'>RoboFriends</h1>
				<SearchBox searchChange={onSearchChange} />  
				<Scroll>
					<ErrorBoundary>
						<CardList robots={filteredRobots}/>  
					</ErrorBoundary>
				</Scroll>
			</div>
		);
	}
}

// Use connect to subscripe App component to state changes in the Redux store
// Connect will run & return another function. This 2nd function will run with argument App.
export default connect(mapStateToProps, mapDispatchToProps)(App);