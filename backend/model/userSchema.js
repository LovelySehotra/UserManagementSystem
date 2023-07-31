
import  {Schema,model} from "mongoose";

const userSchema = new Schema(

{
    name: {
        type: String,
        required: [true, 'Name is Required'],
        trim: true
    },
    username: {
        type: String,
        required: [true, 'Username is Required'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'User email is required'],
        unique: true,

    },
    password: {
        type: String,
        select: false,
    },
    bio :{
        type:String,

    },
    forgotPasswordToken: {
        type: String,
    },
    forgotPasswordExpiryDate: {
        type: Date,
    },

},
{ timestamps: true }
);
const User = mongoose.model('user', userSchema);
export default User;