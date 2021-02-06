const { Schema, model } = require('mongoose');

const petSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    type: {
      type: String,
      required: true,
      trim: true
    },
    age: {
      type: Number,
      trim: true
    },
    gender: {
      type: String,
      trim: true,
      required: true
    },
    fixed: {
      type: String,
      required: true
    },
    location: {
      type: Number,
      required: true,
    },
    petemail: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true,
    }
  },
);

const Pet = model('Pet', petSchema);

module.exports = Pet;