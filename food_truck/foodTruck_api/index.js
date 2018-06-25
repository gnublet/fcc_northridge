var express = require('express'),
        port = 3000 || process.env.PORT,
        foodTruckRoutes = require('./routes/foodtruck'),
        app = express(),
        bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api/foodtrucks', foodTruckRoutes);

//index route
app.get('/', function(req, res){
    // res.json({message: 'hi'});
    res.send('hello from root route');
});

app.listen(port, process.env.IP, function(){
    console.log('app is running on port ' + port);
});
