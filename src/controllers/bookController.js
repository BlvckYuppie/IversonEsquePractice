var module = require('module');

var bookController = function(bookService, nav){
   var getIndex = function (req, res) {
       var url =
           'mongodb://localhost:27017/libraryApp';

       mongodb.connect(url, function (err, db) {
           var collection = db.collection('books');

           collection.find({}).toArray(
               function (err, results) {
                   res.render('booksListView', {
                       title: 'Books',
                       nav: nav,
                       books: results
                   });
               }
           );
       });

   }
   }
   var getById = function(){

   }
   return {
      getIndex: getIndex,
      getById: getById
   }
}

module.exports = bookController;
