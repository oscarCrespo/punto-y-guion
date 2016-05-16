'use strict'
var React = require('react');
var smoothScroll = require('smooth-scroll');

class CategoryButton extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      id: this.props.catID,
      active: null
    }

  }
  clicked(){
    this.props.changeCat( this.state.id );
    smoothScroll.animateScroll(  '#itemsWrapper'   );
  }

  render(){
    return (
          <li onClick={this.clicked.bind(this)} className={ this.state.active ? 'catItem -active' : 'catItem' } >{this.props.categoryName} </li>
    );
  }
}

class CategorySelector extends React.Component{
constructor(){
  super();
  
  this.state = {
    visible: false    
  }
  
}
  isMobile(){
    return document.body.offsetWidth < 650 ? true : null;
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll(event) {

      let scrollTop = event.srcElement.body.scrollTop;
      let onContainer = document.getElementById('projects').offsetTop;
      let offContainer = (onContainer + document.getElementById('projects').offsetHeight);
      if(scrollTop >= onContainer-100 && scrollTop <= offContainer-600 && this.isMobile() != true){
          this.setState( { visible: true } );
      }else{
          this.setState( { visible: null } );
      }
      
  }
  updateAll(){
    smoothScroll.animateScroll('#projects');
    this.props.allCats();
  }
  render(){
    return (
      <div id="filter-wrapper" >
        <ul className={ this.state.visible ? 'active' : null }>
          <li className="catItem" onClick={this.updateAll.bind(this)}>All</li>
          {this.props.categories.map( (category)=>{
            return <CategoryButton key={category.id} catID={category.id} changeCat={this.props.changeCat} categoryName={category.content} />
          } )}
        </ul>
      </div>
    );
  }

}

module.exports = CategorySelector;
