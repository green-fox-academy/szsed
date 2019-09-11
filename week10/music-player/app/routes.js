const app = require('./app').app;
const conn = require('./app').conn;

app.get('/', (req, res) => {
  res.sendFile('/views/index.html', { root: __dirname + '/..' });
});

app.get('/playlists', (req, res) => {
  conn.query('select * from playlists;', function (err, playlists) {
    if (err) {
      console.log(err.message);
      res.status(500);
      res.send({ error: 'SQL error' });
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
        res.status(500);
        res.send({ error: 'SQL error' });
      } else {
        console.log('Data added to DB.');
        res.send({ id: rows.insertId });
      }
    });
  } else {
    res.status(400);
    res.send({ error: 'Missing playlist name' });
  }
});

app.get('/playlists/:playlist_id', (req, res) => {
  if (!isNaN(Number.parseInt(req.params.id, 10))) {
    conn.query('select * from playlists where id = ?;', req.params.playlist_id, function (err, playlist) {
      if (err) {
        console.log(err.message);
        res.status(500);
        res.send({ error: 'SQL error' });

      } else {
        console.log('Data received from DB.');
        if (playlist.length === 1) {
          res.send(playlist);
        } else {
          res.status(400);
          res.send({ error: 'Invalid playlist id' });
        }
      }
    });
  } else {
    res.status(400);
    res.send({ error: 'Invalid playlist id' });
  }
});

app.delete('/playlists/:playlist_id', (req, res) => {
  if (!isNaN(Number.parseInt(req.params.playlist_id, 10))) {
    conn.query('delete from playlists where id = ? and sys = 0;', req.params.playlist_id, function (err, rows) {
      if (err) {
        console.log(err.message);
        res.sendStatus(500);
      } else {
        console.log('Data deleted from DB.');
        res.send({ success: 'deleted' });
      }
    });
  } else {
    res.status(400);
    res.send({ error: 'Invalid playlist id' });
  }
});

app.get('/playlist-tracks', (req, res) => {
  conn.query('select * from tracks;', function (err, tracks) {
    if (err) {
      console.log(err.message);
      res.status(500);
      res.send({ error: 'SQL error' });
    } else {
      console.log('Data received from DB.');
      res.send(tracks);
    }
  });
});

app.get('/playlist-tracks/:playlist_id', (req, res) => {
  if (!isNaN(Number.parseInt(req.params.playlist_id, 10))) {
    conn.query('select * from tracks where playlist_id = ?;', req.params.playlist_id, function (err, tracks) {
      if (err) {
        console.log(err.message);
        res.status(500);
        res.send({ error: 'SQL error' });
      } else {
        console.log('Data received from DB.');
        res.send(tracks);
      }
    });
  } else {
    res.status(400);
    res.send({ error: 'Invalid playlist id' });
  }
});

app.post('/playlist-tracks/:playlist_id/:track_id', (req, res) => {
  if (!isNaN(Number.parseInt(req.params.playlist_id, 10)) && !isNaN(Number.parseInt(req.params.track_id, 10))) {
    conn.query('update tracks set playlist_id = ? where id = ?;', [req.params.playlist_id, req.params.track_id], function (err, tracks) {
      if (err) {
        console.log(err.message);
        res.status(500);
        res.send({ error: 'SQL error' });
      } else {
        console.log('DB updated.');
        res.send({ success: 'updated' });
      }
    });
  } else {
    res.status(400);
    res.send({ error: 'Invalid playlist or track id' });
  }
});

app.delete('/playlist-tracks/:playlist_id/:track_id', (req, res) => {
  if (!isNaN(Number.parseInt(req.params.playlist_id, 10)) && !isNaN(Number.parseInt(req.params.track_id, 10))) {
    conn.query('update tracks set playlist_id = null where id = ?;', req.params.track_id, function (err, rows) {
      if (err) {
        console.log(err.message);
        res.status(500);
        res.send({ error: 'SQL error' });
      } else {
        console.log('Data deleted from DB.');
        res.send({ success: 'deleted' });
      }
    });
  } else {
    res.send({ error: 'Invalid playlist id' });
  }
});

app.post('/playlist-tracks', (req, res) => {
  if (req.body.title && req.body.artist && !isNaN(Number.parseInt(req.body.duration, 10)) && req.body.url) {
    conn.query('insert into tracks (title, artist, duration, url) values (?, ?, ?, ?);',
      [req.body.title, req.body.artist, req.body.duration, req.body.url], function (err, rows) {
        if (err) {
          console.log(err.message);
          res.status(500);
          res.send({ error: 'SQL error' });
        } else {
          console.log('Data added to DB.');
          res.send({ id: rows.insertId });
        }
      });
  } else {
    res.status(400);
    res.send({ error: 'Missing track data' });
  }
});


app.delete('/playlist-tracks/:track_id', (req, res) => {
  if (!isNaN(Number.parseInt(req.params.track_id, 10))) {
    conn.query('delete from tracks where id = ?;', req.params.track_id, function (err, rows) {
      if (err) {
        console.log(err.message);
        res.status(500);
        res.send({ error: 'SQL error' });
      } else {
        console.log('Data deleted from DB.');
        res.send({ success: 'deleted' });
      }
    });
  } else {
    res.status(400);
    res.send({ error: 'Invalid track id' });
  }
});

module.exports = app;
