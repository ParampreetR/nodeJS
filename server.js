const express = require('express');
const handlebars = require('express-handlebars').create({defaultLayout: 'main'});

const port = process.env.PORT || 8080
const app = express();

//App Configuration
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.use(express.static(__dirname + '/static/'))

//Pages
app.get('/', (req, res) => {
    res.render('home', {title: 'Login', style: 'login.css'});
})


app.listen(port, () => {
    console.log('Server Ready')
})
