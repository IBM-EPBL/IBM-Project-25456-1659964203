const bcrypt = require("bcryptjs");

var salt = bcrypt.genSaltSync(5);

class Bcrypt {
  isequal(password, hash) {
    return bcrypt.compareSync(password, hash);
  }
  getHash(password) {
    return bcrypt.hashSync(password, salt);
  }
}
module.exports = new Bcrypt();
