const mongoose =  require('mongoose');

const BoardSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    description:String,
    created_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Board', BoardSchema);