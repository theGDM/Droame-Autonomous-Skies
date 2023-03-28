import Operator from "../models/Operator.js";

export const updateOperator = async (req, res, next) => {
    let { id } = req.params; //op id
    try {
        const updatedOperator = await Operator.findByIdAndUpdate(
            id,
            { $set: req.body },
            { new: true }
        ); //it returns the previous op json data, so we need to send new : true
        res.status(200).json(updatedOperator);
    } catch (err) {
        next(err);
    }
}

export const deleteOperator = async (req, res, next) => {
    let { id } = req.params; //op id
    try {
        await Operator.findByIdAndDelete(id);
        res.status(200).json("Operator has been Deleted");
    } catch (err) {
        next(err);
    }
}

export const getOperator = async (req, res, next) => {
    let { id } = req.params; //op id
    try {
        const op = await Operator.findById(id);
        res.status(200).json(op);
    } catch (err) {
        next(err);
    }
}

export const getAllOperators = async (req, res, next) => {
    try {
        const op = await Operator.find();
        res.status(200).json(op);
    } catch (err) {
        next(err);
    }
} 