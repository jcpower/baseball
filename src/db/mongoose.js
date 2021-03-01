const mongoose = require('mongoose')


mongoose.connect('mongodb://127.0.0.1:27017/baseball-stats-api', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true 
})




