var MongoClient = require('mongodb').MongoClient;
//Create a database named "mydb":
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var hiveDB = db.db("mydb");

    var newUser = {
        name: 'Christian Bondoc',
        bcit: 'A00782025',
        bEmail: 'cbondoc4@bcit.ca',
        program: 'D3 Digital Design Development'
    }

    hiveDB.collection("users").insertOne(newUser, (err, res) => {
        console.log("New User Added");   
        
        // query for the newUser.
        var query = hiveDB.collection('users').find({ name: "Christian Bondoc" });
        console.log("Users listed below:");
        console.log(query);
        
        db.close();
    });

});

/* Main Docs Example:

Collection name: "users";
nUser = [{
    name: 'Christian Bondoc',
    bcitID: 'A00782025', <-create restrictions only for A00, maximum 9 chars
    bEmail: 'cbondoc4@bcit.ca' <-- create restrcitions for only @bcit.ca
    program: 'Digital Design Development' <-- Get from dropdown
}];

*/