import React, { Component } from 'react';
import Header from '../components/Header'
import Students from '../College-students.jpg'
import './Home.css'

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
          <p>Do your group members act like apes?<br/>Do they make you wanna die?<br/>Do they make you question the future of humanity</p>
          <img src={Students}></img>
        </div>
        

        
      </div>
      
    );
  }
}