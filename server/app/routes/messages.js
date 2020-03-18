const router = require('express').Router();
const addGroupMessage = require('../../queries/addGroupMessage');



router.post('/add', (req, res) => {
  console.log('Im in message/add route!');
const {userId,message,groupId} = req.body;
console.log(req.body);
  addGroupMessage(userId,message,groupId,(err,result)=>{
    if(err) res.send(500,`Failed to add message, error : ${err}`);
    else
    res.send(201,`${result.rows} is added`);
  });
  
});



module.exports = router;