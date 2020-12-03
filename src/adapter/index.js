'use strict';

const bookAdapter = require('./bookAdapter');

(data) => ({
    bookAdapter:() => bookAdapter(data),
});

module.exports = {
    bookAdapter,
};