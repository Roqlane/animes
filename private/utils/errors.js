//db error
const databaseError = (err, res) => {
    console.error(err)
    res.json("Une erreur est survenue avec la base de donnée. Veuillez réessayer ultérieurement.");
}


module.exports = {databaseError}