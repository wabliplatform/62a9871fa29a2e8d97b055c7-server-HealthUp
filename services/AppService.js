/* eslint-disable no-unused-vars */
const Service = require('./Service');
const { App } = require('../models/App');

/**
* Creates the data
*
* app App data to be created
* returns app
* */
const createapp = ({ app }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await new App(app).save();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Delete the element
*
* appId String the Id parameter
* no response value expected for this operation
* */
const deleteapp = ({ appId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await App.findOneAndDelete({ _id:appId }).exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get all the data
*
* returns Object
* */
const getAllapp = () => new Promise(
  async (resolve, reject) => {
    try {
      let query = {}
      query = await App.find().exec();
      resolve(Service.successResponse(query));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get the element
*
* appId String the Id parameter
* returns app
* */
const getapp = ({ appId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await App.findById(appId)
      .exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Updates the element
*
* appId String the Id parameter
* app App data to be updated (optional)
* returns app
* */
const updateapp = ({ appId, app }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await App.findOneAndUpdate({ _id:appId },app).exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  createapp,
  deleteapp,
  getAllapp,
  getapp,
  updateapp,
};
