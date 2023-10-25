const { Product, User, Brand } = require("../db");
const mongoose = require("mongoose");

const getProducts = async () => {
    const dbProducts = await Product.find({ enStock: true });
    console.log(dbProducts);
    return dbProducts;
};

const getPrice = async (user_id, product_name) => {
    console.log(`user_id: ${user_id}, product_name: ${product_name}`);

    // const userId = new mongoose.Types.ObjectId(user_id);
    // console.log(`userId: ${userId}`);

    const user = await User.findOne({ _id: user_id });
    console.log(`user:`, user);

    const productFound = await Product.findOne({ name: product_name });
    console.log(`productFound:`, productFound);

    if (
        user &&
        productFound &&
        user.brandMember.toString() === productFound.brand.toString()
    ) {
        return { price: productFound.specialPrice };
    } else {
        return { price: productFound.basePrice };
    }
};

module.exports = { getProducts, getPrice };
