'use strict'
var ProjectsDB = require('./ProjectsDB');
var React = require('react');

console.log(ProjectsDB);

var ProjectList = React.createClass({
		componentDidMount: function() {
		    console.log(Array.isArray(this.props.projects)); // => true
		 },
		 createProject: function(project) {
			  return (
			  	<a key={project.id} href="{project.link}" target="_blank">
				  	<div className="item">
				  		<img src={project.img} alt={project.name}></img>
				  		<span className="mask"></span>
				  		<h5 className="brand">{project.name}</h5>
				  		<div className="tagsGroup">
				  			{project.tags.map(function(el){
				  				var typeClass = el.type == 'title' ? 'tag tit' : 'tag'; 
				  				return <span className={typeClass}>{el.content}</span> 
				  			})} 
				  		</div>
				  	</div>
			  	</a>
			  )
		},
		render: function() {
			
			return (
				<div id='itemsWrapper'>{this.props.projects.map(this.createProject)}</div>
			)

		}
});

var Projects = React.createClass({
	render: function(){
		return (
				<ProjectList projects={ProjectsDB}/>
		)
	}
});

module.exports = Projects;

/*==============================================================

var TodoList = React.createClass({
  render: function() {
    var createItem = function(item) {
      return <li key={item.id}>{item.text}</li>;
    };
    return <ul>{this.props.items.map(createItem)}</ul>;
  }
});
var TodoApp = React.createClass({
  getInitialState: function() {
    return {items: [], text: ''};
  },
  onChange: function(e) {
    this.setState({text: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var nextItems = this.state.items.concat([{text: this.state.text, id: Date.now()}]);
    var nextText = '';
    this.setState({items: nextItems, text: nextText});
  },
  render: function() {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.onChange} value={this.state.text} />
          <button>{'Add #' + (this.state.items.length + 1)}</button>
        </form>
      </div>
    );
  }
});




// Correct :)
var ListItemWrapper = React.createClass({
  render: function() {
    return <li>{this.props.data.text}</li>;
  }
});
var MyComponent = React.createClass({
  render: function() {
    return (
      <ul>
        {this.props.results.map(function(result) {
           return <ListItemWrapper key={result.id} data={result}/>;
        })}
      </ul>
    );
  }
});

*/