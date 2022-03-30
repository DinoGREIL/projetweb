const express = require('express');
const router = express.Router();
const styles = require('./styleservices');

/* GET */
router.get('/', async function(req, res, next) {
  try {
    res.json(await styles.getMultiplestyle(req.query.page));
  } catch (err) {
    console.error(`Error while getting style `, err.message);
    next(err);
  }
});


/* POST */

router.post('/', async function(req, res, next) {
    try {
      res.json(await styles.createstyle(req.body));
    } catch (err) {
      console.error(`Error while creating style`, err.message);
      next(err);
    }
  });
  
module.exports = router;
/* PUT  */
router.put('/:id', async function(req, res, next) {
    try {
      res.json(await styles.updatestyle(req.params.id, req.body));
    } catch (err) {
      console.error(`Error while updating style`, err.message);
      next(err);
    }
  });

/* DELETE  */
router.delete('/:id', async function(req, res, next) {
    try {
      res.json(await styles.removestyle(req.params.id));
    } catch (err) {
      console.error(`Error while deleting style`, err.message);
      next(err);
    }
  });
