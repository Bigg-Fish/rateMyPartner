import React, { Component } from 'react';
import "./Review.css"

class ReviewBox extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="reviewContainer">
                <h2>Were you {this.props.user}'s partner? Leave a review</h2>
                <form action="" onSubmit="">
                    <div className="review">Review:<input type="text" name="Leave your review here." id="" /></div>
                    <div className="rating">Rating:<input type="number" name="Enter a rating." min="1" max="10" /></div>
                    <input className="button" type="submit" value="Leave review" />
                </form>
            </div>
        );
    }
}

export default ReviewBox;
