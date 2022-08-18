var express = require('express'); // indicate that we want to use Express
var app = express();  // create an Express app

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname)); // tell Express which directory to look in for files

// views is directory for all template files
app.set('views', __dirname + '/html');  // tell Express that "html" folder holds app's template files
app.set('view engine', 'ejs');  // tell Express EJS is templating language

app.get('/', function(request, response) {  // tell Express to render index page when it gets a request
  response.render('pages/index');
});

app.get('/about', function(request, response) {  // tell Express to render index page when it gets a request
  response.render('pages/about');
});

app.get('/projects', function(request, response) {  // tell Express to render index page when it gets a request
  response.render('pages/projects');
});

app.listen(app.get('port'), function() { // binds applications to port on your machine and sneds message to console
  console.log('Node app is running on port', app.get('port'));
});


// This file is what handles incoming requests and
// serves files to the browser, or executes server-side code
