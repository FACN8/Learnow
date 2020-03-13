require('dotenv').config();
const axiosGet = require('../util/axiosGet');

//http://localhost:5000/getList/https://www.udemy.com/api-2.0/courses/?search=algebra&page=1&page_size=50

// `https://www.udemy.com/api-2.0/courses/?search=${term}&page=${page}&page_size=50`;

function validateQuery(query) {
  const {search,page,page_size} = query;
if( +page<1 ) return false;
if(+page_size < 1 || +page_size >50) return false ;
return true;
}


  module.exports = (req,res) => {
    if(!validateQuery(req.query)){
      res.status(400).send({
        message:'Invalid queries'
      })
    }
    const {search,page,page_size} = req.query;
    console.log(`Page type is : ${typeof(page)}`);
    console.log(`Page_size type is : ${typeof(page_size)}`);
    console.log(`Search term type is : ${typeof(search)}`);


    const apiUrl = `https://www.udemy.com/api-2.0/courses/?search=${search}&page=${page}  &page_size=${page_size}`;
    axiosGet(apiUrl)
    .then(result => {
    res.json(result.data);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send({
        message:'Failed to get courses',
        error:err
      })
    });
  }




//     const URL = `https://cors-anywhere.herokuapp.com/${apiBase}/courses/?search=${term}&page=${page}&page_size=50`;
