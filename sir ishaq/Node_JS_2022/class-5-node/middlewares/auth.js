exports.authMiddleware = (req, res, next) => {
    req.session.user ? next() : res.redirect("signin")
}