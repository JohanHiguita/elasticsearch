const util = require('util')
const Elastic = require("./modules/Elastic")

const print = (data) => {
    console.log(util.inspect(data, false, null, true /* enable colors */));
}


/************************ tests *********************/

Elastic
    .getAllDocuments("index")
    .then(resp => print(resp.data)); 

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




