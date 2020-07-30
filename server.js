const express = require("express");
let  app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render("index");
});

// app.get('/api', (req, res) => {
 
// })

app.listen(3000,  () => console.log("Example app listening on port 3000!"));