const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VehicleModelSchema = new Schema ({
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

var VehicleModels = mongoose.model("VehicleModel", VehicleModelSchema);

module.exports = VehicleModels;