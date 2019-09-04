'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('./index').app;
const server = require('./index').server;
const mockCalTable = { ...require('./index').calTable };

server.close();

test('/drax endpoint GET', t => {

    request(app)
        .get('/drax')
        .end((err, res) => {
            if (err) throw err;
            t.equals(res.status, 200);
            t.same(res.body, mockCalTable);
        });

    t.end();
});

test('/drax endpoint POST', t => {
    const testRecord = {
        name: 'testtest',
        amount: 12345,
        calorie: 98765
    }

    request(app)
        .post('/drax')
        .send(testRecord)
        .end((err, res) => {
            if (err) throw err;
            t.equals(res.status, 200);
            t.same(res.body, testRecord);
        });

    request(app)
        .post('/drax')
        .send({})
        .end((err, res) => {
            if (err) throw err;
            t.equals(res.status, 400);
            t.same(res.body, {
                error: 'Invalid food record input'
            });
        });

    t.end();
});
