'use strict'
var ProjectsDB = require('../stores/ProjectsDB');
var CategoryList = require('../stores/CategoryList');
var React = require('react');

class ProjectList extends React.Component {

	componentDidMount(){
		console.log(this.props.projects.getAll);
	}
	createProject( project ){
		return (
			<a key={project.id} href={project.link} target="_blank">
				<div className="item">
					<img src={project.img} alt={project.name}></img>
					<span className="mask"></span>
					<h5 className="brand">{project.name}</h5>
					<div className="tagsGroup">
						{ project.cats.map( (el, i)=>{
								let item = CategoryList.filter( (cat)=>{ return cat.id === el });
								var typeClass = item[0].type == 'title' ? 'tag tit' : 'tag';
								return <span key={i} className={typeClass}>{item[0].content}</span>
							})
						}
					</div>
				</div>
			</a>
		);
	}
	render(){
		return (
			<div id='itemsWrapper'>{this.props.projects.getAll().map(this.createProject)}</div>
		)
	}
}

class Projects extends React.Component {

	render(){
		return (
				<ProjectList projects={ProjectsDB} categories={CategoryList}/>
		);
	}
}

module.exports = Projects;
