const mongoose =  require('mongoose')
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema({

    firstname:{
        type:String,
        trim:true,
        required: [true,'first name is required'],
        maxlength:30,
    },
    lastName:{
        type:String,
        trim:true,
        required: [true,'last name is required'],
        maxlength:30,
    },
    email:{
        type:String,
        trim:true,
        required: [true,'email is required'],
        unique:true,
        match:[
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please add a valid email'
        ]     
    },
    password: {
        type: String,
        trim: true,
        required: [true, 'password is required'],
        minlength: [6, 'password must have at least (6) caracters'],
    },
    role: {
        type: Number,
        default: 0
    }
}, { timestamps: true })

//encrypting password before saving
UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    this.password = await bcrypt.hash(this.password, 10)

})

// compare user password
UserSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}


// return a JWT token
UserSchema.methods.getJwtToken = function () {
    return jwt.sign({ id: this.id }, process.env.JWT_SECRET, {
        expiresIn: 3600
    });
}



module.exports = mongoose.model("User", UserSchema);