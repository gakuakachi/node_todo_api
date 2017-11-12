// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  } 
  console.log('Connected to MongoDB server');

  //deleteMany
  // db.collection('Todos').deleteMany({text: 'eat lunch'}).then(result => {
  //   console.log(result);
  // });
  //deleteOne
  // db.collection('Todos').deleteOne({text: 'eat lunch'}).then(result => {
  //   console.log(result);
  // })
  //findOneANdDelete
  db.collection('Users').findOneAndDelete({
    _id: new ObjectID('5a0807f72c3f68d418ea95a5')
  }).then( result => {
    console.log(JSON.stringify(result));

  });

  // db.collection('Users').deleteMany({name: 'Sunday'}).then(result => {
  //   console.log(result);
  // });
  // db.close();
});