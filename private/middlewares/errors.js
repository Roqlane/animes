const {validationResult} = require('express-validator')

function validatorError (req, res, next) {
    console.log(req.body)
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return next(errors);
    }
    next()
}

module.exports = {validatorError}