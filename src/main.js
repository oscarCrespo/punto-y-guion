var jQuery = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var main = require('./js/base');
var ProjectsModule = require('./components/ProjectsModule');

class ProjectsApp extends React.Component {
  render(){
    return(
        <ProjectsModule />
    )
  }
}
ReactDOM.render(<ProjectsApp />, document.getElementById('projectsApp'));
