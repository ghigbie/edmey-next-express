import User from '../models/user';
import { hashPassword, comparePassword } from '../utils/auth';

export const register = async (req, res, next) => {
    try {
        const {name, email, password} = req.body;
        if(!name) return res.status(400).send("Name is required");
        if(!email) return res.status(400).send("Email is required");
        if(!password || password.length < 6 ) {
            return res
                .status(400)
                .send("Password is required & should be at least 6 chacters long");
        }
        let userExist = await User.findOne({ email }).exec();
        if(userExist) return res.status(400).send('Email is already in use.');
        const hashedPassword = await hashPassword(password)
        const user = new User({
            name, 
            email, 
            password: hashedPassword
        });
        user.save()
        console.log("saved user", user);
    } catch (err){
        console.error('Error:', err);
        return res.status(400).send("Error. Please try again.")
    }
};

