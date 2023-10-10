const http = require('http')

http.createServer((req, res)=>{

    
    res.setHeader('Content-Disposition', 'attachment; filename= hola.SQL')
    res.writeHead(200, {'Content-Type': 'application/SQL'})

    const persona ={
        id: 1,
        nombre: 'laura'

    }

    res.write(JSON.stringify(persona))
    

    res.end()
})

.listen(8080)