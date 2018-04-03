const express = require('express');
const app = express();

app.put('/message/:id', function (req, res) {
  var id = req.params.id;
  var hash = require('crypto')
              .createHash('sha1')
              .update(new Date().toDateString() + id)
              .digest('hex');
  res.end(hash);
});
app.listen(process.argv[2]);
