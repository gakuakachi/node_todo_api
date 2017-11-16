const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5a09bcc60f121f4b1b052072';


// if(!ObjectID.isValid(id)) {
//   console.log('Id not valid');
// }
// Todo.find({
//   _id: id
// }).then(todo => {
//   console.log('Todos', todo);
// });

// Todo.findOne({
//   _id: id
// }).then(todo => {
//   console.log('Todos', todo);
// });

// Todo.findById(id).then(todo => {
//   if(!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todos', todo);
// }).catch(e => console.log(e.message));

if(!ObjectID.isValid(id)) {
  console.log('Id is not valid', id);
}

User.findById(id).then(user => {
  console.log('yay! here it is', user);
}, err => {
  console.log('omg no user who has the id', err.message);
});

