const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OwnerSchema = new Schema ({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
},{
    timestamps: true
});

var Owners = mongoose.model("Owner", OwnerSchema);

module.exports = Owners;