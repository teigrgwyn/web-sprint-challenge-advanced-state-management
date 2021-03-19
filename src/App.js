import React, { Component } from "react";

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { fetchSmurfs } from './actions';

import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

class App extends Component {
	componentDidMount() {
		fetchSmurfs();
	}

	render() {
		return (
			<Provider store={createStore(reducer, applyMiddleware(thunk, logger))}>

			<div className="App">
				<Header />

				<main>
					<SmurfList/>
					<AddForm/>
				</main>
			</div>

			</Provider>
		);
	}
}

export default App;

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component first loads.