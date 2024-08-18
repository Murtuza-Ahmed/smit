var jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../data/key");

exports.vrify = (req, res, next) => {
    jwt.verify(req.headers.token, SECRET_KEY, function (err, decoded) {
        if (err) {
            return res.send("Authentication Field");
        };
        req.user = decoded.email;
        next();
    });
};