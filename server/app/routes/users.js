const router = require('express').Router();
const addUser = require('../../queries/addUser');



router.post('/add', (req, res) => {
const {username} = req.body;
  addUser(username,(err,result)=>{
    if(err) res.send(500,`Failed to add user, error : ${err}`);
    else
    res.send(201,`${username} is added`);
  });
  
});



module.exports = router;