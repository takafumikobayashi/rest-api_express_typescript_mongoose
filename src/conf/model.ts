import * as mongoose from 'mongoose';

const uri: string = 'mongodb://127.0.0.1:27017/verdb';

mongoose.connect(uri, (err: any) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log("Succesfully Connected!")
    }
});

export interface Users extends mongoose.Document {
    user: string; 
    password: string; 
};

export const UserSchema = new mongoose.Schema({
    user: {type:String, required: true},
    password: {type:String, required: true},
});
  
const User = mongoose.model('User', UserSchema);
export default User;




