import React, { Component } from 'react';
import Header from "../components/Header"
import { FontAwesomeIcon } from '@fontawesome/react-fontawesome'


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
        stars = []
    }

    render() {
        return (
            <div>
                <Header />
                this.state.partners.map((partner) => {

                }
            </div>
        );
    }
}

export default Partner;