const axios = require('axios');
const BASE_URL = 'https://quickstore-pql2.onrender.com//api';
/**
 * QuickStore API Client
 * 
 * This module provides functions to interact with the QuickStore API, 
 * allowing for operations such as sending, retrieving, updating, and 
 * deleting data. It is intended for use with the QuickStore application.
 * 
 * Open Source License
 * -------------------
 * This code is released under the ISC License. You are free to use, modify, 
 * and distribute this code as long as you adhere to the terms of the license.
 * 
 * Fair Use and No Abuse
 * ---------------------
 * Please use this code responsibly and ethically. Do not engage in abusive 
 * practices, including but not limited to:
 * - Overloading the API with excessive requests
 * - Using the API for malicious activities
 * - Violating any applicable laws or regulations
 * 
 * For further inquiries, please contact the maintainers.
 */

const QuickStore = {
  send: async (key, data) => {
    try {
      const response = await axios.post(`${BASE_URL}/send`, { key, data });
      return response.data.key;
    } catch (error) {
      console.error('QuickStore Send Error:', error?.response?.data || error);
      throw error;
    }
  },

  get: async (key) => {
    try {
      const response = await axios.get(`${BASE_URL}/get/${key}`);
      return response.data;
    } catch (error) {
      console.error('QuickStore Get Error:', error?.response?.data || error);
      throw error;
    }
  },

  update: async (key, newData) => {
    try {
      const response = await axios.put(`${BASE_URL}/update/${key}`, { data: newData });
      return response.data;
    } catch (error) {
      console.error('QuickStore Update Error:', error?.response?.data || error);
      throw error;
    }
  },

  delete: async (key) => {
    try {
      const response = await axios.delete(`${BASE_URL}/delete/${key}`);
      return response.data;
    } catch (error) {
      console.error('QuickStore Delete Error:', error?.response?.data || error);
      throw error;
    }
  }
};

module.exports = QuickStore;
