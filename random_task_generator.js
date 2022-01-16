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



  const express = require("express");
  const app = express();
  
  app.listen(3000, () => {
    console.log("Application started and Listening on port 3000");
  });
  
  app.get("/", (req, res) => {
    var my_task = tasks[getRandomInt(tasks.length)];
    res.send(`
    <html> 
      <body>
        <h1>${my_task}
      </body>
    </html>`);
  });