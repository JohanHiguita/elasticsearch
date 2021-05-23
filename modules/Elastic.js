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

  // Get all documents
  static getAllDocuments = (index) => {
    try {
      const response = axios.get(`${baseURL}/${index}/_search?pretty`);
      //console.log("here!!!!!!!!!!!!!!!!!!!");
      return response;
    } catch (error) {
      console.error(error);
      console.log("Error!!!");
    }
  };

  // json Bulk import (multiinsert)
  static insertBulk = (data) => {
    try {
      const response = axios.put(`${baseURL}/_bulk?pretty`, data);
      return response;
    } catch (error) {
      console.error(error);
    }
  };

  //Update all document fields (specify every existing field)
  static updateTotal = (id, index, data) => {
    try {
      const response = axios.put(`${baseURL}/${index}/_doc/${id}?pretty`, data);
      return response;
    } catch (error) {
      console.error(error);
    }
  };

  static updatePartial = (id, index, data) => {
    try {
      const response = axios.post(`${baseURL}/${index}/_doc/${id}/_update`, data);
      return response;
    } catch (error) {
      console.error(error);
    }
  };

  //Update all document fields (specify every existing field)
  static getDocumentById = (id, index) => {
    try {
      const response = axios.get(`${baseURL}/${index}/_doc/${id}?pretty`);
      return response;
    } catch (error) {
      console.error(error);
    }
  };

  //Update all document fields (specify every existing field)
  static deleteById = (id, index) => {
    try {
      const response = axios.delete(`${baseURL}/${index}/_doc/${id}`);
      return response;
    } catch (error) {
      console.error(error);
    }
  };
}

module.exports = Elastic;
