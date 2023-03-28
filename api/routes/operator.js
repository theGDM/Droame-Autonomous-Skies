import express from 'express';
import { deleteOperator, getAllOperators, getOperator, updateOperator } from '../controllers/operatorController.js';
import { verifyUser } from '../utills/verifyToken.js';

const router = express.Router();

//UPDATE
router.put("/:id", verifyUser, updateOperator); //so the owner or admin can update the user

//DELETE
router.delete("/:id", verifyUser, deleteOperator);

//GET
router.get("/:id", verifyUser, getOperator);

//GET ALL
router.get("/", getAllOperators); //only admin can get all the data, not every user

export default router;