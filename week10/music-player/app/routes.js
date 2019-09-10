const app = require('./app').app;
const conn = require('./app').conn;

app.get('/', (req, res) => {
  res.sendFile('/views/index.html', { root: __dirname + '/..' });
});

app.get('/playlists', (req, res) => {
  conn.query('select * from playlists;', function (err, playlists) {
    if (err) {
      console.log(err.message);
      res.sendStatus(500);
    } else {
      console.log('Data received from DB.');
      res.send(playlists);
    }
  });
});

app.post('/playlists', (req, res) => {
  if (req.body.name) {
    conn.query('insert into playlists (name) values (?);', req.body.name, function (err, rows) {
      if (err) {
        console.log(err.message);
        res.status(400);
        res.send(err);
      } else {
        console.log('Data added to DB.');
        console.log(rows);
      }
    });
  } else {
    res.send({ error: 'Missing playlist name' });
  }
});

app.get('/playlists/:id', (req, res) => {
  conn.query('select * from playlists where id = ?;', req.params.id, function (err, playlist) {
    if (err) {
      console.log(err.message);
      res.sendStatus(500);
    } else {
      console.log('Data received from DB.');
      if (playlist.length === 1) {
        res.send(playlist);
      } else {
        res.sendStatus(400);
      }
    }
  });
});

app.delete('/playlists/:id', (req, res) => {
  if (!isNaN(Number.parseInt(req.params.id, 10))) {
    conn.query('delete from playlists where id = ? and sys = 0;', req.params.id, function (err, playlist) {
      if (err) {
        console.log(err.message);
        res.sendStatus(500);
      } else {
        console.log('Data deleted from DB.');
        res.send('ok');
      }
    });
  } else {
    res.send({ error: 'Invalid playlist id' });
  }
});

app.get('/playlist-tracks', (req, res) => {
  conn.query('select * from tracks;', function (err, tracks) {
    if (err) {
      console.log(err.message);
      res.sendStatus(500);
    } else {
      console.log('Data received from DB.');
      res.send(tracks);
    }
  });
});

app.get('/playlist-tracks/:playlist_id', (req, res) => {
  if (!isNaN(req.params.playlist_id)) {
    conn.query('select * from tracks;', function (err, tracks) {
      if (err) {
        console.log(err.message);
        res.sendStatus(500);
      } else {
        console.log('Data received from DB.');
        res.send(tracks);
      }
    });
  } else {
    res.send({ error: 'Invalid playlist id' });
  }
});

app.delete('/playlist-tracks/:playlist_id/:track_id', (req, res) => {
  if (!isNaN(req.params.playlist_id) && !isNaN(req.params.track_id)) {
    conn.query('update tracks set playlist_id = ? where id = ?;', [req.params.playlist_id, req.params.track_id], function (err, tracks) {
      if (err) {
        console.log(err.message);
        res.status(500);
      } else {
        console.log('Data received from DB.');
        res.send(tracks);
      }
    });
  } else {
    res.send({ error: 'Invalid playlist id' });
  }
});

app.delete('/playlist-tracks/:playlist_id/:track_id', (req, res) => {
  if (!isNaN(req.params.playlist_id) && !isNaN(req.params.track_id)) {
    conn.query('update tracks set playlist_id = null where id = ?;', req.params.track_id, function (err, tracks) {
      if (err) {
        console.log(err.message);
        res.status(500);
      } else {
        console.log('Data received from DB.');
        res.send(tracks);
      }
    });
  } else {
    res.send({ error: 'Invalid playlist id' });
  }
});

module.exports = app;
