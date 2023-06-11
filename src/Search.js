import React from 'react';


class Search extends React.Component{

  constructor(props){
      super(props);

      this.onChangeEvent = this.onChangeEvent.bind(this);
  }

  onChangeEvent = (e) =>{
      const query = e.target.value.toString().toLowerCase();
      this.props.onsearch(query);
  }

  render(){
      return(
          <input type="text" placeholder='¿Que estas buscando?' onChange={this.onChangeEvent} />
      );
  }
}

export default Search;