import Customer from "../models/Customer.js";

export const addCustomer = async (req, res, next) => {
    const { name, email, phoneNumber, oid } = req.body;
    try {
        const newCustomer = new Customer({
            OperatorId: oid,
            name: name,
            email: email,
            phoneNumber: phoneNumber
        })

        await newCustomer.save();
        res.status(200).send("Customer has been created");
    } catch (err) {
        next(err);
    }
}

export const updateCustomer = async (req, res, next) => {
    let { id } = req.params; //op id
    try {
        const updatedCustomer = await Customer.findByIdAndUpdate(
            id,
            { $set: req.body },
            { new: true }
        ); //it returns the previous op json data, so we need to send new : true
        res.status(200).json(updatedCustomer);
    } catch (err) {
        next(err);
    }
}

export const deleteCustomer = async (req, res, next) => {
    let { id } = req.params; //op id
    try {
        await Customer.findByIdAndDelete(id);
        res.status(200).json("Customer has been Deleted");
    } catch (err) {
        next(err);
    }
}

export const getCustomer = async (req, res, next) => {
    let { id } = req.params; //op id
    try {
        const cus = await Customer.findById(id);
        res.status(200).json(cus);
    } catch (err) {
        next(err);
    }
}

export const getAllCustomers = async (req, res, next) => {
    try {
        const cus = await Customer.find();
        res.status(200).json(cus);
    } catch (err) {
        next(err);
    }
} 