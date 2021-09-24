// console.log("hello world");
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Pseudo Selectors and more Designing</title>
      <style>
          .container {
              border: 5px solid brown;
              background-color: rgb(213 251 180);
              padding: 34px;
              margin: 34px auto;
              width: 666px;
          }
          a{
              text-decoration: none;
  
          }
          a:hover{
              color: red;
              background-color: rgb(49, 219, 148);
          }
          a:visited{
              background-color: greenyellow;
  
          }
          a :active{
              background-color: rgb(233, 64, 13);
          }
          .btn{
              background-color: #9875eb;
              padding: 6px;
              border: none;
              cursor: pointer;
              font-size: 15px;
              border-radius: 10px;;
          }
          .btn:hover{
              background-color: rgb(255, 7, 172);
              border: 2px solid black;
          }
      </style>
  </head>
  
  <body>
      <div class="container" id="cont1">
  
          <head>This is my heading </head>
          <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia sed sit maxime est quae veniam nulla
              delectus fuga odit facilis incidunt in, ab illo consectetur alias ipsam dolorum, dolore eaque. Lorem ipsum
              dolor, sit amet consectetur adipisicing elit. Facere molestias qui excepturi fuga, sit architecto? Aliquid
              id mollitia doloribus architecto optio totam pariatur atque a omnis suscipit ab, dolorem sunt?</p>
              <a href="https://google.com" class="btn">Read More</a>
              <button class="btn">Any Query</button>
  
      </div>
  
  </body>
  
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});