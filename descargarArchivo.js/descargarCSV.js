const http = require("http");


http.createServer( (req, res)=>{

    console.log(req);

    res.setHeader("Content-Disposition", "attachment; filename=lista.csv")
    // Content-Disposition" se usa comúnmente para indicar al navegador cómo debe manejar la respuesta. En este caso, se establece en "attachment", lo que indica al navegador que debe tratar la respuesta como un archivo adjunto descargable.

    res.writeHead(200, { 'Content-Type': 'text/csv'}); // crea el status http, es decir, (100, 200, 300, 400, 500)

    res.write(' id, nombre\n');
    res.write(' 1, Laura\n');
    res.write(' 2, Juan\n');
    res.end();
})

.listen(8080)

console.log("escuchando desde el puerto", 8080)