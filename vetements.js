const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiplevetement(page = 1){
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT idvetement,nomvetement,pourchaud,pourfroid,pourpluie,pourvent,poursoleil,style,categorie,proprietaire
    FROM vetement
     LIMIT ${offset},${config.listPerPage}`
  );
  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data,
    meta
  }
}

module.exports = {
    getMultiplevetement,
    createvetement,
    updatevetement,
    removevetement,
  }

async function createvetement(vetement){
    const result = await db.query(
      `INSERT INTO vetement 
      (nomvetement,pourchaud,pourfroid,pourpluie,pourvent,poursoleil,style,categorie,proprietaire) 
      VALUES 
      ( "${vetement.nomvetement}", ${vetement.pourchaud},${vetement.pourfroid},${vetement.pourpluie},${vetement.pourvent},${vetement.poursoleil},${vetement.style},"${vetement.categorie}",${vetement.proprietaire})`
    );
  
    let message = 'Error in creating vetement';
  
    if (result.affectedRows) {
      message = 'vetement created successfully';
    }
  
    return {message};
  }

async function updatevetement(id, vetement){
    const result = await db.query(
      `UPDATE vetement
      SET nomvetement="${vetement.nomvetement}", pourchaud=${vetement.pourchaud}, pourfroid=${vetement.pourfroid},pourpluie=${vetement.pourpluie},pourvent=${vetement.pourvent},poursoleil=${vetement.poursoleil},style=${vetement.style},proprietaire=${vetement.proprietaire}
      WHERE idvetement=${id}` 
    );
  
    let message = 'Error in updating vetement';
  
    if (result.affectedRows) {
      message = 'vetement updated successfully';
    }
  
    return {message};
  }

async function removevetement(id){
    const result = await db.query(
      `DELETE FROM vetement WHERE idvetement=${id}`
    );
  
    let message = 'Error in deleting vetement';
  
    if (result.affectedRows) {
      message = 'vetement deleted successfully';
    }
  
    return {message};
  }