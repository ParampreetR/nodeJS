const express = require('express');
const handlebars = require('express-handlebars').create({defaultLayout: 'main'});

const port = process.env.PORT || 8080
const app = express();

//App Configuration
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');


//Pages
app.get('/', (req, res) => {
    res.render('home', {title: 'Home'});
})


app.listen(port, () => {
    console.log('Server Ready')
})
