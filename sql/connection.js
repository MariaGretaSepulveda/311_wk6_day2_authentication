const mysql = require('mysql')
const password= require('../config')

class Connection {
  constructor() {
    if (!this.pool) {
      console.log('creating mysql connection...')
      this.pool = mysql.createPool({
        connectionLimit: 100,
        host: '35.184.83.94',
        user: 'root',
        password: password,
        database: 'Admin'
      })
      
      return this.pool
    }

    return this.pool
  }
}

const instance = new Connection()

module.exports = instance;