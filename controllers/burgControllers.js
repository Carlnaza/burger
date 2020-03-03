const connection = require('../config/connection.js');

const burger = {
  getBurgs(cb) {
    connection.query('SELECT * FROM burgers', (err, burgers) => {
      if (err) throw err
      
      cb(burgers)
    })
  },
  getOneBurg(burger, cb) {
    console.log(burger)
    connection.query('INSERT INTO burgers SET ?', burger, (err) => {
      if (err) throw err
      cb()
    })
  },
  updateBurg(update, id, cb) {
    connection.query('UPDATE burgers SET ? WHERE ?', [update, { id }], err => {
      if (err) throw err
      cb()
    })
  }
}

module.exports = burger