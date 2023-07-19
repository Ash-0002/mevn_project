// this function is designed to allow the origins to send request and recieve response from the serve

// Creating allowed_origin.js file and population the origins into an array 


const allowedOrigins = require("./allowed_origins.js").default;

const corsOptions = {
    origin: (origin, callback) => {
        if(allowedOrigins.includes(origin) || !origin){
            callback(null, true);
        }else {
            callback(new Error("Not allowed by CORS"));
        }
    }
}

module.exports = corsOptions;