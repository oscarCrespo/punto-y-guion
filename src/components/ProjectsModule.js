'use strict'
var ProjectsDB = require('../stores/ProjectsDB');
var CategoryList = require('../stores/CategoryList');
var React = require('react');
var CategorySelector = require('./CategorySelector');


class Project extends React.Component {

	render(){
		return (
			<a href={this.props.projectData.link} target="_blank">
				<div className="item">
					<img src={this.props.projectData.img} alt={this.props.projectData.name}></img>
					<span className="mask"></span>
					<h5 className="brand">{this.props.projectData.name}</h5>
					<div className="tagsGroup">
						{ this.props.projectData.cats.map( (el, i)=>{
								let item = CategoryList.filter( (cat)=>{ return cat.id === el });
								let typeClass = item[0].type == 'title' ? 'tag tit' : 'tag';
								return <span key={i} className={typeClass}>{item[0].content}</span>
							})
						}
					</div>
				</div>
			</a>	
		);
	}
}


class ProjectList extends React.Component {

	render(){
		return (
			<div id='itemsWrapper'>
		
					{this.props.projects.map( ( project )=>{ return <Project key={project.id} projectData={project} />} )}
			
			</div>
		)
	}

}


class ProjectsModule extends React.Component {
	constructor(){
		super()
		this.state = {
			projectsSelected : ProjectsDB.getAll()
		}
	}
	updateProjectsCat(cat){
		let newCats = ProjectsDB.getCat(cat);
		this.setState({projectsSelected: newCats});
	}
	updateAllCats(){
		this.setState({projectsSelected: ProjectsDB.getAll() });
	}
	render(){
		return (
			<div>
			  <CategorySelector changeCat={ this.updateProjectsCat.bind(this) } allCats={ this.updateAllCats.bind(this) } categories={CategoryList} />

          	  <ProjectList projects={this.state.projectsSelected} categories={CategoryList}/>


			</div>
		);
	}
}


module.exports = ProjectsModule;
