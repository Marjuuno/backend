import User from "../models/User.js";

const getAllUsers = async () => {
    return await User.find();
};

const getUserById = async (id) => {
    return await User.findById(id);
};

const createUser = async (data) => {
    const user = new User(data);
    return await user.save();
};

const updateUser = async (id, data) => {
    return await User.findByIdAndUpdate(id, data, { new: true });
};

const deleteUser = async (id) => {
    return await User.findByIdAndDelete(id);
};

export default {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};
