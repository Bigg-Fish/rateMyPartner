const mongoose = require('mongoose');

const ratingSchema = new mongoose.Schema({
    rater: {type: String, required: true},
    rating: {type: Number, required: true},
    comment: {type: String}
  });

  const RatingSchema = mongoose.model("Rating",ratingSchema);
  module.exports = RatingSchema;