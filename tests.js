const util = require('util')
const Elastic = require("./modules/Elastic")

const print = (data) => {
    console.log(util.inspect(data, false, null, true /* enable colors */));
}


/************************ tests *********************/

Elastic
    .deleteById("109487", "movies")
    .then(resp => print(resp.data));
 
 

/*const data = {
    "doc":{
        "title": "Movie Johan"
    }
}

Elastic
    .updatePartial("109487", "movies", data)
    .then(resp => print(resp.data)); */

/* Elastic
    .getDocumentById("109487", "movies")
    .then(resp => print(resp.data)); */

/*const doc = {
    "genre" : ["IMAX", "Action"],
    "title": "Johan Movie edited total",
    "year": 1992
}

Elastic
    .updateTotal("109487",doc)
    .then(resp => print(resp.data)); */


/* const data = `{ "create" : { "_index" : "movies", "_id" : "001" } }\n
{ "id": "001", "title" : "Star Trek Beyond", "year":2016 , "genre":["Action", "Adventure", "Sci-Fi"] }\n
{ "create" : { "_index" : "movies", "_id" : "002" } }\n
{ "id": "002", "title" : "Star Wars: Episode VII - The Force Awakens", "year":2015 , "genre":["Action", "Adventure", "Fantasy", "Sci-Fi", "IMAX"] }\n
{ "create" : { "_index" : "movies", "_id" : "003" } }\n
{ "id": "003", "title" : "Interstellar", "year":2014 , "genre":["Sci-Fi", "IMAX"] }\n
{ "create" : { "_index" : "movies", "_id" : "004" } }\n
{ "id": "004", "title" : "Dark Knight, The", "year":2008 , "genre":["Action", "Crime", "Drama", "IMAX"] }\n
{ "create" : { "_index" : "movies", "_id" : "005" } }\n
{ "id": "005", "title" : "Plan 9 from Outer Space", "year":1959 , "genre":["Horror", "Sci-Fi"] }\n`;

Elastic
    .insertBulk(data)
    .then(resp => print(resp.data)); */

/* Elastic
    .getAllDocuments("movies")
    .then(resp => print(resp.data)); */ 

/* const doc = {
    "genre" : ["IMAX", "Action"],
    "title": "Johan Movie",
    "year": 1992
}
Elastic
    .insertDocument("100", doc)
    .then(resp => print(resp.data)); */


/* Elastic
    .getMapping("movies")
    .then(resp => print(resp.data)); */




