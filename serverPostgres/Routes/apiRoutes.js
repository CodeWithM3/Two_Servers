const express = require('express');
const db = require('../models');
const axios = require('axios');
const { next } = require('cli');
const router = express.Router();
const URL = "http://localhost:4000/api/searchclients"

//Register new customer in postgres
router.post('/registerCustomer', async (req, res)=>{
 try {
    const customer = await db.user.create({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        username: req.body.username
    })
    res.send(customer);
 } catch (error) {
     console.log('There is an error', error);   
 }
});
//find existing customer if not in postgres fecth from mongodb database
router.get('/customer', async (req, res)=>{
try {
  const searchUser = await db.user.findAll({
        where: {username : req.query.username}});
        if (searchUser.length > 0){
            res.json(searchUser);
        }else{
            const username = req.query.username
         const mongoSearch = await axios.get(URL, {params:{username}});
         res.json(mongoSearch.data);
         if(mongoSearch.data.success === true){
            await db.user.create({
                firstname : mongoSearch.data.user.firstname,
                lastname : mongoSearch.data.user.lastname,
                username: mongoSearch.data.user.username
            })
            console.log(mongoSearch.data.user.firstname)
            console.log('new user has been added')
        }
        }
       
       
         
    }catch(error){
            res.status('There is an error', error)
    }});
       

//show all customer in postgres db 
router.get('/all', (req, res)=>{
    db.user.findAll().then(user=>res.send(user));
})
module.exports = router;

