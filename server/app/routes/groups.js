const router = require('express').Router();
const addGroup = require('../../queries/addGroup');



router.post('/create/', (req, res) => {
const {name,description,course,participants} = req.body;
  addGroup(name,description,course,participants,(err,result)=>{
    if(err) res.send(500,`Failed to create group, error : ${err}`);
    else
    res.send(201,`${result.rows} is added`);
  });
  
});



module.exports = router;