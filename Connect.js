const mongoose = require('mongoose')

function connectMyDB(uri) {
    mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true })

    var connection = mongoose.connection

    connection.on('error', () => {
        console.log('Monogo db connection failed')
    })

    connection.on('connected', () => {
        console.log('Mongo connection successful')
    })
}
module.exports = connectMyDB