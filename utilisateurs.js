const express = require('express');
const router = express.Router();
const utilisateurs = require('./utilisateursservices');
const bcrypt=require('bcryptjs')

/* GET  */
router.get('/', async function(req, res, next) {
  try {
    res.json(await utilisateurs.getMultipleutilisateur(req.query.page));
  } catch (err) {
    console.error(`Error while getting utilisateurs `, err.message);
    next(err);
  }
});


/* POST  */

router.post('/', async function(req, res) {
    try {
    
        const test=await utilisateurs.createutilisateur(req.body)
        res.send(test);
        }
     
     catch (err) {
      console.error(`Error while creating utilisateur`, err.message);
      
    }
  });
  
module.exports = router;
/* PUT  */
router.put('/:id', async function(req, res, next) {
    try {
      res.json(await utilisateurs.updateutilisateur(req.params.id, req.body));
    } catch (err) {
      console.error(`Error while updating utilisateur`, err.message);
      next(err);
    }
  });

/* DELETE  */
router.delete('/:id', async function(req, res, next) {
    try {
      res.json(await utilisateurs.removeutilisateur(req.params.id));
    } catch (err) {
      console.error(`Error while deleting utilisateur`, err.message);
      next(err);
    }
  });
