'use strict';

const data = require('../data');
const bookResolvers = require('./bookResolver');
const adapters = require('./../adapter');

module.exports = {
    Query: {
        books: () => bookResolvers(adapters),
    }
}