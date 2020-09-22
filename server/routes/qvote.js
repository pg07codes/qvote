const route = require('express').Router();
const qvoteController=require('./../dbControllers').qvoteController

route.post('/create',(req,res)=>{
    qvoteController.createQvote(req.body).then(({error,data})=>{
        if(error!==null) res.status(502).send(data);
        res.send(data);
    })
})

module.exports = route;