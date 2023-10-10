const { configDotenv } = require('dotenv')
const express = require('express')
const hbs = require('hbs')
require('dotenv').config()

const app = express()
const port = process.env.POST

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', (err)=>{});

// servir contenido estático
app.use(express.static('public')) // para crear un archivo estático se utiliza la función express.static perteneciente al middlewar de express, por esta razón ya no es necesario utilizar: 

        //app.get('/', (req, res)=>{

        //  res.send('Hello world') no se ejecuta más debido a que el main path está en public

app.get('/', (req, res)=>{

    res.render('home', {
        nombre: 'Laura',
        titulo: 'Curso de node'
    });

});

app.get('/generic', (req, res)=>{
    res.render('generic', {
        nombre: 'Laura',
        titulo: 'Curso de node'
    })
})

app.get('/elements', (req, res)=>{
    res.render('elements',{
        nombre: 'Laura',
        titulo: 'Curso de node'
    })
})


// app.get('/generic', (req, res)=>{

//     res.sendFile(__dirname + '/public/generic.html')
// });

// app.get('/elements', (req, res)=>{

//     res.sendFile(__dirname + '/public/elements.html')
// });

app.get('*',(req, res)=>{

    res.sendFile(__dirname + '/tarea02/404.html') // el dirname se usa para especificar la ruta del path original más la carpeta que se desea mostrar con el html

});


// console.log(process.env.POST)

app.listen(port, ()=>{
    
    console.log(`Example app listening at http://localhost:${port}`)
});

