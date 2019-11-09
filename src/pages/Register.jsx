import React, { Component } from 'react';
import Header from "../components/Header"
import './Login.css'

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        };
    }

    handleInputChange = (event) => {
        const { value, name } = event.target;
        this.setState({
            [name]: value
        });
    }

    onSubmit = (event) => {
        event.preventDefault();
        fetch('/api/register', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                if (res.status === 200) {
                    this.props.history.push('/');
                } else {
                    const error = new Error(res.error);
                    throw error;
                }
            })
            .catch(err => {
                console.error(err);
                alert('Error registering please try again. Email may already exist');
            });
    }

    render() {
        return (
            <div>
                <Header />
                <div className="loginForm">
                    <h1>Already Registered? <a href="/login">Login</a>.</h1>
                    <form onSubmit={this.onSubmit}>
                        <h1>Register</h1>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter email"
                            value={this.state.email}
                            onChange={this.handleInputChange}
                            required
                        />
                        <br></br>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter password"
                            value={this.state.password}
                            onChange={this.handleInputChange}
                            required
                        />
                        <br></br>
                        <input type="submit" value="Register" />
                    </form>
                </div>
            </div>
        );
    }
}