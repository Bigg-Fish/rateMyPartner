import React, { Component } from 'react';
import "./Review.css"

class ReviewBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            review: '',
            rating: 5
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
        fetch('/api/review', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                if (res.status === 200) {
                    alert('Review submitted successfully');
                    this.setState({
                        review: '',
                        rating: 5
                    });
                } else {
                    const error = new Error(res.error);
                    throw error;
                }
            })
            .catch(err => {
                console.error(err);
                alert('Error submitting review, please try again.');
            });
    }

    render() {
        return (
            <div className="reviewContainer">
                <h2>Were you {this.props.user}'s partner? Leave a review</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="review">Review:
                    <input
                            type="text"
                            name="review"
                            id=""
                            onChange={this.handleInputChange}
                            value={this.state.review}
                        />
                    </div>
                    <div className="rating">Rating:
                        <input type="range"
                            list="tickmarks"
                            name="rating"
                            min="1"
                            max="10"
                            onChange={this.handleInputChange}
                            value={this.state.rating}
                        />
                        {this.state.rating}
                    </div>
                    <datalist id="tickmarks">
                        <option value="1" label="1"></option>
                        <option value="2"></option>
                        <option value="3"></option>
                        <option value="4"></option>
                        <option value="5" label="5"></option>
                        <option value="6"></option>
                        <option value="7"></option>
                        <option value="8"></option>
                        <option value="9"></option>
                        <option value="10" label="10"></option>
                    </datalist>
                    <input className="button" type="submit" value="Leave review" />
                </form>
            </div>
        );
    }
}

export default ReviewBox;
