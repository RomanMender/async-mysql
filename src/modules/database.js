const mysql = require("mysql")

module.exports = class {
  constructor(options) {
    this.connection = mysql.createConnection(options)
    this.connection.connect()
  }
  /**
   * This function fetches runs a sql commands
   * @param {sql} input any string as a sql command.
   * @param {input} input the array to replace ? with
   * @returns {data} the callback
   */
  async query(sql, input) {
    return require("../actions/query.js")(this.connection, sql, input)
  }
}