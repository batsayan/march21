// var v= require('express');
// var app = v;



//require('express')().listen(3000);

var v = require('express');
var myapp= v();
 var c = require('chalk');
 var port = process.env.npm_package_config_port;
 var p=port || process.env.PORT || 3000;
myapp.listen(p, function () {
    console.log(c.blue("app listening at port:" + p));
 
}
);
myapp.get('/',function get_fn(req, res) {
    res.write("You hit the root path");
    res.write("You hit the root path");
    res.write("You hit the root path");
    //res.send("Hello from nodejs");
    console.log("Hit Root!!");

    res.end();
});

myapp.get('/download',function(req, res) {
    //res.write("You hit download path");
    //res.send("Hello from nodejs");
    res.download("./package.json", function(){
    console.log("Download Done!!");

});
//res.end();

});
myapp.get('/home',function get_fn(req, res) {
    res.send("<HTML><h1>Hello  nodejs Home page </h1></HTML>");
    console.log("Hit Home!!");
    res.end();


});
