const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json({ msg: 'Greetings from docker' });
});

app.listen(3000, () => console.log('🚀 3000'));
