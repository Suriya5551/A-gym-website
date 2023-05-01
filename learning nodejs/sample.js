const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;
const home = fs.readFileSync('./Home.html');
const Blog = fs.readFileSync('./Blog.html');
const Service = fs.readFileSync('./Service.html');
const About = fs.readFileSync('./About.html');


const server = http.createServer((req, res) => {
  console.log(req.url);
  url = req.url;
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  if(url == '/home'){
    res.end(home);
  }
  else if(url == '/Blog'){
    res.end(Blog);
  }
  else if(url == '/Service'){
    res.end(Service);
  }
  else if(url == '/About'){
    res.end('/About');
  }
  else {
    res.statusCode = 404;
    res.end('<h1> 404 not found<h1>');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});