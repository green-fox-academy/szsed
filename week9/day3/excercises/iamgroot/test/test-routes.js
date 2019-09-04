'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('../routes');

test('groot endpoint', (t) => {
    const theMessage = 'somemessage';

    request(app)
        .get(`/groot?message=${theMessage}`)
        .end((err, res) => {
            if (err) throw err;
            t.equals(res.status, 200);
            t.same(res.body, {
                received: theMessage,
                translated: 'I am Groot!'
            });
        });

    request(app)
        .get(`/groot`)
        .end((err, res) => {
            if (err) throw err;
            t.equals(res.status, 400);
            t.same(res.body, {
                error: 'I am Groot!'
            });
        });

    request(app)
        .get(`/groot?message=`)
        .end((err, res) => {
            if (err) throw err;
            t.equals(res.status, 400);
            t.same(res.body, {
                error: 'I am Groot!'
            });
            t.end();
        });
});