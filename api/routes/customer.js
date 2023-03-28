import express from 'express';
import { addCustomer, deleteCustomer, getAllCustomers, getCustomer, updateCustomer } from '../controllers/customerController.js';

const router = express.Router();

//ADD
router.post("/add/:oid", addCustomer);

//UPDATE
router.put("/:id", updateCustomer); //so the owner or admin can update the user

//DELETE
router.delete("/:id", deleteCustomer);

//GET
router.get("/:id", getCustomer);

//GET ALL
router.get("/", getAllCustomers); //only admin can get all the data, not every user

export default router;