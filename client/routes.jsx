import React from 'react';
import {render} from 'react-dom';
window.React = React;

import {Router, Route} from 'react-router';
import {createHistory} from 'history';
const history = createHistory();

import App from './components/App';

const router = (
	<Router history={history}>
		<Route path="/" component={App} />
	</Router>
);

Meteor.startup(() => {
	const rootElement = document.getElementById('root');
	render(router, rootElement);
});
