const express = require ('express');
const db = require('./models')
const app = express();
const apiRoutes = require('./Routes/apiRoutes')



const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/api', apiRoutes);


db.sequelize.sync().then(()=>{
    app.listen(PORT,()=>console.log(`server is running on ${PORT}`))
})
