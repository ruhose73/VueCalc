const Router = require('express')
const router = new Router
const AuthRouter = require("./AuthRouter")
const OutputRouter = require("./OutputRouter")

router.use("/auth", AuthRouter)
router.use("/output", OutputRouter)

module.exports = router