var express = require("express");

var adminRouter = express.Router();

var mongodb = require("mongodb").MongoClient;

var books = [
    {
        title: "Harry Potter",
        genre: "Fiction",
        author: "J.K. Rowling",
        read: false
    },
    {
        title: "Random Book",
        genre: "Fiction",
        author: "Denzel Adams",
        read: false
    },
    {
        title: "Another Random Book",
        genre: "Fiction",
        author: "Denzel Adams",
        read: false
    },
    {
        title: "Another Even More Random Book",
        genre: "Fiction",
        author: "Denzel Adams",
        read: false
    },

];



var router = function (nav) {

    adminRouter.route('/addbooks')
        .get(function (req, res) {
            var url = "mongodb://localhost:27017/libraryApp";

            mongodb.connect(url, function (err, db) {
                var collection = db.collection("books");
                collection.insertMany(books,
                    function (err, results) {
                        res.send(results);

                    });
                db.close();
            });
        });

    return adminRouter
}

module.exports = router;