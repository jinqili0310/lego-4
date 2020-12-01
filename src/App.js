/*
 * @Author: Jinqi Li
 * @Date: 2020-08-12 06:44:13
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2020-12-01 02:39:46
 * @FilePath: /lego-2/src/App.js
 */
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/home';

function App() {
	return (
		<div className="navRoute">
			<HashRouter basename="/lego-4">
				<Switch>
					<Route path="/" exact component={Home} />
					<Redirect to="/" />
				</Switch>
			</HashRouter>
		</div>
	);
}

export default App;
