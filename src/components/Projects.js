'use strict'
var ProjectsDB = require('./ProjectsDB');
var React = require('react');

console.log(ProjectsDB);

var Projects = React.createClass({
	render: function(){
		return (
			<div className='card'>
				<h1>Hello there</h1>
				<p>Im a react component</p>
			</div>
		)
	}
});

module.exports = Projects;