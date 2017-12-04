const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then(result => {
//   console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

Todo.findOneAndRemove({_id: '5a256e4eca28d0d3fd0a64e7'}).then(todo => {
  console.log(todo);
})

Todo.findByIdAndRemove('5a256e4eca28d0d3fd0a64e7').then(todo => {
  console.log(todo)
})