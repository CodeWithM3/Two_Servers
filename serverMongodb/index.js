import express from 'express';
import connectDB from './dbConnection/mongoConnect.js'

import clientRouter from './routes/searchRoute.js'
const app = express()
connectDB();


const PORT = process.env.PORT || 4000

app.use('/api', clientRouter)
app.listen(PORT,()=>console.log(`Mongo Server is running on ${PORT}`))



