import http from 'http';

const servidor = http.createServer(async (req, res) => {

    res.writeHead(200, {
        "Content-Type": "application/json"
    });

    res.end(
        JSON.stringify({
            mensaje: "Servidor funcionando correctamente"
        })
    );

});

servidor.listen(3000, () => {
    
    console.log("===================================");

    console.log("Servidor iniciado");

    console.log("http://localhost:3000");

    console.log("===================================");

});