// show dbs 
// use harryKart
// show collections

db.items.find({price: 22000})

// Deleting items from the Mongo Database
db.items.deleteOne({price: 22000})
// deleteOne will delete the matching document entry and will delete the first entry in case of multi document match
db.items.deleteMany({price: 129000})


// delete all items which we have applied in parameters
db.items.deleteMany({price: 129000})

