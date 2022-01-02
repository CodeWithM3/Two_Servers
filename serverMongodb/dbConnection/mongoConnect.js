import mongoose from 'mongoose';
const URI = 'mongodb+srv://doubleserver:clients@cluster0.drhot.mongodb.net/doubleserver?retryWrites=true&w=majority'
const connectDB = async ()=>{
    await mongoose.connect(URI)
    console.log('Db is connected successfully')
    
}
export default connectDB;