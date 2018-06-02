var express = require('express'),
    port = 3000,
    app = express();
    
app.get('/', function(req, res){
    res.send("hello from the root route");
});

var todoRoutes = require('./routes/todos');
app.use('/api/todos', todoRoutes);
    
app.listen(port, function(){
    console.log("APP IS RUNNING ON PORT " + port);
});
    
    
    
    
    
//port = process.env.PORT || 3000,
//port = 3000,
//bodyParser = require('body-parser');
    
/*
var todoRoutes = require('./routes/todos');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
    
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
//public endpoints w/ current IP address
//http://54.86.60.68:8080

//to get public ip run "curl http://169.254.169.254/latest/meta-data/public-ipv4"
//you might need to do this, as AWS does not gaurantee a static IP, so I guess it's subject to change.

//use following command to kill mongo: "sudo service mongod stop"

//echo 'mongod --bind_ip=$IP --dbpath=data --nojournal --rest "$@"' > mongod
//chmod a+x mongod
