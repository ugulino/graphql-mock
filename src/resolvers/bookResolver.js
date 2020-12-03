'use strict';

const data = require("../data");

const bookResolver = (adapters) => adapters.bookAdapter.books(data);

module.exports = bookResolver;

