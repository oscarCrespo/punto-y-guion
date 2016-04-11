'use strict'

var React = require('react');

var Home = React.createClass({
	render: function(){
		return (
			<div className='card'>
				<h1>Hello there</h1>
				<p>Im a react component</p>
			</div>
		)
	}
});

module.exports = Home;