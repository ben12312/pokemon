class ProbabiltyController {
    static getProbablity(req, res, next) {
        res.send(Math.random() < 0.5)
    }
}

module.exports = ProbabiltyController;