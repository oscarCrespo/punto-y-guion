var jQuery = require("jquery");
var React = require("react");
var ReactDOM = require("react-dom");
var mainApp = require("./js/base");
var ProjectsModule = require("./components/ProjectsModule");
var SmoothScroll = require("smooth-scroll");

class ProjectsApp extends React.Component {
  componentDidMount() {
    var scroll = new SmoothScroll('a[href*="#"]', {
      speed: 700,
      easing: "easeInOutCubic"
    });
    mainApp(jQuery);
  }
  render() {
    return <ProjectsModule />;
  }
}
ReactDOM.render(<ProjectsApp />, document.getElementById("projectsApp"));
