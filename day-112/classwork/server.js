const http = require("http")
const server = http.createServer((req, res) => {
    if(req.url === "/"){
        res.end("hello luka")
    }
    if(req.url === "/lomi"){
        res.end("<h1>This is about luka giorgadze</h1>")
    }
    if(req.url === "/"){
        res,end("my name is luka")
    }
    if(req.url === "/lomi"){
        res.end(<h2>my name is luka giorgazde im 12 years old im programer and i like GOA</h2>)
    }
})
const localhost = 3000

console.log(`server listen: http://localhost:${localhost}`)
server.listen(localhost)