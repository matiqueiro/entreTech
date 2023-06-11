import React from 'react';
import Search from './Search';
import './Menu.css';

class Menu extends React.Component{
  // constructor(props){
  //   super(props);
  // }
  render(){
    return(
      <div className='container'>
        <div className='subcontainer'>
  
          <div className='logo'>
            {this.props.title}
          </div>
          <div className='search'>
            <Search  onsearch={this.props.onsearch}/>
          </div>
          {/*
          // se puede implementar funcionalidad carrito 
          <div className='actions'>
            <button className='button btn-red'>Cancelar</button>
          </div>       */}
        </div>
      </div>
    );
  }
}
export default Menu;