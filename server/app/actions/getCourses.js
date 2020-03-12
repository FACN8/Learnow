require('dotenv').config();
const axiosGet = require('../util/axiosGet');

//http://localhost:5000/getList/https://www.udemy.com/api-2.0/courses/?search=algebra&page=1&page_size=50

// `https://www.udemy.com/api-2.0/courses/?search=${term}&page=${page}&page_size=50`;


  module.exports = (req,res) => {
    const {search,page,page_size} = req.query;
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
