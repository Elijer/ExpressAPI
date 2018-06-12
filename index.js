//public endpoints w/ current IP address
//curl http://169.254.169.254/latest/meta-data/public-ipv4
//http://52.91.102.175:8080

var express = require('express'),
    port = require('./elijah/port'),
    app = express(),
    bodyParser = require('body-parser');
var todoRoutes = require('./API_Todo/routes/todos');
var flameRoutes = require('./API_Flame/routes/flames');

app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));

app.use('/api/todos', todoRoutes);
app.use('/api/flames', flameRoutes);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
    
//serves a static page
app.get('/', function(req, res){
    res.sendFile("index.html");
});
    
app.listen(port, function(){
    console.log("APP IS RUNNING ON PORT " + port);
});



/*          NOTES
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

 ---to get public ip run "curl http://169.254.169.254/latest/meta-data/public-ipv4"
 ---you might need to do this, as AWS does not gaurantee a static IP, so I guess it's subject to change.

 ---use following command to kill mongo: "sudo service mongod stop"
*/