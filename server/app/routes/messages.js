const router = require('express').Router();
const addGroupMessage = require('../../queries/addGroupMessage');



router.post('/add', (req, res) => {
const {userId,message,groupId} = req.body;
  addGroupMessage(userId,message,groupId,(err,result)=>{
    if(err) res.send(500,`Failed to add message, error : ${err}`);
    else
    res.send(201,`${result.rows} is added`);
  });
  
});



module.exports = router;