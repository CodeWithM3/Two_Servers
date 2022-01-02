import mongoose from 'mongoose'

let userSchema = mongoose.Schema;

userSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    username: String
    
});
const User = mongoose.model('clients', userSchema);

export default User;