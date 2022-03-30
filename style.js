const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiplestyle(page = 1){
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT idstyle, nomstyle
    FROM style LIMIT ${offset},${config.listPerPage}`
  );
  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data,
    meta
  }
}

module.exports = {
    getMultiplestyle,
    createstyle,
    updatestyle,
    removestyle,
    
  }

async function createstyle(style){
    const result = await db.query(
      `INSERT INTO style 
      (nomstyle) 
      VALUES 
      ("${style.nomstyle}")`
    );
  
    let message = 'Error in creating style';
  
    if (result.affectedRows) {
      message = 'style created successfully';
    }
  
    return {message};
  }

async function updatestyle(id, style){
    const result = await db.query(
      `UPDATE style
      SET nomstyle="${style.nomstyle}"
      WHERE idstyle=${id}` 
    );
  
    let message = 'Error in updating style';
  
    if (result.affectedRows) {
      message = 'style updated successfully';
    }
  
    return {message};
  }






async function removestyle(id){
    const result = await db.query(
      `DELETE FROM style WHERE idstyle=${id}`
    );
  
    let message = 'Error in deleting style';
  
    if (result.affectedRows) {
      message = 'style deleted successfully';
    }
  
    return {message};
  }