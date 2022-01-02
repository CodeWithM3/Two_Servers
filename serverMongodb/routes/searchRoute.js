import express from 'express';
import User from '../userSchema.js'



const router = express.Router()
router.get('/searchclients', async  (req, res)=>{
  try {

  console.log('Hello World')
  
  const username = req.query.username
  
  const  searchUser =  await User.findOne({username: username})
      if(searchUser){
        return res.json ({user: searchUser, success: true})
  
      }else {
       res.json({message:"User does not exist", success: false })
   
 }  

    } catch (error) {
    console.log('There was an Error',error)
  }
})

export default router;