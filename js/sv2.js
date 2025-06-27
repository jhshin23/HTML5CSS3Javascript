const http = require('http');
const fs = require('fs');

const server = http.createServer();

server.on('request', (req, res) => {
    const filename = "abc.txt";
    fs.readFile(filename, (err, data) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        if (err !=null) {
            console.log("Error\n");
            res.write("<h1>ERROR<h1>")
        }
        else{        res.write(data);
        }
        res.end();
    });
});

server.listen(3000, () => {
console.log(`Server running at http://localhost:${3000}`);
});

//PS C:\Apache24\htdocs> node ./js/sv.js
//Server running at http://localhost:1000