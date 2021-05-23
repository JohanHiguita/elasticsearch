const util = require('util')
const Elastic = require("./modules/Elastic")

const print = (data) => {
    console.log(util.inspect(data, false, null, true /* enable colors */));
}

Elastic
    .getMapping("movies")
    .then(resp => print(resp.data));




