import { clear } from "@testing-library/user-event/dist/clear";
import React from "react";
import './Person.css';


class Person extends React.Component{
  constructor() {
    console.log("constructor()");
    super();
    this.state = {
      timer: 0,
      interval: null,
      FullName:"RIHAB KTAIFI",
      Bio:"I'm Rihab ktaifi, i'm 28 years old. I have a license diploma in IT applied to management and currently i'm studying FULL STACK JS development.",
      Image:require('./Photo.jpg'),
      Profession:"CURRENTLY, I WORK AS A MARKETING OFFICER",
      Show: true

    }}

    componentDidMount() {
      console.log("Component did Mount()");
    
      this.setState({
        interval: setInterval(
          () => this.setState({ timer: this.state.timer + 1 }),1000 )
      })
    }

    

    toggleShow=() =>{
      this.setState({
        Show: !this.state.Show
      })
    }

   


      
      render(){
        
        return(
          
          <div>
      <button onClick={()=>this.toggleShow()}> {this.state.Show ?'HIDE PROFILE':'SHOW PROFILE'} </button>
      <p className="timer"> {this.state.timer} </p>
      
      {this.state.Show?
      (<>
       <h1> {this.state.FullName} </h1>
       <p> {this.state.Bio} </p>
       <div className="flex" >
       <img src={this.state.Image}/>
       <p>{this.state.Profession}</p>
       </div>
       </> ) : (<h4> CLICK TO SHOW PROFILE </h4>)
        }
      
      
      </div>
      
      
        )
      }}


      export default Person;