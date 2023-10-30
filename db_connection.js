const mongoose = require('mongoose')

const connectDatabase = () => {
    mongoose.set('strictQuery', false)
    mongoose.connect("mongodb://127.0.0.1:27017/brewapps",{
        useNewUrlParser: true,
        useUnifiedTopology: true
      }).then((data)=>{
        console.log(`Mongodb connected with server: ${data.connection.host} `)
    })
}
module.exports = connectDatabase
