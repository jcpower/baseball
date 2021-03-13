

const GameDayStat = mongoose.model('GameDayStat', {
    // Date: {
    //     type: Date,
    //     required: true
    // },
    Home: {
        type: String,
        required: true,
        trim: true
    },
    HomeScore: {
        type: Number,
        required: true,
        validate (value) {
            if (value <= 0) {
                throw new Error ('Score must be higher than or equal to 0')
            } 
        } 
    },
    Visitor: {
        type: String,
        required: true,
        trim: true
    },
    VisitorScore: {
        type: Number,
        required: true,
        validate (value) {
            if (value <= 0) {
                throw new Error ('Score must be higher than or equal to 0')
            } 
        } 
    }, 
    Final: {
        type: Boolean,
        default: false
    }

})

module.exports = GameDayStat