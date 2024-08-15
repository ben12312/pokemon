class ReleaseController {
    static getRelease(req, res, next) {
        const rndInt = Math.floor(Math.random() * 10) + 1 // RANDOM 1 - 10
        res.send(`${rndInt}`)
    }
}

module.exports = ReleaseController;