import logo from './logo.svg';
import './App.css';
import React from 'react';
import Person from './Component/Person';

class App extends React.Component{
render(){
  return(
    <div className='App'>
    <Person/>
    </div>
  )
}

}
    
export default App;
