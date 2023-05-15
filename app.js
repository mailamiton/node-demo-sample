const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Getting the request query string
app.get('/api', function(req, res){
  console.log('id: ' + req.query.id)
  res.send('id: ' + req.query.id);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})