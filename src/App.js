import React from 'react';
import './App.css';
import  Menu from './Menu';
import List from './List';
import Wapp from './Wapp';
 class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      // array cels de propiedades de item, ¿puedo implementarlo con fetch o axios? 
      cels:[
        {id:0, title: 'Celular Iphone 13', memory: ' 258 gb', price: '$ 877', color: 'blue', image: 'cell1.png', array:['img.png', 'img.png', 'img.png' ], desc: ''},
        {id:1, title: 'Celular Iphone 13 pro', memory: ' 258 gb', price: '$ 877', color: 'blue', image: 'cell2.png'},
        {id:2, title: 'Celular Iphone 14', memory: ' 258 gb', price: '$ 877', color: 'blue', image: 'cell2.png'},
        {id:3, title: 'Celular Iphone 14 pro', memory: ' 258 gb', price: '$ 877', color: 'blue', image: 'cell1.png'},
        {id:4, title: 'Celular Iphone 14 pro max', memory: ' 258 gb ', price: '$ 877', color: 'blue', image: 'cell1.png'},
        {id:5, title: 'Celular Iphone 13', memory: ' 258 gb', price: '$ 877', color: 'blue', image: 'cell1.png', array:['img.png', 'img.png', 'img.png' ], desc: ''},
        {id:6, title: 'Celular Iphone 13 pro', memory: ' 258 gb', price: '$ 877', color: 'blue', image: 'cell2.png'},
        {id:7, title: 'Celular Iphone 14', memory: ' 258 gb', price: '$ 877', color: 'blue', image: 'cell2.png'},
      ],
      
      copyCels: []

    };
    // tengo que llamarlo asi para que no me tire error
    this.onSearch = this.onSearch.bind(this);

  }
   // configura el estado inicial
  componentDidMount(){
    this.initCels();
  }

  initCels(){
    this.setState((state,props) => ({
      copyCels: [...state.cels]
    }));
  }


  // La busqueda de los items/cells 
  onSearch = (query) => {
    if(query === ''){
      this.setState({copyCels: [...this.state.cels]});
      this.initCels();
    }else{

      const temp = [...this.state.cels];
      let res = [];
      temp.forEach(item =>{
        if(item.title.toLowerCase().indexOf(query) > -1){
          res.push(item);
        }
      });
    
      this.setState({copyCels: [...res]});
    }
  }
  render(){
    return (
      <div className="app">
        <Menu title="Entre Tech" onsearch={this.onSearch}/>
        <List items={this.state.copyCels}/>
        
        {/* <Desc />// Nuevos componente - puede ser el componente del onclick en item*/}
        <Wapp /> 
      </div>
    );
  }
}

export default App;
