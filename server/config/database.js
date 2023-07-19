// import mongoose from "mongoose";
const mongoose = require("mongoose");


// There are several deprecations in the MongoDB node.js driver.To hide all deprecation warning,we are adding these additional fields


async function connect() {
    try {
        await mongoose.connect(process.env.DATABASE_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
    } catch (error) {
        console.log(error);
    }
}

module.exports = connect;