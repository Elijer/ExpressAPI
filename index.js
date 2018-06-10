//public endpoints w/ current IP address
//curl http://169.254.169.254/latest/meta-data/public-ipv4
//http://107.20.32.119:8080

var express = require('express'),
    port = require('./elijah/port'),
    app = express(),
    bodyParser = require('body-parser');

var todoRoutes = require('./API_Todo/routes/todos');
var flameRoutes = require('./API_Flame/routes/flames');
app.use(express.static(__dirname + '/views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
    
//serves a static page
app.get('/', function(req, res){
    res.sendFile("index.html");
});

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

app.use('/api/todos', todoRoutes);
app.use('/api/flames', flameRoutes);
    
app.listen(port, function(){
    console.log("APP IS RUNNING ON PORT " + port);
});
    
    
/*
app.get('/', function(req, res){
    res.send("hello from the root route");
});

app.use('/api/todos', todoRoutes);

    //tell express to listen to a port specified by cloud9
    //and if it finds the endpoint, to log it to terminal
app.listen(3000, function(){
    console.log("APP IS RUNNING ON PORT " + 3000);
});
*/

        //NOTES
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//remember not to copy the double slashes though...

//to get public ip run "curl http://169.254.169.254/latest/meta-data/public-ipv4"
//you might need to do this, as AWS does not gaurantee a static IP, so I guess it's subject to change.

//use following command to kill mongo: "sudo service mongod stop"

//echo 'mongod --bind_ip=$IP --dbpath=data --nojournal --rest "$@"' > mongod
//chmod a+x mongod
