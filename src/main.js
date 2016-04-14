$ = jQuery = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var main = require('./js/base');

// Components
var Projects = require('./components/Projects');

var App = React.createClass({
	render: function(){
		return (
			<div id='itemsWrapper'>
				
			</div>
		)
	}
});

ReactDOM.render(<App />, document.getElementById('projects'));