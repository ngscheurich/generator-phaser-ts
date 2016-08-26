const express = require('express');
const path = require('path');

const app = express();
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'assets')));
app.use(express.static(path.join(__dirname, 'assets', 'images')));
app.use(express.static(path.join(__dirname, 'assets', 'styles')));
app.get('/', (req, res) => { res.render('index'); });
app.listen(app.get('port'), () => {
  console.log('Express server listening on port %s', app.get('port'));
});

