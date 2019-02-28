import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import './index.css';
import App from './containers/App'; 
import * as serviceWorker from './serviceWorker';
import { searchRobots, requestRobots } from './reducers';
import 'tachyons';  

const logger = createLogger();
const rootReducer = combineReducers({ searchRobots, requestRobots });

// Create store. Store will user reducers to create the store/object tree of our state.
// rootReducer = all reducers combined. Store can now be accessed/passed down into App as a prop.
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(
	<Provider store={store}>  
		<App />
	</Provider>, document.getElementById('root'));
	//'Provider' comes with reaect-redux. By wrapping App in Provider, we can now pass down store as a prop in Provider,
	//which will ensure that store gets passed down the component tree to all children of App.

serviceWorker.register();
