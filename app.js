const server    = require('./config/server');
const app       = require('./config/db')(server);
const routes    = require('./app/web/routes')(app);

app.listen(3000);