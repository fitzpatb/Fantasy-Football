const db = require('../models');

module.exports = {
  findArticles: function(req, res) {
    db.Stories.find()
      .then(articles => {
        res.json()
      })
      .catch(err => res.status(422).json(err));
  }
}