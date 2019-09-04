'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('./index').app;
const server = require('./index').server;

server.close();

test('yondu endpoint', t => {
    const testDistance = Math.floor(Math.random() * 90 + 11);
    const testTime = Math.floor(Math.random() * 10 + 1);

    request(app)
        .get(`/yondu?distance=${testDistance}&time=${testTime}`)
        .end((err, res) => {
            if (err) throw err;
            t.equals(res.status, 200);
            t.same(res.body, {
                distance: String(testDistance),
                time: String(testTime),
                speed: testDistance / testTime
            });
        });

    request(app)
        .get(`/yondu?distance=${testDistance}&time=0`)
        .end((err, res) => {
            if (err) throw err;
            t.equals(res.status, 200);
            t.same(res.body, {
                distance: String(testDistance),
                time: '0',
                speed: null
            });
        });

    request(app)
        .get('/yondu')
        .end((err, res) => {
            if (err) throw err;
            t.equals(res.status, 400);
            t.same(res.body, {
                error: 'Invalid parameters'
            });
        });

    t.end();
});
