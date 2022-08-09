const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VehicleBrandSchema = new Schema ({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
},{
    timestamps: true
});

var VehicleBrands = mongoose.model("VehicleBrand", VehicleBrandSchema);

module.exports = VehicleBrands;