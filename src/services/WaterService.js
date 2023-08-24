const UserModel = require("../models/User");


exports.getWaterSummary = async (id) => {
    return await UserModel.findById(id, { water: 1 });
}