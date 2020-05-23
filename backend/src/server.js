const app = require('./App')

app.use ('/', require('./routes'));
app.listen (3333);
