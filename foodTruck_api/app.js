var express = require('express'),
        foodTruckRoutes = require('./routes/foodTruck'),
        app = express(),
        cors = require('cors'),
        bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api/foodtrucks', foodTruckRoutes);

//index route
app.get('/', function(req, res){
    // res.json({message: "sends json"});
    res.send('hello from root route');
});

app.listen(process.env.PORT || 3000, process.env.IP, function(){
    console.log('api server is running');
});
