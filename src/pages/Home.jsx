import React, { Component } from 'react';
import Header from '../components/Header'
import Students from '../College-students.jpg'
import './Home.css'
import Ibm from './zos.jpg'


export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      message: 'Loading...'
    }
  }

 

  render() {
    return (
      <div>
        <Header />
        
        
        <div className="container">
          <h1>Why Rate My Partner</h1>
          <p>Do your group members act like apes?<br/>Do they make you wanna die?<br/>Do they make you question the future of humanity<br/>So what can you to save others from this fate</p>
          <li><a href="/register">Rate My Partner</a></li> 
          <img src={Students}></img>
        </div><
          div className="ibm_add">
                <ul>
            <a target="_blank" href ="https://www.ibm.com/it-infrastructure/z"><img src={Ibm} width ="100px" height ="100px"></img></a>
            </ul>
            </div>

        

        
      </div>
      
    );
  }
}