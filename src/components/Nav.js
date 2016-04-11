'use strict'

var React = require('react');

var Nav = React.createClass({
	render: function(){
		return (
			<header>
				<a data-scroll href="#home"><h1 id="logo"></h1></a>

				<nav>
					<a href="#projects"><div class="btn"><span>Projects</span></div></a>
					<a href="http://www.behance.net/puntoyguion" target="_blank"><div class="btn" ><span>Behance</span> <img src="/img/behance.png" width="13" alt=""></img></div></a>
					<a href="https://github.com/oscarCrespo" target="_blank"><div class="btn" ><span>GitHub</span> <img src="/img/github-circle.png" width="13" alt=""></img></div></a>
					<a href="#contacto"><div class="btn" ><span>Contact</span></div></a>
				</nav>

			</header>
		)
	}
});

module.exports = Nav;