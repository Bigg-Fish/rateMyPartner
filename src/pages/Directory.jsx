import React, { Component } from 'react';
import Header from "../components/Header"

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            partners: [
                {
                    id: 100001,
                    name: "Kyle DePace"
                },
                {
                    id: 100002,
                    name: "Jacob Butchko"
                },
                {
                    id: 100003,
                    name: "Luke Jacobs"
                },
                {
                    id: 100004,
                    name: "Kyle Ress"
                },
                {
                    id: 100005,
                    name: "Kyle Liere"
                }
            ]
        }
    }
    render() {
        return (
            <div>
                <Header />
                <h1>Viewing All {this.state.partners.length} Partners</h1>
                <div className="partnerHolder">
                    {
                        this.state.partners.map((partner, i) =>
                            <div className="partner" key={i}>
                                <h2>{partner.name}</h2>
                                <div className="separator"></div>
                            </div>
                        )
                    }
                </div>
            </div>
        );
    }
}

export default Directory;