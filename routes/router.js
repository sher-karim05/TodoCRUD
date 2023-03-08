const router = require('express').Router()

router.get('/', (req, res) => {
    res.send("Lets build crud api")
})

module.exports = router;