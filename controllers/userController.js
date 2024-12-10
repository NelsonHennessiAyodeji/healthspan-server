const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    if (!users) {
      throw new Error("Unable to get all users");
    }
    res.json(users);
  } catch (error) {
    throw new Error(error.message);
  }
};

const createUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    const user = await User.create({ name, email });
    // TODO: Create a seperate error logic for all functions,
    // so the error handling becomes cleaner and more easier to read
    if (!user) {
      throw new Error("An error occured while creating this user");
    }
    res
      .status(StatusCodes.CREATED)
      .json({ created: { name: user.name, email: user.email } });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error.message);
    throw new Error(error.message);
  }
};

const updateUser = async (req, res) => {
  try {
    const { id: userID } = req.params;
    const { name, email } = req.body;
    const user = await User.findOneAndUpdate({ _id: userID }, { name, email });
    if (!user) {
      throw new Error("This user doesn't exists");
    }

    res.json({ updated: { name: name, email: email } });
  } catch (error) {
    throw new Error(error.message);
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id: userID } = req.params;
    const user = await User.findByIdAndDelete({ _id: userID });
    if (!user) {
      throw new Error("This user doesn't exists");
    }

    res.json({ user: { name: user.name, emial: user.email } });
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { getAllUsers, createUser, updateUser, deleteUser };
