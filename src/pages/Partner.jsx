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
                "id": "100000",
                "name": "Loading",
                "email": "Loading",
                "ratings": []
            }
        }
    }

    componentDidMount() {
        const { id } = this.props.match.params
        fetch('/api/partner/' + id)
            .then(res => res.json())
            .then(res => this.setState({ partner: res }))
            .catch(err => console.log("Error: User Not Found"))
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
        if (avg == NaN) {
            return <div className="ratingBar"></div>
        }
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
                        <h3>{this.state.partner.name}'s Profile</h3>
                        {this.getRating(this.state.partner)}
                    </div>
                    <div className="separator"></div>
                </span>
                <ReviewBox user={this.state.partner.name} />
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