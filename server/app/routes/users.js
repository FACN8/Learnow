const router = require('express').Router();
const addUser = require('../../queries/addUser');



router.post('/add', (req, res) => {
const {id,username} = req.body;
  addUser(id,username,(err,result)=>{
    if(err) res.send(500,`Failed to add user, error : ${err}`);
    else
    res.send(201,`${username} is added`);
  });
  
});



module.exports = router;