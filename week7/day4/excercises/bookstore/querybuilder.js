'use strict';

const queryBuilder = (queryParams) => {
    let queryString = `select book_name, aut_name, cate_descrip, pub_name, book_price 
                        from book_mast 
                        join publisher on book_mast.pub_id = publisher.pub_id 
                        join author on book_mast.aut_id = author.aut_id 
                        join category on book_mast.cate_id = category.cate_id`
    let queryKeys = Object.keys(queryParams);
    let queryValues = Object.values(queryParams);

    if (queryParams) {
        for (let i = 0; i < queryValues.length; i++) {
            if (i === 0) {
                queryString += ' where ';
            } else {
                queryString += ' and ';
            }
            switch (queryKeys[i]) {
                case 'category':
                    queryString += `cate_descrip = "${queryValues[i]}"`;
                    break;
                case 'publisher':
                    queryString += `pub_name = "${queryValues[i]}"`;
                    break;
                case 'plt':
                    queryString += `book_price < ${queryValues[i]}`;
                    break;
                case 'pgt':
                    queryString += `book_price > ${queryValues[i]}`;
                    break;
            }
        }
    }
    return queryString += ';';
}

module.exports = queryBuilder;