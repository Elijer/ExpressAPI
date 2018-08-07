////DEPENDENCIES
var express = require('express'),
    port = require('./elijah/port'),
    app = express(),
    bodyParser = require('body-parser');
var todoRoutes = require('./API_Todo/routes/todos');
var flameRoutes = require('./API_Flame/routes/flames');
var tenRoutes = require('./API_Ten/routes/todos');
var cors = require('cors');

////Specify which folder express should look in for static content
app.use(cors({origin: port}));
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/ten'));

//Necessary for POST requests to work correctly.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Declare the API routes and the routing files to use with them
app.use('/api/todos', todoRoutes);
app.use('/api/flames', flameRoutes);
app.use('/api/ten', tenRoutes);


//Declares static content routes, i.e. javascript and html for the apps, not the APIs
var options = {root: __dirname};

app.get('/', function(req, res) {
    res.sendFile("./views/index.html");
});

app.get('/contact', function(req, res) {
    res.sendFile('./ten/contact.html', options);
});

app.get('/hello', function(req, res) {
    res.sendFile('./ten/hello.html', options);
});

app.get('/ten', function(req, res) {
    res.sendFile('./ten/ten.html', options);
});


//Tells me if express is running or not
app.listen(port, function(){
    console.log("APP IS RUNNING ON PORT " + port);
});



/*          NOTES
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

 ---to get public ip run "curl http://169.254.169.254/latest/meta-data/public-ipv4"
 ---you might need to do this, as AWS does not gaurantee a static IP, so I guess it's subject to change.

<<<<<<< HEAD
//echo 'mongod --bind_ip=$IP --dbpath=data --nojournal --rest "$@"' > mongod
//chmod a+x mongod







/*
app.get('/noah', function(req, res){
    res.send("weirdly driven in a way that, at times seems very foreign from both his parents.");
});

app.get('/ted', function(req, res){
    res.send("Annoying when drunk.");
});

app.get('/Carla', function(req, res){
    res.send("Weakness: Accomodating to a fault.");
});

app.get('/Sadie', function(req, res){
	res.send("incredibly emotive, but exclusively so on a spectrum within melancholy and depressed. sort of like eyore, but more eager to please.");
});

app.get('/elijah', function(req, res){
    res.send("different. is that indulgently egoistic to say? I dunno. I'm weird. Sorta inconvenient a lot of the time");
});
*/
