const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: String,
    brandMember: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Brand", // referencia a marca
    },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
