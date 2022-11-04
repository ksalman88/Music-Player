const express = require('express');
const router = express.Router();

const Model = require('../models/musicmodel');
router.post('/add', (req, res) => {
    console.log(req.body);

    
    new Model(req.body).save()
        .then((data) => {
            console.log(data);
            res.json(data);

        }).catch((err) => {
            console.error(err);
            res.status(500).json(err);
        });

})
router.get('/getall', (req, res) => {
    Model.find({})
        .then((result) => {
            res.json(result);
        }).catch((err) => {
            console.error(err);
            res.status(500).json(err);
        });
})

// ':' denotes parameter
router.get('/getbyemail/:email', (req, res) => {
    const email = req.params.email;
    console.log(email);
    Model.find({ email: req.params.email })
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            console.error(err);
            res.status(500).json(err);
        });
})
router.get('/getbyid/:id', (req, res) => {

    Model.findById(req.params.email)
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            console.error(err);
            res.status(500).json(err);
        });
})


router.delete('/delete/:id', (req, res) => {

    Model.findByIdAndDelete(req.params.id)
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            console.error(err);
            res.status(500).json(err);
        });

})

router.put('/update/:id', (req, res) => {

    Model.findByIdAndUpdate(req.params.id,req.body,{new:true})
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            console.error(err);
            res.status(500).json(err);
        });
    });

    router.post('/authenticate',(req,res)=>{
        const formdata=req.body;
        Model.findOne({email:formdata.email,password:formdata.password})
        .then((result)=>{
            console.log(result);
//if condition wil be true
if(result){
    console.log('login success');
    res.json(result);
}else{
    console.log('login Failed');
    res.status(400).json({status:'Login Failed'});
}

        }).catch((err)=>{
            console.error(err);
            res.status(500).json(err);
        })
    })

module.exports = router;