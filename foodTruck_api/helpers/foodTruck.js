var db = require('../models');

exports.getTrucks = function(req, res){
    db.foodTruck.find()
    .then(function(foodTruck){
        res.json(foodTruck);
    })
    .catch(function(err){
        res.send(err);
    });
};

exports.createTruck = function(req, res){
    db.foodTruck.create(req.body)
    .then(function(newTruck){
        res.status(201).json(newTruck);
    })
    .catch(function(err){
        res.send(err);
    });
};

exports.getTruck = function(req, res){
    db.foodTruck.findById(req.params.id)
    .then(function(foundTruck){
        res.json(foundTruck);
    })
    .catch(function(err){
        res.send(err);
    });
};

exports.updateTruck = function(req, res){
    db.foodTruck.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
    .then(function(foundTruck){
        res.json(foundTruck);
    })
    .catch(function(err){
        res.send(err);
    });
};

exports.deleteTruck = function(req, res){
    db.foodTruck.remove({_id: req.params.id})
    .then(function(){
        res.json({message: "we deleted it"});
    })
    .catch(function(err){
        res.send(err);
    });
};

module.exports = exports;
