'use strict';

const app = require('./app/app');
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App is listening on port# ${PORT}`);
});