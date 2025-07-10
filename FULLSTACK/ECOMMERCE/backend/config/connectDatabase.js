const mongoose = require('mongoose')
const connectDatabase = () => {
    mongoose.connect(process.env.DB).then((con)=>{
        console.log('Database connected to host:',con.connection.host)
    })
}

module.exports = connectDatabase