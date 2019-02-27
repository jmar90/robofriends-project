import React, { Component } from 'react';

class ErrorBoundary extends Component {
	constructor(props){
		super(props);
		this.state = {
			hasError: false
		}	
	}

	componentDidCatch(error, info){
		this.setState({ hasError: true })
	}

	render(){
		if(this.state.hasError){ //if error
			return <h1>Ooops! Something went wrong!</h1>
		} 
		return this.props.children  //children = anything wrapped inside ErrorBoundary
	}
}

export default ErrorBoundary;