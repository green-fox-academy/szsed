'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('./index').app;
const server = require('./index').server;
const ship = require('./index').ship;

server.close();

test('/rocket endpoint', t => {

    request(app)
        .get(`/rocket`)
        .end((err, res) => {
            if (err) throw err;
            t.equals(res.status, 200);
            t.same(res.body, ship);
        });

    t.end();
});

test('/rocket/fill endpoint', t => {
    const testCaliber = '.25';
    const testAmount = '1250';

    request(app)
        .get(`/rocket/fill?caliber=${testCaliber}&amount=${testAmount}`)
        .end((err, res) => {
            if (err) throw err;
            t.equals(res.status, 200);
            t.same(res.body, {
                received: testCaliber,
                amount: testAmount,
                shipstatus: '10%',
                ready: false
            });
        });

    request(app)
        .get(`/rocket/fill`)
        .end((err, res) => {
            if (err) throw err;
            t.equals(res.status, 400);
            t.same(res.body, {
                error: 'Hello I am an errormessage'
            });
        });

    t.end();
});
