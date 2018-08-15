// interactor between validator, controller & api
const Repository = require('./haha-test-repository')
const transformer = require('./haha-test-transformer')

class HahaTestController {
  async create(req, res, next) {
      try {
          let repo = new Repository()
          let data = await repo.create(req.query)
          return res.json({
              data: transformer.create(data)
          })
      } catch (error) {
          console.log(error)
          return res.status(500).json({
              message: `Unknown Error Occured : ${error.message || error}`
          })
      }
  }
}

module.exports = new HahaTestController()
