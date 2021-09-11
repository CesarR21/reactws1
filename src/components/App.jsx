
import React from "react";
import React, { Component } from "react";
import './App.css';
import DataTable from './DataTable';


class App extends Component {
    State =  { 
        value(props)
    }
const DisplayName = props => {
    return (
      <p>Reggie White</p>
  )
}
MyComponent.displayName = "MyComponent"
    <ul>
       {(list || [this.state]).map(item => (
          <ListItem key={state.id} item={state} />
 ))}</ul>

 render(){
        return (
            <h1>Reggie White</h1>
        )
    }
}
  class App extends Component
  

render(){
     const { state } = this.state.props
     const namesList = state.map(name => {
       consle.log(namesList)
     })
     return(
       <ul>
          <li personName="Mike"></li>
          <li personName="Nevin"></li>
          <li personName="Aaron"></li>
          <li personName="Tory"></li>
          <li personName="Kelly"></li>
          </ul>
      );
    }
  }

  class App extends Component {
  
    constructor(props) {
      super(props);
      this.clickMe = this.clickMe.bind(this);
    }
  
    clickMe() {
      alert('DevCodeCamp');
    }
    
    return (
      <button onClick={this.clickMe}>
        Click me!
      </button>
    );
  }

  class App extends Component {
    render() {
  
      const headings = [
          'superheroId',
          'name' ,
          'primaryAbility',
          'secondarAbility'
       ];
       const rows = [
        [
          '1',
          'BatMan',
          'Wealthy',
          'Rich'
        ],
        [

          '2',
          'Superman',
          'Super strength',
          'Fly'
        ],
        [

          '3',
          'Spiderman',
          'Spider senses',
          'Shoots web'
        ],
          
       return (
            <AppProvider>
              <Page title="SuperHeroes">
                <DataTable headings={headings} rows={rows} />
              </Page>
            </AppProvider>
          );
        }
      }




export default App;

        







