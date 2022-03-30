const express = require('express');
const router = express.Router();
const tenues = require('./tenueservices');

/* GET  */
router.get('/', async function(req, res, next) {
  try {
    res.json(await tenues.getMultipletenue(req.query.page));
  } catch (err) {
    console.error(`Error while getting tenue `, err.message);
    next(err);
  }
});


/* POST */

router.post('/', async function(req, res, next) {
    try {
      res.json(await tenues.createtenue(req.body));
    } catch (err) {
      console.error(`Error while creating tenue`, err.message);
      next(err);
    }
  });
  
module.exports = router;
/* PUT  */
router.put('/:id', async function(req, res, next) {
    try {
      res.json(await tenues.updatetenue(req.params.id, req.body));
    } catch (err) {
      console.error(`Error while updating tenue`, err.message);
      next(err);
    }
  });

/* DELETE  */
router.delete('/:id', async function(req, res, next) {
    try {
      res.json(await tenues.removetenue(req.params.id));
    } catch (err) {
      console.error(`Error while deleting tenue`, err.message);
      next(err);
    }
  });
