import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name: { 
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    id: {
        type: String,
    },
    bio: {
        type: String,
    },
    selectedFile: String,
    banner: { type: String, },
    favRecipes: [{
        name: String,
        ingredients: String,
        instructions: String,
        img: String,
    }
    ],

});

const User = mongoose.model("User", userSchema);

export default User
