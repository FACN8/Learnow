
const router = require('express').Router();
const {jwtCheck} = require ('../middlewares/auth0');

router.get('/', (req, res) => {
  res.send('Welcome home');
});

router.get('/getcourses/*',require('../actions/getCourses'));

// To have an authinticated route, it should run through the jwtCheck middleware example bellow
router.use(jwtCheck);

router.get('/authorized', function (req, res) {
    res.send('Secured Resource');
});

module.exports = router;