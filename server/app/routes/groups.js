const router = require('express').Router();
const addGroup = require('../../queries/addGroup');
const joinGroup = require('../../queries/joinGroup');


router.post('/add', (req, res) => {
const {name,description,course,creatorId} = req.body;
console.log(req.body);
  addGroup(name,description,course,creatorId,(err,result)=>{
    if(err) res.send(500,`Failed to create group, error : ${err}`);
    else
    res.send(201,`${result.rows} is added`);
  });
  
});

router.post('/join', (req, res) => {
  const {groupId,userId} = req.body;
  console.log(req.body);
  joinGroup(groupId,userId,(err,result)=>{
      if(err) res.send(500,`Failed to join group, error : ${err}`);
      else
      res.send(201,`${result.rows} is added`);
    });
    
  });


module.exports = router;