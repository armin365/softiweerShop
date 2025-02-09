import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name:{
        type: String, 
        required: true,
    },
    email:{
        type: String, 
        required: true,
    },
    password:{
        type: String, 
        required: true,
    },
    isAdmin:{
        type: Boolean, 
        required: true,
        default: false,
    },
    phone:{
        type: Number, 
        required: true,
    },
    address:{
        type: String, 
        required: true,
    },
    cart: [
        {
            product:{type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: 'products'
            },
            quantity:{
                type: Number,
                required: true
            }
        }

    ],
    wishlist: [{
        product:{type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'products'
        },
    }
    ]
})

const UserModel = mongoose.model('users',userSchema)

export default UserModel;