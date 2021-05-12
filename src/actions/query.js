module.exports = function (client, sql, input) {
    var response = []
    return new Promise((resolve, reject) => {
        client.query(sql, input, function (error, results, fields) {
            if (error) throw error
            if (Array.isArray(results)) {
                results.forEach(res => {
                    response.push(JSON.parse(JSON.stringify(res)))
                })
                resolve(response)
            }
            if (!error) resolve(true)
        })
    })
}