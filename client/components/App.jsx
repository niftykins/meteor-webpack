import {Component, PropTypes} from 'react';

export default class App extends Component {
	static propTypes = {
		history: PropTypes.object.isRequired,
		location: PropTypes.object.isRequired,
		params: PropTypes.object.isRequired,
		children: PropTypes.node
	};

	render() {
		return (
			<div className="app">
				{this.props.children}
			</div>
		);
	}
}
