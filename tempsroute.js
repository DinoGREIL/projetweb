const express = require('express');
const router = express.Router();
const temps = require('./tempsservices');

/* GET  */
router.get('/', async function(req, res, next) {
  try {
    res.json(await temps.getMultipletemps(req.query.page));
  } catch (err) {
    console.error(`Error while getting temps `, err.message);
    next(err);
  }
});


/* POST  */

router.post('/', async function(req, res, next) {
    try {
      res.json(await temps.createtemps(req.body));
    } catch (err) {
      console.error(`Error while creating temps`, err.message);
      next(err);
    }
  });
  
module.exports = router;
/* PUT  */
router.put('/:id', async function(req, res, next) {
    try {
      res.json(await temps.updatetemps(req.params.id, req.body));
    } catch (err) {
      console.error(`Error while updating temps`, err.message);
      next(err);
    }
  });

/* DELETE programming language */
router.delete('/:id', async function(req, res, next) {
    try {
      res.json(await temps.removetemps(req.params.id));
    } catch (err) {
      console.error(`Error while deleting temps`, err.message);
      next(err);
    }
  });
