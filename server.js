const express = require('express');
const handlebars = require('express-handlebars').create({defaultLayout: 'main'});

const port = process.env.PORT || 8080
const app = express();

//App Configuration
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.use(express.static(__dirname + '/static/'))
app.use(require('body-parser').json())
app.use(require('body-parser').urlencoded({extended: true}))
app.use(require('cookie-parser')('8yncr8982he8uhw87q28mfrh98dhqu'))


//Pages
app.get('/', (req, res) => {
    res.render('home', {title: 'Login', style: 'login.css'});
})

app.post('/', (req, res) => {
    if(req.body.name == 'Param' && req.body.pwd == 'param'){
        try{
            if(req.signedCookies.Login != 'True'){
                res.cookie('Login', 'True', {signed: true})
                res.send('Defined Cookie Assigned')
            }else{
                res.send('Cookie Already Assigned')
            }
        }catch(TypeError){
            res.cookie('Login', 'True', {signed: true})
            res.send('Cookie Assigned')
        }
    }else{
        res.send('Error')
    }
})

app.listen(port, () => {
    console.log('Server Ready')
})
