const router = require('express').Router();
const addGroupMessage = require('../../queries/addGroupMessage');
const getMessages = require ('../../queries/getGroupMessages');


router.post('/add', (req, res) => {
const {userId,message,groupId} = req.body;
  addGroupMessage(userId,message,groupId,(err,result)=>{
    if(err) res.send(500,`Failed to add message, error : ${err}`);
    else
    res.send(201,`${result.rows} is added`);
  });
  
});

router.get('/get/:groupId', (req, res) => {
  const {groupId} = req.params;
  getMessages(groupId,(err,result)=>{
    if(err) res.send(500,`Failed to get messages, error : ${err}`);
    else
    res.json(201,result.rows);
  });
  
});



module.exports = router;