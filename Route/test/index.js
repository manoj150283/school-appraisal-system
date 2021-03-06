const { Action } = require('express-route-auto')
class Index extends Action {
  constructor () {
    super()
    this.Item = this.Model.Item
    this.sequelize = this.Model.sequelize
  }
  _get (req, res, next) {
    res.send(this.Libs.infoMap)
  }

  _post (req, res, next) {
    let data = req.body
    if (data) {
      res.send(data.name)
    } else {
      res.status(500).send('no data post!')
    }
  }
}

module.exports = new Index()
