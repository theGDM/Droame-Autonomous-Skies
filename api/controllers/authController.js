import Operator from '../models/Operator.js';
import bcrypt from 'bcryptjs';
import { createError } from '../utills/error.js';
import jwt from 'jsonwebtoken';

export const register = async (req, res, next) => {
    const { username, email, password, touristPlace, droneNumbers } = req.body;
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        const newOperator = new Operator({
            username: username,
            email: email,
            password: hash,
            droneNumbers: droneNumbers,
            touristPlace: touristPlace
        })

        await newOperator.save();
        res.status(200).send("User has been created");
    } catch (err) {
        next(err);
    }
}

export const login = async (req, res, next) => {
    try {
        const op = await Operator.findOne({ username: req.body.username }) //as we have only one user with this username
        console.log(op);
        if (!op) return next(createError(404, "User not found!"));

        const isPasswordCorrect = await bcrypt.compare(req.body.password, op.password);
        if (!isPasswordCorrect) return next(createError(400, "Wrong password or username"));

        //We will create the token here
        const token = jwt.sign({ id: op._id, drones: op.droneNumbers }, process.env.JWTSECRET);
        //now what we will do, we will set this token into cookies
        const { password, ...otherDetails } = op._doc;
        res
            .cookie("access_token", token, {
                httpOnly: true, //it does not allow to any client script to reach this cookie
            }).
            status(200).
            json(otherDetails);
    } catch (err) {
        next(err);
    }
}