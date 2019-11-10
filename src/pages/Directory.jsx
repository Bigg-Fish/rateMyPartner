import React, { Component } from 'react';
import Header from "../components/Header"

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            partners: [
                // {
                //     id: 100001,
                //     name: "Kyle DePace"
                // },
                // {
                //     id: 100002,
                //     name: "Jacob Butchko"
                // },
                // {
                //     id: 100003,
                //     name: "Luke Jacobs"
                // },
                // {
                //     id: 100004,
                //     name: "Kyle Ress"
                // },
                // {
                //     id: 100005,
                //     name: "Kyle Liere"
                // }
            ]
        }
    }

    componentDidMount() {
        fetch('/api/directory')
            .then(res => res.json())
            .then(res => this.setState({ partners: res }))
            .catch(err => console.log("Error: User Not Found"))

    }


    render() {
        return (
            <div>
                <Header />
                <h1>Viewing All {this.state.partners.length} Partners</h1>
                <div className="partnerHolder">
                    {
                        this.state.partners.map((partner, i) =>
                            <div className="partner" key={partner.index}>
                                <a href={"/partner/" + partner.index}>
                                    <h2>{partner.name}</h2>
                                    <div className="separator"></div>
                                </a>
                            </div>
                        )
                    }
                </div>
            </div>
        );
    }
}

export default Directory;