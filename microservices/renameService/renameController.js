class RenameController {
  static getRename(req, res, next) {
    let { times } = req.query;
    res.send(`${fibonacci(times)}`);
  }
}

function fibonacci(number) {
  let n1 = 0, n2 = 1, nextTerm;
  let getLast = 0;
  for (let i = 0; i <= number; i++) {
    getLast = n1
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }
  return getLast
}

module.exports = RenameController;
