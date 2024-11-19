const mongoose = require('mongoose');
// Define Person Schema
const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number
  },
  work: {
    type: String,
    enum: ['chef', 'waiter', 'manager'],
    required: true,
  },
  mobile: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  address: {
    type: String,
    // required: true
  },
  salary: {
    type: Number,
    required: true
  },
  // username: {
  //   type: String,
  //   required: true
  // },
  // password: {
  //   type: String,
  //   required: true
  // }

})
// create Person model

const Person = mongoose.model('Person', personSchema);


// console.log(Person);

module.exports = Person;