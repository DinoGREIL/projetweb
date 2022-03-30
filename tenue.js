const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultipletenue(page = 1){
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT idtenue, nomtenue, proprietaire,haut,bas,chaussures,accessoire,style,temps
    FROM tenue LIMIT ${offset},${config.listPerPage}`
  );
  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data,
    meta
  }
}

module.exports = {
    getMultipletenue,
    createtenue,
    updatetenue,
    removetenue,
    
  }

async function createtenue(tenue){
    const result = await db.query(
      `INSERT INTO tenue
      (nomtenue, proprietaire,haut,bas,chaussures,accessoire,style,temps) 
      VALUES 
      ("${tenue.nomtenue}", ${tenue.proprietaire}, ${tenue.haut},${tenue.bas},${tenue.chaussures},${tenue.accessoire},${tenue.style},${tenue.temps})`
    );
  
    let message = 'Error in creating tenue';
  
    if (result.affectedRows) {
      message = 'tenue created successfully';
    }
  
    return {message};
  }

async function updatetenue(id, tenue){
    const result = await db.query(
      `UPDATE tenue
      SET nomtenue="${tenue.nomtenue}", proprietaire=${tenue.proprietaire}, haut=${tenue.haut}, bas=${tenue.bas},chaussures=${tenue.chaussures},accessoire=${tenue.accessoire},style=${tenue.style},temps=${tenue.temps}
      WHERE idtenue=${id}` 
    );
  
    let message = 'Error in updating tenue';
  
    if (result.affectedRows) {
      message = 'tenue updated successfully';
    }
  
    return {message};
  }






async function removetenue(id){
    const result = await db.query(
      `DELETE FROM tenue WHERE idtenue=${id}`
    );
  
    let message = 'Error in deleting tenue';
  
    if (result.affectedRows) {
      message = 'tenue deleted successfully';
    }
  
    return {message};
  }