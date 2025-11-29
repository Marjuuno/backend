import express from "express";
import {
    getUser,
    createUser,
    updateUser,
    deleteUser,
    getUserById
} from "../controllers/userController.js";
import { validateUser } from "../validators/userValidator.js";

const router = express.Router();

// GET all users
router.get("/", getUser);

// GET one user
router.get("/:id", getUserById);

// CREATE user
router.post("/", validateUser, createUser);

// UPDATE (PUT or PATCH)
router.put("/:id", updateUser);
router.patch("/:id", updateUser);

// DELETE user
router.delete("/:id", deleteUser);

export default router;
