const mongoose = require('mongoose')

exports.connectDB = () => mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() =>{
    console.log("Connected to MongoDB")
})
.catch((err) => {
    console.log(err)
})
