$ = jQuery = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');

// Components
var Nav = require('./components/Nav');
var Home = require('./components/Home');


var App = React.createClass({
	render: function(){
		return (
			<div id='wrapper'>
				<Nav />
				<Home />
			</div>
		)
	}
});

ReactDOM.render(<App />, document.getElementById('app'));