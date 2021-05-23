const axios = require("axios");
const baseURL = "http://127.0.0.1:9200";

class Elastic {
  static getMapping = (index) => {
    try {
      const response = axios.get(`${baseURL}/movies/_mapping`);
      return response;
    } catch (error) {
      console.error(error);
    }
  };

  //insert document given it the id
  static insertDocument = (id, document) => {
    try {
      const response = axios.post(`${baseURL}/movies/_doc/${id}`, document);
      return response;
    } catch (error) {
      console.error(error);
    }
  };
}

module.exports = Elastic;
