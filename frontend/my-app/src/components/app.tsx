import { h } from 'preact';
import { Route, Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Profile from '../routes/profile';
import Task from '../routes/task';

const App = () => (
	<div id="app">
		<Header />
		<main>
			<Router>
				<Route path="/" component={Home} />
				<Route path="/profile/" component={Profile} user="me" />
				<Route path="/profile/:user" component={Profile} />
				<Route path="/task" component={Task} />
			</Router>
		</main>
	</div>
);

export default App;
