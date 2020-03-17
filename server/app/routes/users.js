const router = require('express').Router();
const addUser = require('../../queries/addUser');



router.get('/add/:username', (req, res) => {
const username = req.params.username ;
  addUser(username,(err,result)=>{
    if(err) res.send(500,`Failed to add user, error : ${err}`);
    else
    res.send(201,`${result.rows} is added`);
  });
  
});



module.exports = router;