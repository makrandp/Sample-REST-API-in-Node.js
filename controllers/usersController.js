var User = require('../model/usersModel');
//var bodyParser = require('body-parser');


module.exports = {
  findAll:findAll,
  checkEmail:checkEmail,
   add:add
};


function findAll(req, res) {
        
        User.find({}, function(err, users) {
            if (err) throw err;
            
            res.send(users);
        });
        
    }



function checkEmailPassword(req, res) {

    //   User.find({emailID: req.params.emailID}); 
        User.find({emailID: req.params.emailID,name: req.params.name }, function(err, users) {
            if (err) {
       response = {"error" : true,"message" : "Error fetching data"};
       res.json(response);    
       return; 
        }
            
            if(users.length != 0)
            res.send(users);
            else{
                response = {"error" : true,"message" : "Data not found"};
                res.json(response);
            }
            

    });
}       


function add(req, res) {
        
     
           var user = User({
               emailID: req.body.emailID,
               name: req.body.name
           });

           user.save(function(err) {
               if (err) throw err;
               res.send('Success');
           });
                    
    }







/*

module.exports = function(app) {
    
   

    app.get('/users/login/:emailID/:password/', function(req, res) {

    //   User.find({emailID: req.params.emailID}); 
        User.find({emailID: req.params.emailID,password: req.params.password }, function(err, users) {
            if (err) {
       response = {"error" : true,"message" : "Error fetching data"};
       res.json(response);    
       return; 
        }
            
            if(users.length != 0)
            res.send(users);
            else{
                response = {"error" : true,"message" : "Data not found"};
                res.json(response);
            }
            

        });
        
    });


app.get('/users/login/', function(req, res) {
        
        User.find({}, function(err, users) {
            if (err) throw err;
            
            res.send(users);
        });
        
    });



    app.post('/users/login/', function(req, res) {
        
     
           var user = User({
               emailID: req.body.emailID,
               password: req.body.password
           });

           user.save(function(err) {
               if (err) throw err;
               res.send('Success');
           });
                    
    });
   

}*/