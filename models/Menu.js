const mongoose = require('mongoose');



const menuItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  taste: {
    type: String,
    enum: ['sweet', 'spicy', 'sour'],
    required: true,
  },
  is_drinK: {
    type: Boolean,
    default: false
  },
  ingredients: {
    type: [String],
    // required: true,
    default: []
  },
  num_sales: {
    type: Number,
    required: true,
    default: 0
  }
});

const MenuItem = mongoose.model('MenuItem', menuItemSchema);
// console.log(Person);

module.exports = MenuItem;