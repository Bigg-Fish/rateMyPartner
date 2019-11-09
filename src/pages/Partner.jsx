import React, { Component } from 'react';
import Header from "../components/Header"
import defaultImg from "../defaultImg.jpg"
import "./Partner.css"

class Partner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            partner: {
                "userID": "ObjectId(5dc6e88828df2e0f809a5a49)",
                "fname": "dibs",
                "lname": "dibsy",
                "email": "rubber.duckie@marist.edu",
                "password": "bubblebath",
                "ratings": [
                    {
                        "rater": "shark",
                        "rating": 10,
                        "comment": "wow"
                    },
                    {
                        "rater": "rubber",
                        "rating": 7,
                        "comment": "okay "
                    }
                ]
            }
        }
    }

    componentDidMount() {
        // fetch('/api/partner/')
        //     .then(res => res.text())
        //     .then(res => this.setState({ partner: res }));
    }

    getStars(numStars) {
        return (
            <span>
                {
                    Array.apply(null, { length: numStars }).map((e, i) => (
                        <span key={i}>⭐</span>
                    ))

                }{numStars}
            </span>
        )
    }

    getRating(partner) {
        let ratings = partner.ratings;
        let sum = 0;
        for (let rating of ratings) {
            sum += rating.rating;
        }
        let avg = sum / ratings.length;
        return (
            <div className="ratingBar">
                {this.getStars(avg)}
            </div>
        )
    }

    render() {
        return (
            <div>
                <Header />
                <span className="profile">
                    <img src={defaultImg} alt="Profile Pic" className="profilePic" width="150px"></img>
                    <div>
                        <h3>{this.state.partner.fname} {this.state.partner.lname}'s Profile</h3>
                        {this.getRating(this.state.partner)}
                    </div>
                    <div className="separator"></div>
                </span>
                <div className="ratingsHolder">
                    {
                        this.state.partner.ratings.map((rating, i) =>
                            <div className="rating" key={i}>
                                <h1>{rating.rater}{this.getStars(rating.rating)}</h1>
                                <p>{rating.comment}</p>
                                <div className="separator"></div>
                            </div>
                        )
                    }
                </div>
            </div>
        );
    }
}

export default Partner;