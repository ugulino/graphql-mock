'use strict';

const books = (data) => { 
    const response = data.books.map(item => {
        const book = {};
        book['title'] = item.title.toUpperCase();
        book['author'] = item.author;

        return book;
    });

    return response;
};

module.exports = {
    books,
};