const express = require('express'); // express ��� �߰��ϱ�

const app = express();
const port = 8080;
const path = require('path')

app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname+'/index.html'));
  });

  app.listen(port, function(err) {
    console.log('Connected port' + port);
	  if (err) {
	      return console.log('Found error', err);
		    }
			})
