const sqldb = require("../src/index")

let client = new sqldb.client({
    host: "",
    user: "",
    password: "",
    database: ""
})

client.query(`SELECT * FROM guildsettings WHERE id = ?`, ["840829897026568201"]).then(res => console.log(res))