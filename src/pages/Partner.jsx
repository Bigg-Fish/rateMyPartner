import React, { Component } from 'react';
import Header from "../components/Header"
import defaultImg from "../defaultImg.jpg"
import ReviewBox from '../components/Review'
import "./Partner.css"

class Partner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            partner: {
                "userID": "ObjectId(5dc6e88828df2e0f809a5a49)",
                "fname": "Kyle",
                "lname": "DePace",
                "email": "rubber.duckie@marist.edu",
                "password": "bubblebath",
                "ratings": [
                    {
                        "rater": "User1",
                        "rating": 3,
                        "comment": "Awful person. he could die and we'd be more productive."
                    },
                    {
                        "rater": "User2",
                        "rating": 7,
                        "comment": "Pretty decent at best. Not bad tho."
                    },
                    {
                        "rater": "User3",
                        "rating": 10,
                        "comment": "Literally carried me through the midterm."
                    },
                    {
                        "rater": "rubber",
                        "rating": 8,
                        "comment": "Good guy. Fun dude."
                    }
                ]
            }
        }
    }

    componentDidMount() {
        fetch('/api/profiles/')
            .then(res => res.text())
            .then(res => this.setState({ partner: res }));
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
        avg = Math.round(avg * 2) / 2;
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
                <ReviewBox user={`${this.state.partner.fname} ${this.state.partner.lname}`} />
                <div className="separator"></div>
                <div className="ratingsHolder">
                    {
                        this.state.partner.ratings.map((rating, i) =>
                            <div className="rating" key={i}>
                                <h2>{rating.rater}  {this.getStars(rating.rating)}</h2>
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