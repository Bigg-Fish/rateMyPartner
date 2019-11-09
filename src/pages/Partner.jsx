import React, { Component } from 'react';
import Header from "../components/Header"


class Partner extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        fetch('/api/partners/')
            .then(res => res.text())
            .then(res => this.setState({ partners: res }));
    }

    getStars(number) {
        return (
            <div>
                {
                    Array.apply(null, { length: Math.floor(number) }).map((e, i) => (
                        <span key={i}>⭐</span>
                    ))
                }
            </div>
        )
    }

    render() {
        return (
            <div>
                <Header />
                {this.getStars(7)}
            </div>
        );
    }
}

export default Partner;