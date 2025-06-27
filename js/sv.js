const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});  
    res.write("<h1>Hi, My name is Ji<h1>");
    res.end("<h1>Hello World!<h1>");
    })

server.listen(1000, () => {
console.log(`Server running at http://localhost:${1000}`);
});

//PS C:\Apache24\htdocs> node ./js/sv.js
//Server running at http://localhost:1000