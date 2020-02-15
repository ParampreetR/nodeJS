const express = require('express');
const handlebars = require('express-handlebars').create({defaultLayout: 'main'});

const port = process.env.PORT || 8080
const app = express();

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');


app.get('/', (req, res) => {
    res.send('Hello');
})


app.listen(port, () => {
    console.log('Server Ready')
})