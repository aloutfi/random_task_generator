// What are some tasks I should do around the house?

var tasks = [
'Pick up dog shit', 
'clean my shit from the toilet',
'clear off coffee table',
'clear backroom table',
'vacuum bedroom',
'laundry',
'take out porch trash',
'vacuum living room and kitchen',
'clean fixtures in bathroom',
'clean the shame corner',
'play with merlin. Lucky you!',
'do couch pillows',
'do the dishes'
];


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }



const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  
  var my_task = tasks[getRandomInt(tasks.length)];
  console.log(my_task);
  res.end(my_task);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
