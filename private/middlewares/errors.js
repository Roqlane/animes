const {validationResult} = require('express-validator')

function validatorError (req, res, next) {
    console.log(req.body)
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const errorsToReturn = []
        for (let i = 0; i < errors.errors.length; i++) errorsToReturn.push(errors.errors[i].msg)
        console.log(errorsToReturn)
        return next(errorsToReturn);
    }
    next()
}


module.exports = {validatorError}