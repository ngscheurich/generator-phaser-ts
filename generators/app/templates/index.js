const express = require('express');
const path = require('path');

const app = express();

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.render('index'));

app.listen(app.get('port'), () => {
  console.log('\nExpress server up and running at http://localhost:%s.\n', app.get('port'));
});
