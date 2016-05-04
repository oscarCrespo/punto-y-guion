'use strict'
var React = require('react');
var $ = require('jquery');

class CategoryButton extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      id: this.props.catID
    }

  }
  clicked(){
    this.props.changeCat( this.state.id );
  }

  render(){
    return (
          <li onClick={this.clicked.bind(this)} >{this.props.categoryName} </li>
    );
  }
}

class CategorySelector extends React.Component{


  render(){
    return (
      <div id="filter-wrapper" >
        <ul>
          {this.props.categories.map( (category)=>{
            return <CategoryButton key={category.id} catID={category.id} changeCat={this.props.changeCat} categoryName={category.content} />
          } )}
        </ul>
      </div>
    );
  }

}

module.exports = CategorySelector;
