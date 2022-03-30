const express = require('express');
const router = express.Router();
const login = require('./loginservices');

module.exports=router
router.post('/',async function(req, res){
    try {
        const test = await login.connect(req)
        
        return res.send(test) 
    
        
      } catch (err) {
        console.error(`Error while connecting`, err.message);
        
      }
    });
